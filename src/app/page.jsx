"use client";
import React, { useState } from "react"; 

function MainComponent() {
  const products = [
    {
      id: 1,
      name: "YAMADA 2ドア 2023年",
      brand: "YAMADA",
      images: [
        "images/reizouko/reizouko1/reizouko1-no1.jpg",
        "images/reizouko/reizouko1/reizouko1-no2.jpg",
        "images/reizouko/reizouko1/reizouko1-no3.jpg",
        "images/reizouko/reizouko1/reizouko1-no4.jpg",
        "images/reizouko/reizouko1/reizouko1-no5.jpg",
        "images/reizouko/reizouko1/reizouko1-no6.jpg",
        "images/reizouko/reizouko1/reizouko1-no7.jpg",
        "images/reizouko/reizouko1/reizouko1-no8.jpg",
        "images/reizouko/reizouko1/reizouko1-no9.jpg",
      ],
    },
    {
      id: 2,
      name: "ハイセンス 2ドア 2022年(凹み多数)",
      brand: "Hisense",
      images: [
        "images/reizouko/reizouko2/reizouko2-no1.jpg",
        "images/reizouko/reizouko2/reizouko2-no2.jpg",
      ],
    },
    {
      id: 3,
      name: "Panasonic 2ドア 2020年",
      brand: "Panasonic",
      images: [
        "images/reizouko/reizouko2/reizouko2-no1.jpg",
        "images/reizouko/reizouko2/reizouko2-no2.jpg",
      ],
    },
    {
      id: 4,
      name: "MAXZEN 2ドア 138L 2020年",
      brand: "MAXZEN",
      images: [
        "images/reizouko/reizouko2/reizouko2-no1.jpg",
        "images/reizouko/reizouko2/reizouko2-no2.jpg",
      ],
    },
    {
      id: 5,
      name: "無印良品2ドア 140L 2019年",
      brand: "Muji",
      images: [
        "images/reizouko/reizouko2/reizouko2-no1.jpg",
        "images/reizouko/reizouko2/reizouko2-no2.jpg",
      ],
    },
    {
      id: 6,
      name: "ハイセンス 2ドア 2020年やや傷あり",
      brand: "Hisense",
      images: [
        "images/reizouko/reizouko2/reizouko2-no1.jpg",
        "images/reizouko/reizouko2/reizouko2-no2.jpg",
      ],
    },
    {
      id: 7,
      name: "SHARP 5ドア 2018年",
      brand: "SHARP",
      images: [
        "images/reizouko/reizouko2/reizouko2-no1.jpg",
        "images/reizouko/reizouko2/reizouko2-no2.jpg",
        "images/reizouko/reizouko2/reizouko2-no3.jpg",
      ],
    },
    {
      id: 8,
      name: "三菱 2ドア 146L 2019年",
      brand: "Mitsubishi",
      images: [
        "images/reizouko/reizouko2/reizouko2-no1.jpg",
        "images/reizouko/reizouko2/reizouko2-no2.jpg",
      ],
    },
    {
      id: 9,
      name: "SHARP 2ドア 2020年",
      brand: "SHARP",
      images: [
        "images/reizouko/reizouko2/reizouko2-no1.jpg",
        "images/reizouko/reizouko2/reizouko2-no2.jpg",
      ],
    },
    {
      id: 10,
      name: "TOSHIBA 2ドア 2019年",
      brand: "Toshiba",
      images: [
        "images/reizouko/reizouko2/reizouko2-no1.jpg",
        "images/reizouko/reizouko2/reizouko2-no2.jpg",
      ],
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState("");
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  const filteredProducts = filter
    ? products.filter((product) =>
        product.name.toLowerCase().includes(filter.toLowerCase())
      )
    : products;

  return (
    <div>
      {/* Header Section */}
      <div className="header_section">
        
            <div className="line-link-container">
              購入検討の方は<a href="https://page.line.me/452dbzcb" className="line-link">公式LINE</a>から
            </div>
      </div>
      {/* <header className="bg-gray-200 p-4 text-center font-bold text-lg">
        商品リスト
      </header> */}
      <input
        type="text"
        onChange={handleChange}
        placeholder="商品名で検索"
        className="border border-gray-500 p-2 m-4"
        name="productFilter"
      />
      <div className="container mx-auto p-4">
        {selectedProduct ? (
          <div className="p-4 border border-gray-300 rounded">
            <img
              src={selectedProduct.images[0]}
              alt={`Main Image of ${selectedProduct.name}`}
              className="w-full h-[300px] object-cover mb-4"
            />
            <h2 className="text-lg font-bold mb-1">{selectedProduct.name}</h2>
            <p>{selectedProduct.brand}</p>
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`additional view ${index + 1} of ${selectedProduct.name}`}
                className="w-full h-[200px] object-cover mb-2"
              />
            ))}
            <button
              className="mt-2 py-2 px-4 border rounded bg-blue-500 text-white hover:bg-blue-600"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 border border-gray-300 rounded"
            >
              <img
                src={product.images[0]}
                alt={`Product Image of ${product.name}`}
                className="w-full h-[200px] object-cover mb-2"
              />
              <h2 className="text-lg font-bold mb-1">{product.name}</h2>
              <p className="text-gray-500">{product.brand}</p>
              <button
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handleViewDetails(product)}
              >
                View Details
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default MainComponent;