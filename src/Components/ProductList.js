import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProducts } from "../Services/Actions/action";

function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.ProductsReducer.products);

  useEffect(() => {
    dispatch(GetProducts());
  }, []);

  return (
      <div className="product-container">
    <div className="row">
      {products &&
        products.map((product) => {
            let alteredDesc;
           alteredDesc=product.description.length>350?product.description.slice(0,350).concat("..."):product.description;
          
            return(
          <div className="col-lg-3 col-md-6" key={product.id}>
            <div className="card" style={{ width: "18rem" }}>
              <img src={product.image} className="card-img-top product-img" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{alteredDesc}</p>
                <div className="btn-div">
                <div className="btn-price">Buy @ {product.price}</div>
                <div className="btn-rating">{product.rating.rate}/5 rated by {product.rating.count}</div>
                </div>
              </div>
            </div>
          </div>
  )}
  )}
    </div>
    </div>
  );
}

export default ProductList;
