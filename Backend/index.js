const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient, ServerApiVersion } = require("mongodb");
var nodemailer = require("nodemailer");
var cors = require("cors");
const app = express();

require("dotenv").config();

//* parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.listen(process.env.PORT || 5000, () => {});

const uri = process.env.CONNECTION_URL;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

let transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "imon.shahriar012@gmail.com", // generated ethereal user
    pass: "ihujonykuqgfihoa", // generated ethereal password
  },
});
client.connect((err) => {
  const productsCollection = client.db("EmaJohn").collection("products");
  const ordersCollection = client.db("EmaJohn").collection("orders");
  // perform actions on the collection object
  app.get("/", (req, res) => {
    res.send(`Welcome to Ema-John API`);
  });
  app.post("/addallproducts", (req, res) => {
    products = req.body;
    console.log("products:", products);
    productsCollection
      .insertMany(products)
      .then((result) => res.send(result.insertedCount));
  });
  app.get("/products", (req, res) => {
    productsCollection.find({}).toArray((err, documents) => {
      res.send(documents);
    });
  });

  app.get("/product/:key", (req, res) => {
    productsCollection
      .find({ key: req.params.key })
      .toArray((err, documents) => {
        res.send(documents);
      });
  });
  app.post("/addorder", (req, res) => {
    console.log(req.body);
    const mailOptions = {
      from: "imon.shahriar012@gmail.com", // sender address
      to: req.body.shipmentInfo.email, // list of receivers
      subject: "Verification Mail", // Subject line
      html: "<p>Hi {req.body.shipmentInfo.name}, Welcome to Ema-John</p>", // plain text body
    };
    ordersCollection.insertOne(req.body).then((result) => {
      transporter.sendMail(mailOptions, function (err, info) {
        if (err) console.log(err);
        else console.log(info);
      });
      res.send(result.acknowledged);
    });
  });
});
