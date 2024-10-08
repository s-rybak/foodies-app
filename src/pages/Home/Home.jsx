import style from "./Home.module.css";
import Testimonials from "components/Testimonials/Testimonials";

import Hero from "components/Hero/Hero";
import {Container, Title, UnderTitle} from "../../components/UI";
import CategoryList from "../../components/CategoryList/CategoryList";
import RecipeList from "../../components/RecipeList/recipeList";
import Pagination from "../../components/Pagination/Pagination";
import RecipeFilters from "../../components/RecipeFilters/recipeFilters";
import React, { useEffect, useRef, useState} from "react";
import api from "../../services/api";
import icons from "../../assets/img/icons/icons.svg";
import {useLocation} from "react-router-dom";

export default function Home() {
    const categoriesListElement = useRef(null);
    const [recipes, setRecipes] = useState([]);
    const [total, setTotal] = useState(0);
    const [category, setCategory] = useState({});
    const [ingredientId, setIngredientId] = useState('');
    const [areaId, setAreaId] = useState('');
    const location = useLocation();

    const getQueryParams = (search) => {
        return new URLSearchParams(search);
    };

    const queryParams = getQueryParams(location.search);
    const page = queryParams.get("page") || 1;




    const handleChangeFilter = (selectedId, type) => {
        type === 'ingredients' ? setIngredientId(selectedId) : setAreaId(selectedId);
    };

    const handlerChangeCategory = (category) => {
        setCategory(category);


        if (categoriesListElement.current) {
            setTimeout(() => {
                if (categoriesListElement.current) {
                    categoriesListElement.current.scrollIntoView({behavior: 'smooth'});
                }
            }, 100);
        }
    };

    const isEmptyObject = (obj) => {
        return Object.keys(obj).length === 0 && obj.constructor === Object;
    };



    useEffect(() => {
        // Define an async function inside useEffect
        if (!category.id) return;
        const fetchRecipes = async () => {
            try {
                const url = `/api/recipes?page=${page}&limit=6&category=${category.id}`
                    + (areaId ? `&area=${areaId}` : '')
                    + (ingredientId ? `&ingredient=${ingredientId}` : '');

                const response = await api.get(url);
                setRecipes(response.data.recipes)
                setTotal(response.data.total);

            } catch (error) {
                setRecipes([])
                setTotal(0)
            }
        };
        fetchRecipes();
    }, [category, page, areaId, ingredientId]);

    return (
        <>
            <Hero/>
            <Container>
                {!isEmptyObject(category) && <button className={style.btn} onClick={() => {
                    setCategory({})
                    setIngredientId('')
                    setAreaId('')
                }}>
                    <svg className={style.icon}>
                        <use href={`${icons}#icon-arrow-up-right`}></use>
                    </svg>
                    back
                </button>}
                <div ref={categoriesListElement}></div>
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
                        <CategoryList handleSelect={handlerChangeCategory}/>
                    ) : (
                        <div className={style["recipes-category"]}>
                            <div>
                                <RecipeFilters changeHandler={handleChangeFilter}/>
                            </div>
                            <div>
                                <div className={style['recipes-list']}>
                                    <RecipeList recipes={recipes} />
                                    {
                                        recipes.length === 0 && (
                                            <div className={style['no-recipes']}>
                                                <p>No recipes found</p>
                                            </div>
                                        )
                                    }
                                </div>
                                <Pagination total={total} limit={6}/>
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
