import style from "./Home.module.css";
import Testimonials from "components/Testimonials/Testimonials";

import Hero from "components/Hero/Hero";
import {Container, Title, UnderTitle} from "../../components/UI";
import CategoryList from "../../components/CategoryList/CategoryList";
import RecipeList from "../../components/RecipeList/recipeList";
import Pagination from "../../components/Pagination/Pagination";
import RecipeFilters from "../../components/RecipeFilters/recipeFilters";
import React, {useEffect, useState} from "react";
import api from "../../services/api";
import icons from "../../assets/img/icons/icons.svg";
import {useLocation} from "react-router-dom";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState({});
  const [ingredientId, setIngredientId] = useState('274df206-e919-4ba7-af37-fcd9ce558b63');
  const [areaId, setAreaId] = useState('64b9c362-3043-4bf5-b9bc-1cd90ff029e5');
  const location = useLocation();

  const getQueryParams = (search) => {
    return new URLSearchParams(search);
  };

  const queryParams = getQueryParams(location.search);
  const page = queryParams.get("page") || 1;

  const fetchFavorites = async () => {
    try {
      const favorites = await api.get(`/api/recipes/favorites`);
      return favorites.data
    } catch (error) {
      console.error("Error fetching favorites:", error);
    }
  }



  useEffect(() => {
    // Define an async function inside useEffect
    if (!category.id) return;
    const fetchRecipes = async () => {
      try {
        const response = await api.get(`/api/recipes?page=${page}&limit=10&category=${category.id}&area=${areaId}&ingredient=${ingredientId}`);

        await handleSelectFavoriteRecipe(response.data.recipes)

        setTotal(response.data.total);



      } catch (error) {
        console.error("Error fetching recipes:", error);
      }
    };
    fetchRecipes();
  }, [category, page, areaId, ingredientId]);


  const handleChangeFilter = (selectedId, type) => {
    type === 'ingredients' ? setIngredientId(selectedId) : setAreaId(selectedId);
  };

  const handlerChangeCategory = (category) => {
    setCategory(category);
  };

  const isEmptyObject = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
  };

  const handleSelectFavoriteRecipe = async (recipesData) => {
    const favoritesData = await fetchFavorites()
    const matchedRecipes = matchRecipeWithFavorites(recipesData || recipes, favoritesData);
    setRecipes(matchedRecipes);
  }

  const matchRecipeWithFavorites = (recipes, favorites = []) => {
    return recipes.map(recipe => ({
      ...recipe,
      isFavorite: Array.isArray(favorites) && favorites.some(fav => {
        return fav.recipeId === recipe.id
      })
    }));
  };

  return (
    <>
      <Hero />
      <Container>
        {!isEmptyObject(category) && <button className={style.btn} onClick={() => setCategory({})}>
          <svg className={style.icon}>
            <use href={`${icons}#icon-arrow-up-right`}></use>
          </svg>
          back
        </button>}
        <Title>{
          isEmptyObject(category) ? 'Categories' : category.name
        }</Title>
        <UnderTitle>
          {
            isEmptyObject(category)
              ? (
                `Discover a limitless world of culinary possibilities and enjoy
          exquisite recipes that combine taste, style and the warm atmosphere of
          the kitchen.`
            ) : (
                'Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires.'
              )
          }

        </UnderTitle>
        {
          isEmptyObject(category) ? (
            <CategoryList handleSelect={handlerChangeCategory} />
          ) : (
            <div className={style["recipes-category"]}>
              <div>
                <RecipeFilters  changeHandler={handleChangeFilter}/>
              </div>
              <div>
                <div className={style['recipes-list']}>
                  <RecipeList recipes={recipes} addFavorite={handleSelectFavoriteRecipe}/>
                </div>
                <Pagination total={total} limit={12}/>
              </div>
            </div>
          )
        }
      </Container>
      <div>
        <Testimonials/>
      </div>
    </>
  );
}
