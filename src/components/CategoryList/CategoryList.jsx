import {useEffect, useState} from "react";
import style from "./CategoryList.module.css";
import CardCategory from "./CardCategory/CardCategory.jsx";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../redux/categories/categoriesOperations";
import {selectCategories} from "../../redux/categories/categoriesSelectors";

const CategoryList = ({handleSelect}) => {
  const [showAll, setShowAll] = useState(false);
  const handleShowAll = () => {
    setShowAll(true);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const { categories } = useSelector(selectCategories);

  return (
    <div className={style["category-list"]}>
      {categories && categories.length > 0 && (
        <>
          {(showAll ? categories : categories.slice(0, 11)).map((category, index) => (
            <CardCategory
              key={category.id}
              category={category}
              handleSelect={handleSelect}
            />
          ))}

          {!showAll && categories.length > 11 && (
            <button className={style["category-btn"]} onClick={handleShowAll}>
              All categories
            </button>
          )}
        </>
      )}
    </div>
  );
};

export default CategoryList;
