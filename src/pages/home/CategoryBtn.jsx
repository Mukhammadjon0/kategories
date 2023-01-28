import React, { useState } from "react";

function CategoryBtn({ filterProdBtn, item, categories, setCategories }) {
  const handleChangeBtn = () => {
    filterProdBtn(item);
    if (item === "all") {
      setCategories({
        all: true,
        car: false,
        phone: false,
        fruit: false,
      });
    } else if (item === "car") {
      setCategories({
        all: false,
        car: true,
        phone: false,
        fruit: false,
      });
    } else if (item === "phone") {
      setCategories({
        all: false,
        car: false,
        phone: true,
        fruit: false,
      });
    } else if (item === "fruit") {
      setCategories({
        all: false,
        car: false,
        phone: false,
        fruit: true,
      });
    }
  };
  return (
    <div>
      <button
        onClick={handleChangeBtn}
        className={`${
          categories[item] ? "bg-sky-500" : "bg-gray-700"
        } text-white p-3 rounded duration-300 ease-linear`}
      >
        {item}
      </button>
    </div>
  );
}

export default CategoryBtn;
