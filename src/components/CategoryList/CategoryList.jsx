import { useState } from "react";
import style from "./CategoryList.module.css";
import CardCategory from "./CardCategory/CardCategory.jsx";

const CategoryList = () => {
  const [categories, setCategories] = useState([
    "Beef",
    "Breakfast",
    "Desserts",
    "Lamb",
    "Goat",
    "Miscellaneous",
    "Pasta",
    "Pork",
    "Seafood",
    "Side",
    "Starter",
  ]);

  return (
    <div className={style["category-list"]}>
      {categories.map((category, index) => (
        <CardCategory key={`${category}-${index}`} name={category} />
      ))}
      <button className={style["category-btn"]}>All categories</button>
    </div>
  );
};

export default CategoryList;
