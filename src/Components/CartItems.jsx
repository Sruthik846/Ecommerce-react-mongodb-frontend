import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";
import remove_icon from "./Assets/cart_cross_icon.png";
import StripeCheckout from "react-stripe-checkout";
import { loadStripe } from "@stripe/stripe-js";

const CartItems = () => {
  const {
    getTotalCartAmount,
    all_products,
    cartItems,
    removefromCart,
    updateCartafterPayment,
  } = useContext(ShopContext);


  const onToken = (token) => {
    const data = {
      token: token,
      amount: getTotalCartAmount(),
    };
    fetch("http://localhost:4000/save-stripe-token", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "auth-token": `${localStorage.getItem("auth-token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      response.json().then((data) => {
        console.log(data);
        handlesubmit(data["requires_action"], data["client_secret"]);
      });
    });
  };

  const handlesubmit = async (requires_action, client_secret) => {
    const stripe = await loadStripe(
      "pk_test_51O8FosSAXe2qclcVo1rb1FzS9giNbXbk448mLG5R2I3Hno0Fb4oBuGQbliSR7IoxuRbrjtT6t886wOS21GPtoiBs005fWyjDi6"
    );
    if (requires_action === true) {
      // We perform 3D Secure authentication
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        client_secret
      );
      if (error) return alert("Error in payment, please try again later");
      if (paymentIntent.status === "succeeded") {
        const data = {
          amount: getTotalCartAmount(),
        };
        fetch("http://localhost:4000/save-mongodb", {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "auth-token": `${localStorage.getItem("auth-token")}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }).then((response) => {
          response.json().then((data) => {
            updateCartafterPayment();
            // window.location.reload();
            console.log("save to mongodb output data ", data);
            // setCartItem(data);
          });
        });
        return alert("success");
      }
      alert("success");
    } else {
      alert("success");
    }
  };

  return (
    <div className="container mx-auto mt-20 mb-20">
      <div className="flex justify-around">
        <p className="w-24 p-2">Products</p>
        <p className="w-96 p-2">Title</p>
        <p className="w-24 p-2">Price</p>
        <p className="w-36 p-2">Quantity</p>
        <p className="w-24 p-2">Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_products.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="flex gap-10 mt-2 mb-2 justify-around" key={e.id}>
                <img
                  src={e.image}
                  className="w-24 h-24 p-2 flex justify-center items-center"
                  alt=""
                />
                <p className="w-96 p-2">{e.name}</p>
                <p className="w-24 p-2">{e.new_price}</p>
                <button className="w-36 border border-gray-100 bg-gray-50 h-full py-1 p-2 ">
                  {cartItems[e.id]}
                </button>
                <p className="w-24 p-2">{e.new_price * cartItems[e.id]}</p>
                <img
                  src={remove_icon}
                  onClick={() => {
                    removefromCart(e.id);
                  }}
                  className="w-3 h-3 text-center"
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="flex gap-36 mt-16">
        <div className="flex flex-1 flex-col">
          <h1 className="font-bold text-2xl text-gray-700">Cart Totals</h1>
          <div className="flex flex-col mt-8 mb-5">
            <div className="flex justify-between p-2">
              <p>SubTotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className="h-0.5 bg-gray-400" />
            <div className="flex justify-between p-2">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr className="h-0.5 bg-gray-400" />
            <div className="flex justify-between p-2 font-bold">
              <h3>Total</h3>
              <h3>${getTotalCartAmount()}</h3>
            </div>
          </div>

          <StripeCheckout
            token={onToken}
            name="Ecommerce Project"
            currency="INR"
            amount={100 * getTotalCartAmount()}
            stripeKey="pk_test_51O8FosSAXe2qclcVo1rb1FzS9giNbXbk448mLG5R2I3Hno0Fb4oBuGQbliSR7IoxuRbrjtT6t886wOS21GPtoiBs005fWyjDi6"
            description="Purchase from Your Ecommerce Project"
          />
        </div>
        <div className="flex flex-1 flex-col">
          <p className="mb-2 text-gray-500">
            If you have a promo code, Enter it here
          </p>
          <div>
            <input
              type="text"
              className="border border-gray-200 bg-gray-200 py-2 w-80 px-3"
              placeholder="Promo code"
            />
            <button className="bg-gray-800 text-white py-2 px-3 w-32">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
