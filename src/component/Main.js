import { addToCart, emptyFromCart, removeFromCart } from "../redux/action";
import { useDispatch } from "react-redux/es/exports";
import { ProductList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function Main() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.productData);
  // console.warn("hellod", data);car

  useEffect(() => {
    dispatch(ProductList());
  }, []);

  return (
    <>
      <div>
        <button onClick={() => dispatch(emptyFromCart())}>Emptycart</button>
      </div>
      <div className="product-container">
        {data.map((item) => (
          <div className="product-item" key={item.id}>
            <img src={item.photo} alt="" />
            <div>Name : {item.name}</div>
            <div>Price : {item.price} INR</div>
            <div>Category : {item.category}</div>
            <div>Brand : {item.brand}</div>
            <div>
              <div>
                <button onClick={() => dispatch(addToCart(item))}>
                  Add To Cart
                </button>
              </div>
              <div>
                <button onClick={() => dispatch(removeFromCart(item.id))}>
                  Remove From Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Main;
