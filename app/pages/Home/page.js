"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchProductImages } from "@/app/API/api";

const MainHome = () => {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getImages = async () => {
      const dataFetched = await fetchProductImages();
      setData(dataFetched);
    };
    getImages();
  }, []);

  return (
    <div className="p-6 bg-gradient-to-br from-gray-100 to-white min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">🛍️ Premium Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {data &&
          data.map((item) => (
            <div
              key={item.id}
              className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200 transition-transform transform hover:-translate-y-1 hover:shadow-xl p-4"
            >
              <img
                src={item.urls?.small}
                alt={item.alt_description || "Product Image"}
                className="w-full h-48 object-cover rounded-xl mb-4"
              />
              <p className="text-gray-800 text-base font-semibold mb-2">
                {item.alt_description || "No description"}
              </p>
              <p className="text-gray-500 text-sm mb-4">Limited Edition</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-blue-600">
                  ₹{(Math.random() * 999).toFixed(0)}
                </span>
                <button
                  onClick={() => router.push(`/productdetails/${item.id}`)}
                  className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-lg shadow hover:scale-105 transition-transform"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainHome;
