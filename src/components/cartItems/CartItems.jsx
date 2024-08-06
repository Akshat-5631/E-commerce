import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/Frontend_Assets/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalcartAmount , all_product, cartItems, removeFromCart } = useContext(ShopContext);

  if (!all_product || !cartItems) {
    return null; // or some loading indicator
  }

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="carticon-format cartitems-format-main">
                <img
                  src={e.image}
                  alt={e.name}
                  className="carticon-product-icon"
                />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className="cartitems-qunantity">
                  {cartItems[e.id]}
                </button>
                <p>${e.new_price * cartItems[e.id]}</p>
                <button
                  className="cartitems-remove-icon"
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                >
                  <img src={remove_icon} alt="Remove" />
                </button>
              </div>
              <hr />
            </div>
          );
        }
        return null; // add this line to avoid returning undefined
      })}
      <div className="cartitem-down">
        <div className="cartitems-total">
          <h1>Cart Total</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Subtotal</p>
              <p>${getTotalcartAmount()}</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
                <h3>Total</h3>
                <h3>${getTotalcartAmount()}</h3>
            </div>
          </div>
          <button>PROCEED TO CHECKOUT</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have promo code, enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder="Promo Code" />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
