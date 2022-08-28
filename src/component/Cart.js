import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  const cartProducts = useSelector((state) => state.cartData);
  console.warn(cartProducts);
  let amount =
    cartProducts.length &&
    cartProducts.map((prod) => prod.price).reduce((prev, next) => prev + next);
  console.warn(amount);
  return (
    <div>
      <Link to="/">Product-List</Link>
      <h1>Cart Page</h1>
      <div className="cart-product-lists">
        <table>
          <tr>
            <th>Name</th>
            <th>Photo</th>
            <th>Brand</th>
            <th>Category</th>
            <th>Price</th>
            {/* <td>Discount</td>
            <td>Tax</td>
            <td>Total</td> */}
          </tr>
          {cartProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.name}</td>
              <td>
                <img
                  style={{ height: "40px" }}
                  src={product.photo}
                  alt="product"
                />
              </td>
              <td>{product.brand}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
              {/* <td>{product.price / 10}</td>
              <td>{(product.price - product.price / 10) / 20}</td> */}
            </tr>
          ))}
        </table>
        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>{Math.round(amount)}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{Math.round(amount / 10)}</span>
          </div>
          <div className="adjust-price">
            <span>Tax</span>
            <span>{Math.round(amount - amount / 10) / 20}</span>
          </div>
          <div className="adjust-price">
            <span>Total</span>
            <span>
              {Math.round(amount - amount / 10 + (amount - amount / 10) / 20)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
