import React, { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductComponent = () => {
  const products = useSelector((state) => state.allproducts.products);
  const renderList = products?.map((el, i) => {
    return (
      <div className="four column wide" key={i}>
        <Link to={`product/${el?.id}`}>
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <img src={el?.image} alt="/" />
              </div>
              <div className="content">
                <div className="header">{el?.title}</div>
                <div className="meta price">$ {el?.price}</div>
                <div className="meta">{el?.category}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <>{renderList}</>;
};

export default ProductComponent;
