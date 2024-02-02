import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

const itemsPerPage = 5;
const History = () => {
  const { orderHistory } = useContext(ShopContext);
  const [currentPage, setCurrentPage] = useState(1);
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    console.log(orderHistory());
    setOrderList(orderHistory());
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = orderList.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto mt-20 mb-20">
      <h1 className="text-2xl font-bold uppercase">Order List</h1>
      <table className="w-full mt-5 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Product
            </th>
            <th scope="col" className="px-6 py-3">
              Title
            </th>
            <th scope="col" className="px-6 py-3">
              category
            </th>
            <th scope="col" className="px-6 py-3">
              price
            </th>
            <th scope="col" className="px-6 py-3">
              status
            </th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((product, index) => {
            return (
              <>
                <tr
                  key={index}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <img
                    src={product.image}
                    className="w-28 h-24 p-2 justify-center items-center px-6 py-4"
                    alt=""
                  />
                  <td className="px-6 py-4">{product.name}</td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">₹{product.price}</td>
                  <td className="px-6 py-4 text-green-600 font-bold">Paid</td>
                </tr>
                <hr />
              </>
            );
          })}
        </tbody>
      </table>

      <div className="flex justify-end mt-3">
        {Array.from(
          { length: Math.ceil(orderList.length / itemsPerPage) },
          (_, index) => (
            <button
              className={
                currentPage === index + 1
                  ? "bg-orange-600 px-4 border border-gray-200 text-white"
                  : "px-4 border border-gray-200"
              }
              key={index}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default History;
