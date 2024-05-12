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
    // More products...
  ];
  



  const [filter, setFilter] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div>
      {/* Header Section */}
      <div className="header_section">
        <nav className="bg-light">
          <div className="container">
            <a className="logo" href="#">
              <img src="images/other/logo.png" alt="BAMBI" />
            </a>
            <div className="line-link-container">
              購入検討の方は<a href="https://page.line.me/452dbzcb" className="line-link">公式LINE</a>から
            </div>
          </div>
        </nav>
      </div>

      {/* Main Component Content */}
      <div className="container mx-auto p-4">
        <div>
          <input
            type="text"
            placeholder="商品名で検索..."
            className="p-2 border border-gray-300 rounded w-full mb-4"
            onChange={handleSearchChange}
            name="productSearch"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div key={product.id} className="p-4 border border-gray-300 rounded">
              <img
                src={product.images[0]} // Display the first image in the list
                alt={`Product Image: ${product.name}`}
                className="w-full h-[200px] object-cover mb-2"
              />
              <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
              <p className="text-gray-500">{product.brand}</p>
              <button
                className="mt-2 py-2 px-4 border rounded bg-blue-500 text-white hover:bg-blue-600"
                onClick={() => handleViewDetails(product)}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Product Details Modal or Inline Display */}
      {selectedProduct && (
        <div className="product-details-modal">
          <h2>{selectedProduct.name}</h2>
          <div className="image-gallery">
            {selectedProduct.images.map((image, index) => (
              <img key={index} src={image} alt={`Detail ${index + 1}`} className="detail-image" />
            ))}
          </div>
          <p>{selectedProduct.brand}</p>
          <button onClick={() => setSelectedProduct(null)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default MainComponent;