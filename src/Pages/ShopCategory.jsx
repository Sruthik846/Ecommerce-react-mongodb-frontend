import React, { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import dropdown_icon from "../Components/Assets/dropdown_icon.png";
import Item from "../Components/Item";

const ShopCategory = (props) => {
  const { all_products } = useContext(ShopContext);
  console.log(all_products);
  return (
    <div className="mx-auto container">
      <img src={props.banner} alt="" />
      <div className="flex justify-between mt-5">
        <p>
          <span className="font-bold text-xs">Showing 1-12 </span> out of 36 products
        </p>
        <div className="flex border border-gray-200 py-2 rounded-3xl px-5 justify-center items-center gap-1 text-xs">
          Sort by <img src={dropdown_icon} className="w-3 h-2"></img>
        </div>
      </div>
      <div className='grid grid-cols-4 mt-10 gap-4'>
        {all_products.map((item, index) => {
          if (props.category === item.category) {
            return (
              <Item
                key={index}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="mt-14 flex justify-center items-center mb-20">
        <button className=' justify-center items-center rounded-3xl h-12 w-48 text-gray-400 bg-gray-100 mt-[30px]'>Explore More</button>
      </div>
    </div>
  );
};

export default ShopCategory;
