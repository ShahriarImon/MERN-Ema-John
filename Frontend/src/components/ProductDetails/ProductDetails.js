import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();

  useEffect(() => {
    fetch(`https://emaa-john.herokuapp.com/product/${params.key}`)
      .then((res) => res.json())
      .then((result) => console.log(result));
  }, []);
  return <div>wellcome to productDetails</div>;
};

export default ProductDetails;
