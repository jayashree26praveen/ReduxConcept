"use client"

import React, { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { fetchProductImages } from "@/app/API/api";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "@/app/Slice/cartSlice";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1); // start from 1
  const router = useRouter();
  const params = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      const data = await fetchProductImages();
      const selected = data.find((item) => item.id === params.id);
      setProduct(selected);
    };
    getProduct();
  }, [params.id]);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => {
    
    if (product) {
      dispatch(addToCart({ product, quantity }));
    }
  };

  if (!product) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <div className="w-full max-w-5xl mx-auto mt-4 text-lg">
        <button
          onClick={() => router.back()}
          className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          <svg className="w-8 h-8 mr-1" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      <div className="p-6 min-h-screen bg-white flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-6 text-center">Product Details</h1>
        <div className="flex flex-col md:flex-row gap-10 max-w-5xl w-full">
          <div className="md:w-1/2">
            <img
              src={product.urls?.regular}
              alt={product.alt_description}
              className="w-full h-96 object-cover rounded-xl"
            />
          </div>

          <div className="md:w-1/2 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2">
                {product.alt_description || "No description"}
              </h2>
              <p className="text-gray-800 text-base font-semibold mb-2">
                {product.alt_description || "No description"}
              </p>
              <p>
                Playback - The wireless neckband delivers a total playtime of up to 20 hours...
              </p>
              <p className="text-gray-600 mb-4">Limited Edition</p>
              <p className="text-lg font-bold text-blue-600 mb-6">
                ₹{(Math.random() * 999).toFixed(0)}
              </p>
            </div>

            <div className="mt-6">
              <div className="flex items-center gap-4 mb-4">
                <button
                  onClick={handleDecrement}
                  className="px-3 py-1 bg-gray-300 text-lg rounded-full hover:bg-gray-400"
                >
                  -
                </button>
                <span className="text-xl font-semibold">{quantity}</span>
                <button
                  onClick={handleIncrement}
                  className="px-3 py-1 bg-gray-300 text-lg rounded-full hover:bg-gray-400"
                >
                  +
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;
