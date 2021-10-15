import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetProductsType } from "../Services/Actions/action";

function Header() {
  const dispatch = useDispatch();
  const productsType = useSelector(
    (state) => state.ProductsTypeReducer.productsType
  );
  
  useEffect(() => {
    dispatch(GetProductsType());
  }, []);

  return (
    <div className="header-container">
      <div className="main-header">
        {productsType &&
          productsType.map((product) => (
            <div className="child-header" key={product}>
              {product}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Header;
