import React, { createContext, useEffect, useState } from "react";

export const ShopContext = createContext(null);
const defaultCart = () => {
  let cart = {};
  for (let index = 0; index < 300 + 1; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  const [all_products, setAll_Product] = useState([]);
  const [cartItems, setCartItems] = useState(defaultCart());
  const [username, setUsername] = useState("");
  const [orderHistoryList, setOrderHistoryList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/allproducts")
      .then((response) => response.json())
      .then((data) => setAll_Product(data));
    if (localStorage.getItem("auth-token")) {
      fetch("http://localhost:4000/getuser", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => setUsername(data));

      fetch("http://localhost:4000/getcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: "",
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data));
    }
  }, []);

  const addToCart = (itemId) => {
    setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] + 1 }));
    if (localStorage.getItem("auth-token")) {
      console.log("ITEMID", itemId);
      fetch("http://localhost:4000/addtocart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then(
          (data) => console.log(data),
          alert("Product added sucessfully to cart")
        )
        .catch((error) => {
          // Handle errors
          console.error("Error:", error);
        });
    }
  };

  const updateCartafterPayment = () => {
    fetch("http://localhost:4000/getcart", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "auth-token": `${localStorage.getItem("auth-token")}`,
        "Content-Type": "application/json",
      },
      body: "",
    })
      .then((response) => response.json())
      .then((data) => setCartItems(data));
  };

  const removefromCart = (itemId) => {
    setCartItems((pre) => ({ ...pre, [itemId]: pre[itemId] - 1 }));
    if (localStorage.getItem("auth-token")) {
      console.log("ITEMID", itemId);
      console.log(localStorage.getItem("auth-token"));
      fetch("http://localhost:4000/removefromcart", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "auth-token": `${localStorage.getItem("auth-token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ itemId: itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => {
          // Handle errors
          console.error("Error:", error);
        });
    }
  };

  // current user order history
  const orderHistory = () => {
    if(localStorage.getItem('auth-token')){
    fetch("http://localhost:4000/orderhistory", {
      method: "GET",
      headers: {
        Accept: "application/form-data",
        "auth-token": `${localStorage.getItem("auth-token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => setOrderHistoryList(data));
    }
    console.log(orderHistoryList);
    return orderHistoryList;
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        let itemInfo = all_products.find(
          (product) => product.id === Number(key)
        );
        totalAmount += itemInfo.new_price * cartItems[key];
      }
    }
    return totalAmount;
  };

  const getTotalCartItems = () => {
    let totalItems = 0;
    for (const key in cartItems) {
      if (cartItems[key] > 0) {
        totalItems += cartItems[key];
      }
    }
    return totalItems;
  };

  const contextValue = {
    getTotalCartItems,
    orderHistory,
    updateCartafterPayment,
    getTotalCartAmount,
    all_products,
    username,
    cartItems,
    addToCart,
    removefromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
