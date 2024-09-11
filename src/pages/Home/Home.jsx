// import style from "./Home.module.css";
import Categories from "components/Categories/Categories";
import Testimonials from "components/Testimonials/Testimonials";

import Hero from "components/Hero/Hero";

export default function Home() {
  return (
    <>
      <h1>Test: Home Component is Rendering</h1>{" "}
      {/* Временный тестовый текст */}
      <Hero />
      <Categories />
      <Testimonials />
    </>
  );
}
