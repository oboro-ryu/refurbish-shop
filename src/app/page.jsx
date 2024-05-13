"use client";
import React, { useState } from "react"; 

function MainComponent() {
  const products = [
    {
      id: 1,
      name: "Panasonic 2ドア マットビターブラウン 2020年製※素材上やや傷あり",
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
      price: "¥23,000",
      category: "冷蔵庫",
    },
    {
      id: 2,
      name: "SHARP ガラス 2021年製",
      images: [
        "images/reizouko/reizouko2/reizouko2-no1.jpg",
        "images/reizouko/reizouko2/reizouko2-no2.jpg",
        "images/reizouko/reizouko2/reizouko2-no3.jpg",
        "images/reizouko/reizouko2/reizouko2-no4.jpg",
        "images/reizouko/reizouko2/reizouko2-no5.jpg",
        "images/reizouko/reizouko2/reizouko2-no6.jpg",
        "images/reizouko/reizouko2/reizouko2-no7.jpg",
        "images/reizouko/reizouko2/reizouko2-no8.jpg",
        "images/reizouko/reizouko2/reizouko2-no9.jpg",
      ],
      price: "¥32,000",
      category: "冷蔵庫",
    },
    {
      id: 3,
      name: "TOSHIBA 4.5kg 2023年製※美品",
      images: [
        "images/sentakuki/sentakuki1/sentakuki1-no1.jpg",
        "images/sentakuki/sentakuki1/sentakuki1-no2.jpg",
        "images/sentakuki/sentakuki1/sentakuki1-no3.jpg",
        "images/sentakuki/sentakuki1/sentakuki1-no4.jpg",
        "images/sentakuki/sentakuki1/sentakuki1-no5.jpg",
        "images/sentakuki/sentakuki1/sentakuki1-no6.jpg",
        "images/sentakuki/sentakuki1/sentakuki1-no7.jpg",
      ],
      price: "¥25,000",
      category: "洗濯機",
    },
    {
      id: 4,
      name: "MAXZEN 2ドア 138L 2020年",
      brand: "MAXZEN",
      images: [
        "images/reizouko/reizouko2/reizouko2-no1.jpg",
        "images/reizouko/reizouko2/reizouko2-no2.jpg",
      ],
      price: "¥25,000",
      category: "冷蔵庫",
    },
    {
      id: 5,
      name: "無印良品2ドア 140L 2019年",
      brand: "Muji",
      images: [
        "images/reizouko/reizouko2/reizouko2-no1.jpg",
        "images/reizouko/reizouko2/reizouko2-no2.jpg",
      ],
      price: "¥20,000",
      category: "冷蔵庫",
    },
    {
      id: 6,
      name: "ハイセンス 2ドア 2020年やや傷あり",
      brand: "Hisense",
      images: ["images/reizouko/reizouko2/reizouko2-no1.jpg"],
      price: "¥15,000",
      category: "洗濯機",
    },
    {
      id: 7,
      name: "SHARP 5ドア 2018年",
      brand: "SHARP",
      images: ["images/reizouko/reizouko2/reizouko2-no2.jpg"],
      price: "¥45,000",
      category: "洗濯機",
    },
    {
      id: 8,
      name: "三菱 2ドア 146L 2019年",
      brand: "Mitsubishi",
      images: ["images/reizouko/reizouko2/reizouko2-no1.jpg"],
      price: "¥35,000",
      category: "洗濯機",
    },
    {
      id: 9,
      name: "SHARP 2ドア 2020年",
      brand: "SHARP",
      images: ["images/reizouko/reizouko2/reizouko2-no2.jpg"],
      price: "¥32,000",
      category: "洗濯機",
    },
    {
      id: 10,
      name: "TOSHIBA 2ドア 2019年",
      brand: "Toshiba",
      images: ["images/reizouko/reizouko2/reizouko2-no1.jpg"],
      price: "¥28,000",
      category: "洗濯機",
    },
  ];

  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState("");
  const [filterCategory, setFilterCategory] = useState("");
  const [priceFilter, setPriceFilter] = useState(100000);

  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };
  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setFilterCategory(event.target.value);
  };
  const handlePriceChange = (event) => {
    setPriceFilter(Number(event.target.value));
  };

  const priceAsNumber = (price) => Number(price.replace(/[¥,]/g, ""));

  const filteredProducts = products.filter((product) => {
    const nameMatch = product.name.toLowerCase().includes(filter.toLowerCase());
    const categoryMatch = filterCategory
      ? product.category === filterCategory
      : true;
    const priceMatch = priceAsNumber(product.price) <= priceFilter;
    return nameMatch && categoryMatch && priceMatch;
  });

  return (
    <div>
      {/* Header Section */}
      <div className="header_section">
        
            <div className="line-link-container">
              購入検討の方は<a href="https://page.line.me/452dbzcb" className="line-link">公式LINE</a>から
            </div>
      </div>
      <input
        type="text"
        onChange={handleChange}
        placeholder="商品名で検索"
        className="border border-gray-500 p-2 m-4"
        name="productFilter"
      />
      <select
        onChange={handleCategoryChange}
        className="border border-gray-500 p-2 m-4"
        name="categoryFilter"
      >
        <option value="">すべて</option>
        <option value="冷蔵庫">冷蔵庫</option>
        <option value="洗濯機">洗濯機</option>
      </select>
      <div className="flex items-center justify-between mx-4">
        <span className="text-[#333]">¥0</span>
        <input
          type="range"
          min="0"
          max="100000"
          value={priceFilter}
          onChange={handlePriceChange}
          className="w-[80%]"
          name="priceRangeSlider"
        />
        <span className="text-[#333]">¥100,000</span>
      </div>
      <div className="text-center font-semibold text-lg mb-4">
        選択中の金額: ¥{priceFilter.toLocaleString()}
      </div>
      <div className="container mx-auto p-4">
        {selectedProduct ? (
          <div>
            <button
              onClick={() => setSelectedProduct(null)}
              className="mt-2 py-2 px-4 border rounded bg-blue-500 text-white hover:bg-blue-600"
            >
              Close
            </button>
            <div
              key={selectedProduct.id}
              className="p-4 border border-gray-300 rounded"
            >
              <h2 className="text-lg font-bold mb-1">
                {selectedProduct.name} ({selectedProduct.category})
              </h2>
              <img
                src={selectedProduct.images[0]}
                alt={`Main Image of ${selectedProduct.name}`}
                className="w-full h-[300px] object-cover mb-4"
              />
              <p>{selectedProduct.brand}</p>
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`additional view ${index + 1} of ${
                    selectedProduct.name
                  }`}
                  className="w-full h-[200px] object-cover mb-2"
                />
              ))}
              <p>{selectedProduct.price}</p>
              <button className="mt-2 py-2 px-4 border rounded bg-green-500 text-white hover:bg-green-600">
                <a href="https://page.line.me/452dbzcb" className="line-link">公式LINE</a>
              </button>
            </div>
          </div>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className="p-4 border border-gray-300 rounded mb-4"
            >
              <img
                src={product.images[0]}
                alt={`Product Image of ${product.name}`}
                className="w-full h-[200px] object-cover mb-2"
              />
              <h2 className="text-lg font-bold mb-1">
                {product.name} ({product.category})
              </h2>
              <p className="text-gray-500">{product.brand}</p>
              <p>{product.price}</p>
              <button
                onClick={() => handleViewDetails(product)}
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
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