import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { ProductSearch } from "../redux/productAction";

const Header = () => {
  const result = useSelector((state) => state.cartData);
  const dispatch = useDispatch();
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">E-Comm</h1>
      </Link>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search Product, Brand, ...."
          onChange={(e) => dispatch(ProductSearch(e.target.value))}
        />
      </div>
      <Link to="/cart">
        <div className="cart-div">
          <span>{result.length}</span>
          <img
            src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/344/external-add-to-cart-e-commerce-kmg-design-basic-outline-kmg-design.png"
            alt="addToCart"
          />
        </div>
      </Link>
    </div>
  );
};

export default Header;
