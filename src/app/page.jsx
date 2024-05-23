"use client";
import React, { useState } from "react"; 

function MainComponent()  {
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
      name: "ハイセンス 2ドア 2020年製※やや傷あり",
      images: [
        "images/reizouko/reizouko2/reizouko2-no1.jpg",
        "images/reizouko/reizouko2/reizouko2-no2.jpg",
        "images/reizouko/reizouko2/reizouko2-no3.jpg",
        "images/reizouko/reizouko2/reizouko2-no4.jpg",
        "images/reizouko/reizouko2/reizouko2-no5.jpg",
        "images/reizouko/reizouko2/reizouko2-no6.jpg",
        "images/reizouko/reizouko2/reizouko2-no7.jpg",
        "images/reizouko/reizouko2/reizouko2-no8.jpg",
      ],
      price: "¥24,000",
      category: "冷蔵庫",
    },
    {
      id: 3,
      name: "ツインバード 5.5kg 2021年製 ",
      images: [
        "images/sentakuki/sentakuki1/sentakuki1-no1.jpg",
        "images/sentakuki/sentakuki1/sentakuki1-no2.jpg",
        "images/sentakuki/sentakuki1/sentakuki1-no3.jpg",
        "images/sentakuki/sentakuki1/sentakuki1-no4.jpg",
        "images/sentakuki/sentakuki1/sentakuki1-no5.jpg",
      ],
      price: "¥20,000",
      category: "洗濯機",
    },
    {
      id: 4,
      name: "アイリス 5kg 2023年製※美品",
      images: [
        "images/sentakuki/sentakuki2/sentakuki2-no1.jpg",
        "images/sentakuki/sentakuki2/sentakuki2-no2.jpg",
        "images/sentakuki/sentakuki2/sentakuki2-no3.jpg",
        "images/sentakuki/sentakuki2/sentakuki2-no4.jpg",
        "images/sentakuki/sentakuki2/sentakuki2-no5.jpg",
        "images/sentakuki/sentakuki2/sentakuki2-no6.jpg",
        "images/sentakuki/sentakuki2/sentakuki2-no7.jpg",
      ],
      price: "¥24,000",
      category: "洗濯機",
    },
    {
      id: 5,
      name: "アイリス 6kg 2022年製※美品",
      images: [
      "images/sentakuki/sentakuki3/sentakuki3-no1.jpg",
      "images/sentakuki/sentakuki3/sentakuki3-no2.jpg",
      "images/sentakuki/sentakuki3/sentakuki3-no3.jpg",
      "images/sentakuki/sentakuki3/sentakuki3-no4.jpg",
      "images/sentakuki/sentakuki3/sentakuki3-no5.jpg",
      "images/sentakuki/sentakuki3/sentakuki3-no6.jpg",
      "images/sentakuki/sentakuki3/sentakuki3-no7.jpg",
      "images/sentakuki/sentakuki3/sentakuki3-no8.jpg",
      ],
      price: "¥23,000",
      category: "洗濯機",
    },
    {
      id: 6,
      name: "ハイアール 2ドア 2022年製※美品",
      images: [
      "images/reizouko/reizouko3/reizouko3-no1.jpg",
      "images/reizouko/reizouko3/reizouko3-no2.jpg",
      "images/reizouko/reizouko3/reizouko3-no3.jpg",
      "images/reizouko/reizouko3/reizouko3-no4.jpg",
      "images/reizouko/reizouko3/reizouko3-no5.jpg",
      "images/reizouko/reizouko3/reizouko3-no6.jpg",
      "images/reizouko/reizouko3/reizouko3-no7.jpg",
      "images/reizouko/reizouko3/reizouko3-no8.jpg",
      ],
      price: "¥23,000",
      category: "冷蔵庫",
    },
    {
      id: 7,
      name: "アイリス 2ドア 2022年製※美品",
      images: [
      "images/reizouko/reizouko4/reizouko4-no1.jpg",
      "images/reizouko/reizouko4/reizouko4-no2.jpg",
      "images/reizouko/reizouko4/reizouko4-no3.jpg",
      "images/reizouko/reizouko4/reizouko4-no4.jpg",
      "images/reizouko/reizouko4/reizouko4-no5.jpg",
      "images/reizouko/reizouko4/reizouko4-no6.jpg",
      "images/reizouko/reizouko4/reizouko4-no7.jpg",
      "images/reizouko/reizouko4/reizouko4-no8.jpg",
      "images/reizouko/reizouko4/reizouko4-no9.jpg",
      ],
      price: "¥23,000",
      category: "冷蔵庫",
    },
    {
      id: 8,
      name: "コンフィー 2ドア 2023年製※美品",
      images: [
      "images/reizouko/reizouko5/reizouko5-no1.jpg",
      "images/reizouko/reizouko5/reizouko5-no2.jpg",
      "images/reizouko/reizouko5/reizouko5-no3.jpg",
      "images/reizouko/reizouko5/reizouko5-no4.jpg",
      "images/reizouko/reizouko5/reizouko5-no5.jpg",
      "images/reizouko/reizouko5/reizouko5-no6.jpg",
      "images/reizouko/reizouko5/reizouko5-no7.jpg",
      "images/reizouko/reizouko5/reizouko5-no8.jpg",
      "images/reizouko/reizouko5/reizouko5-no9.jpg",
      "images/reizouko/reizouko5/reizouko5-no10.jpg",
      "images/reizouko/reizouko5/reizouko5-no11.jpg",
      "images/reizouko/reizouko5/reizouko5-no12.jpg",
      ],
      price: "¥28,000",
      category: "冷蔵庫",
    },
    {
      id: 9,
      name: "TOSHIBA 2ドア 2019年製",
      images: [
      "images/reizouko/reizouko6/reizouko6-no1.jpg",
      "images/reizouko/reizouko6/reizouko6-no2.jpg",
      "images/reizouko/reizouko6/reizouko6-no3.jpg",
      "images/reizouko/reizouko6/reizouko6-no4.jpg",
      "images/reizouko/reizouko6/reizouko6-no5.jpg",
      "images/reizouko/reizouko6/reizouko6-no6.jpg",
      "images/reizouko/reizouko6/reizouko6-no7.jpg",
      "images/reizouko/reizouko6/reizouko6-no8.jpg",
      "images/reizouko/reizouko6/reizouko6-no9.jpg",
      ],
      price: "¥22,000",
      category: "冷蔵庫",
    },
    {
      id: 10,
      name: "SHARP 2ドア 2021年製",
      images: [
      "images/reizouko/reizouko7/reizouko7-no1.jpg",
      "images/reizouko/reizouko7/reizouko7-no2.jpg",
      "images/reizouko/reizouko7/reizouko7-no3.jpg",
      "images/reizouko/reizouko7/reizouko7-no4.jpg",
      "images/reizouko/reizouko7/reizouko7-no5.jpg",
      "images/reizouko/reizouko7/reizouko7-no6.jpg",
      "images/reizouko/reizouko7/reizouko7-no7.jpg",
      "images/reizouko/reizouko7/reizouko7-no8.jpg",
      "images/reizouko/reizouko7/reizouko7-no9.jpg",
      ],
      price: "¥26,000",
      category: "冷蔵庫",
    },
    {
      id: 11,
      name: "AQUA 2ドア 2019年製",
      images: [
      "images/reizouko/reizouko8/reizouko8-no1.jpg",
      "images/reizouko/reizouko8/reizouko8-no2.jpg",
      "images/reizouko/reizouko8/reizouko8-no3.jpg",
      "images/reizouko/reizouko8/reizouko8-no4.jpg",
      "images/reizouko/reizouko8/reizouko8-no5.jpg",
      "images/reizouko/reizouko8/reizouko8-no6.jpg",
      "images/reizouko/reizouko8/reizouko8-no7.jpg",
      "images/reizouko/reizouko8/reizouko8-no8.jpg",
      "images/reizouko/reizouko8/reizouko8-no9.jpg",
      ],
      price: "¥24,000",
      category: "冷蔵庫",
    },
    // {
    //   id: 12,
    //   name: "アイリス 4.5kg 2023年製※美品",
    //   images: [
    //   "images/sentakuki/sentakuki4/sentakuki4-no1.jpg",
    //   "images/sentakuki/sentakuki4/sentakuki4-no2.jpg",
    //   "images/sentakuki/sentakuki4/sentakuki4-no3.jpg",
    //   "images/sentakuki/sentakuki4/sentakuki4-no4.jpg",
    //   "images/sentakuki/sentakuki4/sentakuki4-no5.jpg",
    //   "images/sentakuki/sentakuki4/sentakuki4-no6.jpg",
    //   "images/sentakuki/sentakuki4/sentakuki4-no7.jpg",
    //   "images/sentakuki/sentakuki4/sentakuki4-no8.jpg",
    //   "images/sentakuki/sentakuki4/sentakuki4-no9.jpg",
    //   ],
    //   price: "¥22,000",
    //   category: "洗濯機",
    // },
    // {
    //   id: 13,
    //   name: "SHARP 8kg 2019年製",
    //   images: [
    //   "images/sentakuki/sentakuki5/sentakuki5-no1.jpg",
    //   "images/sentakuki/sentakuki5/sentakuki5-no2.jpg",
    //   "images/sentakuki/sentakuki5/sentakuki5-no3.jpg",
    //   "images/sentakuki/sentakuki5/sentakuki5-no4.jpg",
    //   "images/sentakuki/sentakuki5/sentakuki5-no5.jpg",
    //   "images/sentakuki/sentakuki5/sentakuki5-no6.jpg",
    //   "images/sentakuki/sentakuki5/sentakuki5-no7.jpg",
    //   "images/sentakuki/sentakuki5/sentakuki5-no8.jpg",
    //   "images/sentakuki/sentakuki5/sentakuki5-no9.jpg",
    //   ],
    //   price: "¥36,000",
    //   category: "洗濯機",
    // },
    {
      id: 14,
      name: "YAMADA 7kg 2022年製",
      images: [
      "images/sentakuki/sentakuki6/sentakuki6-no1.jpg",
      "images/sentakuki/sentakuki6/sentakuki6-no2.jpg",
      "images/sentakuki/sentakuki6/sentakuki6-no3.jpg",
      "images/sentakuki/sentakuki6/sentakuki6-no4.jpg",
      "images/sentakuki/sentakuki6/sentakuki6-no5.jpg",
      "images/sentakuki/sentakuki6/sentakuki6-no6.jpg",
      "images/sentakuki/sentakuki6/sentakuki6-no7.jpg",
      "images/sentakuki/sentakuki6/sentakuki6-no8.jpg",
      ],
      price: "¥27,000",
      category: "洗濯機",
    },
    // {
    //   id: 15,
    //   name: "TOSHIBA 4.5kg 2023年製※美品",
    //   images: [
    //   "images/sentakuki/sentakuki7/sentakuki7-no1.jpg",
    //   "images/sentakuki/sentakuki7/sentakuki7-no2.jpg",
    //   "images/sentakuki/sentakuki7/sentakuki7-no3.jpg",
    //   "images/sentakuki/sentakuki7/sentakuki7-no4.jpg",
    //   "images/sentakuki/sentakuki7/sentakuki7-no5.jpg",
    //   "images/sentakuki/sentakuki7/sentakuki7-no6.jpg",
    //   "images/sentakuki/sentakuki7/sentakuki7-no7.jpg",
    //   "images/sentakuki/sentakuki7/sentakuki7-no8.jpg",
    //   "images/sentakuki/sentakuki7/sentakuki7-no9.jpg",
    //   ],
    //   price: "¥25,000",
    //   category: "洗濯機",
    // },
    {
      id: 16,
      name: "SHARP 5ドア 2018年製(液晶気泡あり)",
      images: [
      "images/reizouko/reizouko9/reizouko9-no1.jpg",
      "images/reizouko/reizouko9/reizouko9-no2.jpg",
      "images/reizouko/reizouko9/reizouko9-no3.jpg",
      "images/reizouko/reizouko9/reizouko9-no4.jpg",
      "images/reizouko/reizouko9/reizouko9-no5.jpg",
      "images/reizouko/reizouko9/reizouko9-no6.jpg",
      "images/reizouko/reizouko9/reizouko9-no7.jpg",
      "images/reizouko/reizouko9/reizouko9-no8.jpg",
      "images/reizouko/reizouko9/reizouko9-no9.jpg",
      "images/reizouko/reizouko9/reizouko9-no10.jpg",
      "images/reizouko/reizouko9/reizouko9-no11.jpg",
      "images/reizouko/reizouko9/reizouko9-no12.jpg",
      "images/reizouko/reizouko9/reizouko9-no13.jpg",
      ],
      price: "¥88,000",
      category: "冷蔵庫",
    },
    {
      id: 17,
      name: "TOSHIBA 4.5kg 2019年製",
      images: [
      "images/sentakuki/sentakuki8/sentakuki8-no1.jpg",
      "images/sentakuki/sentakuki8/sentakuki8-no2.jpg",
      "images/sentakuki/sentakuki8/sentakuki8-no3.jpg",
      "images/sentakuki/sentakuki8/sentakuki8-no4.jpg",
      "images/sentakuki/sentakuki8/sentakuki8-no5.jpg",
      "images/sentakuki/sentakuki8/sentakuki8-no6.jpg",
      "images/sentakuki/sentakuki8/sentakuki8-no7.jpg",
      "images/sentakuki/sentakuki8/sentakuki8-no8.jpg",
      ],
      price: "¥19,000",
      category: "洗濯機",
    },
    {
      id: 18,
      name: "SHARP 2ドア 2020年製",
      images: [
      "images/reizouko/reizouko10/reizouko10-no1.jpg",
      "images/reizouko/reizouko10/reizouko10-no2.jpg",
      "images/reizouko/reizouko10/reizouko10-no3.jpg",
      "images/reizouko/reizouko10/reizouko10-no4.jpg",
      "images/reizouko/reizouko10/reizouko10-no5.jpg",
      "images/reizouko/reizouko10/reizouko10-no6.jpg",
      "images/reizouko/reizouko10/reizouko10-no7.jpg",
      "images/reizouko/reizouko10/reizouko10-no8.jpg",
      "images/reizouko/reizouko10/reizouko10-no9.jpg",
      ],
      price: "¥19,000",
      category: "冷蔵庫",
    },
    {
      id: 19,
      name: "Panasonic 2ドア 2020年製",
      images: [
      "images/reizouko/reizouko11/reizouko11-no1.jpg",
      "images/reizouko/reizouko11/reizouko11-no2.jpg",
      "images/reizouko/reizouko11/reizouko11-no3.jpg",
      "images/reizouko/reizouko11/reizouko11-no4.jpg",
      "images/reizouko/reizouko11/reizouko11-no5.jpg",
      "images/reizouko/reizouko11/reizouko11-no6.jpg",
      "images/reizouko/reizouko11/reizouko11-no7.jpg",
      "images/reizouko/reizouko11/reizouko11-no8.jpg",
      "images/reizouko/reizouko11/reizouko11-no9.jpg",
      ],
      price: "¥27,000",
      category: "冷蔵庫",
    },
    {
      id: 20,
      name: "A-Stage 1ドア 2018年製",
      images: [
      "images/reizouko/reizouko12/reizouko12-no1.jpg",
      "images/reizouko/reizouko12/reizouko12-no2.jpg",
      "images/reizouko/reizouko12/reizouko12-no3.jpg",
      "images/reizouko/reizouko12/reizouko12-no4.jpg",
      "images/reizouko/reizouko12/reizouko12-no5.jpg",
      "images/reizouko/reizouko12/reizouko12-no6.jpg",
      ],
      price: "¥4,000",
      category: "冷蔵庫",
    },
    // {
    //   id: 21,
    //   name: "アビテラックス ミニ2ドア 2015年製",
    //   images: [
    //   "images/reizouko/reizouko13/reizouko13-no1.jpg",
    //   "images/reizouko/reizouko13/reizouko13-no2.jpg",
    //   "images/reizouko/reizouko13/reizouko13-no3.jpg",
    //   "images/reizouko/reizouko13/reizouko13-no4.jpg",
    //   "images/reizouko/reizouko13/reizouko13-no5.jpg",
    //   "images/reizouko/reizouko13/reizouko13-no6.jpg",
    //   "images/reizouko/reizouko13/reizouko13-no7.jpg",
    //   "images/reizouko/reizouko13/reizouko13-no8.jpg",
    //   ],
    //   price: "¥4,000",
    //   category: "冷蔵庫",
    // },
    // {
    //   id: 22,
    //   name: "三菱 2019年製",
    //   images: [
    //   "images/reizouko/reizouko14/reizouko14-no1.jpg",
    //   "images/reizouko/reizouko14/reizouko14-no2.jpg",
    //   "images/reizouko/reizouko14/reizouko14-no3.jpg",
    //   "images/reizouko/reizouko14/reizouko14-no4.jpg",
    //   "images/reizouko/reizouko14/reizouko14-no5.jpg",
    //   "images/reizouko/reizouko14/reizouko14-no6.jpg",
    //   "images/reizouko/reizouko14/reizouko14-no7.jpg",
    //   "images/reizouko/reizouko14/reizouko14-no8.jpg",
    //   "images/reizouko/reizouko14/reizouko14-no9.jpg",
    //   "images/reizouko/reizouko14/reizouko14-no10.jpg",
    //   ],
    //   price: "¥20,000",
    //   category: "冷蔵庫",
    // },
    {
      id: 23,
      name: "アイリス 2020年製",
      images: [
      "images/reizouko/reizouko15/reizouko15-no1.jpg",
      "images/reizouko/reizouko15/reizouko15-no2.jpg",
      "images/reizouko/reizouko15/reizouko15-no3.jpg",
      "images/reizouko/reizouko15/reizouko15-no4.jpg",
      "images/reizouko/reizouko15/reizouko15-no5.jpg",
      "images/reizouko/reizouko15/reizouko15-no6.jpg",
      "images/reizouko/reizouko15/reizouko15-no7.jpg",
      "images/reizouko/reizouko15/reizouko15-no8.jpg",
      ],
      price: "¥22,000",
      category: "冷蔵庫",
    },
    {
      id: 24,
      name: "ハイセンス 4.5kg 2019年製",
      images: [
        "images/sentakuki/sentakuki9/sentakuki9-no1.jpg",
        "images/sentakuki/sentakuki9/sentakuki9-no2.jpg",
        "images/sentakuki/sentakuki9/sentakuki9-no3.jpg",
        "images/sentakuki/sentakuki9/sentakuki9-no4.jpg",
        "images/sentakuki/sentakuki9/sentakuki9-no5.jpg",
        "images/sentakuki/sentakuki9/sentakuki9-no6.jpg",
        "images/sentakuki/sentakuki9/sentakuki9-no7.jpg",
        ],
      price: "¥17,000",
      category: "洗濯機",
    },
    // {
    //   id: 25,
    //   name: "アイリス 6kg 2020年製(フタ少しヒビあり)",
    //   images: [
    //     "images/sentakuki/sentakuki10/sentakuki10-no1.jpg",
    //     "images/sentakuki/sentakuki10/sentakuki10-no2.jpg",
    //     "images/sentakuki/sentakuki10/sentakuki10-no3.jpg",
    //     "images/sentakuki/sentakuki10/sentakuki10-no4.jpg",
    //     "images/sentakuki/sentakuki10/sentakuki10-no5.jpg",
    //     "images/sentakuki/sentakuki10/sentakuki10-no6.jpg",
    //     "images/sentakuki/sentakuki10/sentakuki10-no7.jpg",
    //     ],
    //   price: "¥19,000",
    //   category: "洗濯機",
    // },
    // {
    //   id: 26,
    //   name: "Panasonic 6kg 2018年製",
    //   images: [
    //     "images/sentakuki/sentakuki11/sentakuki11-no1.jpg",
    //     "images/sentakuki/sentakuki11/sentakuki11-no2.jpg",
    //     "images/sentakuki/sentakuki11/sentakuki11-no3.jpg",
    //     "images/sentakuki/sentakuki11/sentakuki11-no4.jpg",
    //     "images/sentakuki/sentakuki11/sentakuki11-no5.jpg",
    //     ],
    //   price: "¥19,000",
    //   category: "洗濯機",
    // },
    {
      id: 27,
      name: "HITACHI 7kg 2020年製",
      images: [
        "images/sentakuki/sentakuki12/sentakuki12-no1.jpg",
        "images/sentakuki/sentakuki12/sentakuki12-no2.jpg",
        "images/sentakuki/sentakuki12/sentakuki12-no3.jpg",
        "images/sentakuki/sentakuki12/sentakuki12-no4.jpg",
        "images/sentakuki/sentakuki12/sentakuki12-no5.jpg",
        "images/sentakuki/sentakuki12/sentakuki12-no6.jpg",
        "images/sentakuki/sentakuki12/sentakuki12-no7.jpg",
        ],
      price: "¥32,000",
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
        予算: ¥{priceFilter.toLocaleString()}
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