"use client";
import React from "react";

function MainComponent() {
  const products = [
    {
      id: 1,
      name: "YAMADA 2ドア 2023年",
      brand: "YAMADA",
      image: "images/reizouko/reizouko1/reizouko1-no1.jpg",
    },
    {
      id: 2,
      name: "ハイセンス 2ドア 2022年(凹み多数)",
      brand: "Hisense",
      image: "images/reizouko/reizouko2/reizouko2-no1.jpg",
    },
    {
      id: 3,
      name: "Panasonic 2ドア 2020年",
      brand: "Panasonic",
      image: "images/reizouko/reizouko3/reizouko3-no1.jpg",
    },
    {
      id: 4,
      name: "MAXZEN 2ドア 138L 2020年",
      brand: "MAXZEN",
      image: "images/reizouko/reizouko4/reizouko4-no1.jpg",
    },
    {
      id: 5,
      name: "無印良品2ドア 140L 2019年",
      brand: "Muji",
      image: "images/reizouko/reizouko5/reizouko5-no1.jpg",
    },
    {
      id: 6,
      name: "ハイセンス 2ドア 2020年やや傷あり",
      brand: "Hisense",
      image: "images/reizouko/reizouko6/reizouko6-no1.jpg",
    },
    {
      id: 7,
      name: "SHARP 5ドア 2018年",
      brand: "SHARP",
      image: "images/reizouko/reizouko7/reizouko7-no1.jpg",
    },
    {
      id: 8,
      name: "三菱 2ドア 146L 2019年",
      brand: "Mitsubishi",
      image: "images/reizouko/reizouko8/reizouko8-no1.jpg",
    },
    {
      id: 9,
      name: "SHARP 2ドア 2020年",
      brand: "SHARP",
      image: "images/reizouko/reizouko9/reizouko9-no1.jpg",
    },
    {
      id: 10,
      name: "TOSHIBA 2ドア 2019年",
      brand: "Toshiba",
      image: "images/reizouko/reizouko10/reizouko10-no1.jpg",
    },
  ];

  const [filter, setFilter] = React.useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
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
        {filteredProducts.map((product, index) => (
          <div key={index} className="p-4 border border-gray-300 rounded">
            <img
              src={product.image}
              alt={`Product Image: ${product.name}`}
              className="w-full h-[200px] object-cover mb-2"
            />
            <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
            <p className="text-gray-500">{product.brand}</p>
            <button className="mt-2 py-2 px-4 border rounded bg-blue-500 text-white hover:bg-blue-600">
              View Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainComponent;