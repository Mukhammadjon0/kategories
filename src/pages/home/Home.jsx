import { collection, onSnapshot } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import Product from "../../components/Product";
import { StateContext } from "../../context";
import CategoryBtn from "./CategoryBtn";

function Home() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const { db } = useContext(StateContext);
  const colRefProducts = collection(db, "products");
  useEffect(() => {
    onSnapshot(colRefProducts, (snapshot) => {
      setProducts(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
      setCategory(
        snapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    });
  }, []);
  console.log(category);
  console.log(products);
  const categoryBtns = ["all", "car", "phone", "fruit"];

  const filterProdBtn = (type) => {
    const filteredData = products.filter((item) => item.type === type);
    type === "all" ? setCategory(products) : setCategory(filteredData);
  };
  const [categories, setCategories] = useState({
    all: true,
    car: false,
    phone: false,
    fruit: false,
  });

  return (
    <div className="p-5">
      <h1 className="text-4xl text-center font-bold ">Products</h1>
      <div className="flex flex-row gap-4 justify-center my-2">
        {categoryBtns.map((item, index) => (
          <CategoryBtn
            key={index}
            categories={categories}
            setCategories={setCategories}
            filterProdBtn={filterProdBtn}
            item={item}
          />
        ))}
      </div>
      <div className="grid grid-cols-4 py-5 gap-2">
        {category.map((item) => (
          <Product key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}

export default Home;
