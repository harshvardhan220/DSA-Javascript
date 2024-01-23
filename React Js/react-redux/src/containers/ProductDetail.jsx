import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ActionTypes } from "../redux/constants/action-types";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const singleProduct = useSelector((state) => state?.singleProduct);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${productId}`)
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: data });
      })
      .catch((err) => console.log(error));

    return () => {
      dispatch({ type: ActionTypes.REMOVE_SELECTED_PRODUCT, payload: {} });
    };
  }, []);

  return Object.keys(singleProduct).length === 0 ? (
    <>
      <h1 style={{ marginTop: "100px" }}>Loading</h1>
    </>
  ) : (
    <div style={{ marginTop: "150px" }}>
      <img src={`${singleProduct?.image}`} alt="/" height="100" width="100" />
      <h1>{singleProduct?.title}</h1>
      <h2>${singleProduct?.price}</h2>
      <h3>{singleProduct?.description}</h3>
      <h4>{singleProduct?.category}</h4>
      <h5>Rating = Rate{singleProduct?.rating?.rate}</h5>
      <h5>Rating = Count{singleProduct?.rating?.count}</h5>
    </div>
  );
};

export default ProductDetail;
