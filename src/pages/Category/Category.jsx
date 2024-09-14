import style from './Category.module.css'
import { RecipeCard } from "components/RecipeCard/RecipeCard";
import Hero from "../../components/Hero/Hero";
import Pagination from "../../components/Pagination/Pagination";
//import {useEffect} from "react";
//import api from "../../services/api";


export default function Category() {

  return (
    <>
      <Hero />

      <div className={style["container"]}>
        <div>
          <button>Back</button>
          <h2>
            DESSERTS
          </h2>
          <p>
            Go on a taste journey, where every sip is a sophisticated creative chord, and every dessert is an expression of the most refined gastronomic desires.
          </p>

        </div>
        <div className={style["recipe-category"]}>
          <div>1</div>
          <div>
            <div className={style['recipes-list']}>
              {
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((recipe) => (
                  <RecipeCard key={recipe}/>
                ))
              }
            </div>
            <Pagination total={12} limit={12}/>
          </div>

        </div>

      </div>
    </>
  );
}
