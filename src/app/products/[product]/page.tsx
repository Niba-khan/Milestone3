'use client';

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
  selectedColor:string
}

export default function Product({ params }: { params: { product: string } }) {
  // State to store product data and loading state
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState("gray"); // Default color is gray
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState<Product[]>([]); // State to store cart items
  const [totalPrice, setTotalPrice] = useState(0); // State to store the total price

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
    setSelectedColor(color); // Set selected color
  };

  // Function to modify the price based on color
  const getPriceBasedOnColor = () => {
    if (!product) return 0; // Ensure product is not null
    if (selectedColor === "black") {
      return product.price + 5; // Example price change for black
    } else if (selectedColor === "blue") {
      return product.price - 3; // Example price change for blue
    }
    return product.price; // Default price for gray
  };

  // Function to add the product to the cart
  const addToCart = () => {
    if (product) {
      const updatedProduct = {
        ...product,
        price: getPriceBasedOnColor(),
        selectedColor,
      };
      setCart((prevCart) => [...prevCart, updatedProduct]);
      updateTotalPrice(updatedProduct.price);
    }
  };

  // Function to update the total price
  const updateTotalPrice = (price: number) => {
    setTotalPrice((prevTotal) => prevTotal + price);
  };

  // Function to remove an item from the cart
  const removeFromCart = (id: number) => {
    setCart((prevCart) => prevCart.filter(item => item.id !== id));
    const removedItem = cart.find(item => item.id === id);
    if (removedItem) {
      setTotalPrice(prevTotal => prevTotal - removedItem.price);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
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
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ${getPriceBasedOnColor()}
                    </span>
                    <button
                      onClick={addToCart}
                      className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Cart Display */}
      {cart.length > 0 && (
        <div className="fixed bottom-0 right-0 p-4 bg-black/45 text-white w-96">
          <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
          <ul className="mb-4">
            {cart.map((item) => (
              <li key={item.id} className="flex items-center justify-between mb-2">
                <div>
                  <h3>{item.title}</h3>
                  <p>Color: {item.selectedColor}</p>
                  <p>${item.price}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center">
            <span className="text-lg font-semibold">Total:</span>
            <span className="text-lg">${totalPrice}</span>
          </div>
        </div>
      )}
    </>
  );
}
