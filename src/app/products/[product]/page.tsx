'use client';  // Add this line to ensure the component is client-side

import { useState, useEffect } from "react";
import Image from "next/image";

// Define the Product interface for type safety
interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  category: string;
}

export default function Product({ params }: { params: { product: string } }) {
  // State to store product data and loading state
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState("gray");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await fetch(`https://fakestoreapi.com/products/${params.product}`);
        const res = await data.json();

        // Check if the data is valid
        if (!res || res.length === 0) {
          throw new Error("Product not found");
        }

        setProduct(res);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [params.product]);

  // Function to handle color change
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };

  // Function to modify the price based on color
  const getPriceBasedOnColor = () => {
    if (!product) return 0; // Ensure product is not null
    if (selectedColor === "black") {
      return product.price + 5; // Example price change
    } else if (selectedColor === "blue") {
      return product.price - 3; // Example price change
    }
    return product.price; // Default price
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          {product && (
            <>
              <Image
                alt="ecommerce"
                className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
                src={product.image}
                width={400}
                height={400}
              />
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  BRAND NAME
                </h2>
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                  {product.title}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    {/* Rating Stars */}
                    {Array.from({ length: 5 }, (_, i) => (
                      <svg
                        key={i}
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                    <span className="text-gray-600 ml-3">4 Reviews</span>
                  </span>
                </div>
                <p className="leading-relaxed">{product.description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3">Color</span>
                    {/* Color Selection Buttons */}
                    {["gray", "black", "blue"].map((color, index) => (
                      <button
                        key={index}
                        className={`border-2 border-gray-300 ${color === selectedColor ? "bg-indigo-500" : ""} rounded-full w-6 h-6 focus:outline-none`}
                        onClick={() => handleColorChange(color)}
                      />
                    ))}
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3">Size</span>
                    <div className="relative">
                      <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option>SM</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="flex">
                  <span className="title-font font-medium text-2xl text-gray-900">
                    ${getPriceBasedOnColor()}
                  </span>
                  <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                    Add to Cart
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
