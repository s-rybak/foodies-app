// // import style from "./Home.module.css";
import Categories from "components/Categories/Categories";
import Testimonials from "components/Testimonials/Testimonials";

import Hero from "components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <Testimonials />
    </>
  );
}
