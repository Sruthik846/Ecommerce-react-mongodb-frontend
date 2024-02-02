import React, { useContext, useState } from "react";
import logo from "./Assets/logo.png";
import cart_icon from "./Assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const { getTotalCartItems, username } = useContext(ShopContext);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  return (
    <div className="flex justify-around shadow-xl p-5">
      <div className="flex items-center gap-8">
        <img src={logo} alt="" />
        <p className="text-[38px] font-bold text-black">SHOPPER</p>
      </div>

      <ul className="flex justify-center items-center list-none gap-5 text-lg text-[#626262]">
        <li
          className={`flex flex-col items-center justify-center gap-3 cursor-pointer ${
            menu === "shop" ? "border-b-2 border-orange-600" : null
          }`}
          onClick={() => {
            setMenu("shop");
          }}
        >
          <Link to="/">Shop</Link>
        </li>
        <li
          className={`flex flex-col items-center justify-center gap-3 cursor-pointer ${
            menu === "men" ? "border-b-2 border-orange-600" : null
          }`}
          onClick={() => {
            setMenu("men");
          }}
        >
          <Link to="/mens">Men</Link>
        </li>
        <li
          className={`flex flex-col items-center justify-center gap-3 cursor-pointer ${
            menu === "women" ? "border-b-2 border-orange-600" : null
          }`}
          onClick={() => {
            setMenu("women");
          }}
        >
          <Link to="/womens">Women</Link>
        </li>
        <li
          className={`flex flex-col items-center justify-center gap-3 cursor-pointer ${
            menu === "kid" ? "border-b-2 border-orange-600" : null
          }`}
          onClick={() => {
            setMenu("kid");
          }}
        >
          <Link to="/kids">Kid</Link>
        </li>
      </ul>

      <div className="flex justify-center items-center gap-5">
        {localStorage.getItem("auth-token") ? ( <p className="text-xl font-semibold">{username}</p>
          // <>
          //   <p>{username}</p>
          //   <button
          //     className="w-[157px] h-10 outline-none border-[#7a7a7a] border rounded-3xl bg-white cursor-pointer font-medium text-[#515151]"

          //       localStorage.removeItem("auth-token");
          //       window.location.replace("/");
          //     }}
          //   >
          //     Logout
          //   </button>
          // </>
        ) : (
          <Link to="/login">
            <button className="w-[157px] h-10 outline-none border-[#7a7a7a] border rounded-3xl bg-white cursor-pointer font-medium text-[#515151]">
              Login
            </button>
          </Link>
        )}

        <Link to="/cart">
          <img src={cart_icon} alt="" />
        </Link>
        <div className="w-[20px] h-[18px] flex items-center justify-center ml-[-40px] mt-[-35px] text-xs bg-red-700 text-white rounded-2xl">
          {getTotalCartItems()}
        </div>

        {localStorage.getItem("auth-token") ? (
          <>
            {/* <img src={navProfile} className='px-10 w-36 p-4' alt="" /> */}
            <div className="relative">
              <FaUserCircle
                className="cursor-pointer "
                size={"2.5rem"}
                onClick={toggleDropdown}
              ></FaUserCircle>

              {isDropdownVisible && (
                <div className="absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded shadow-md">
                  {/* Dropdown content goes here */}
                  <ul className=" w-36">
                    <Link to="/cart">
                      <li
                        className={`cursor-pointer p-2 text-black ${
                          selectedOption === "cart"
                            ? "bg-orange-500 text-white"
                            : ""
                        }`}
                        onClick={() => handleOptionClick("cart")}
                      >
                        Cart
                      </li>
                    </Link>
                    <Link to="/order_history">
                      <li
                        className={`cursor-pointer p-2 text-black ${
                          selectedOption === "orders"
                            ? "bg-orange-500 text-white"
                            : ""
                        }`}
                        onClick={() => handleOptionClick("orders")}
                      >
                        Order History
                      </li>
                    </Link>
                    <li
                      className="p-2 text-black cursor-pointer"
                      onClick={() => {
                        localStorage.removeItem("auth-token");
                        window.location.replace("/");
                      }}
                    >
                      Logout
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Navbar;
