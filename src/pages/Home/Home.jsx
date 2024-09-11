//import style from './Home.module.css'
import Categories from "components/Categories/Categories";

import Hero from "components/Hero/Hero";
import RecipeFilters from "components/RecipeFilters/RecipeFilters";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <RecipeFilters />
    </>
  );
}
