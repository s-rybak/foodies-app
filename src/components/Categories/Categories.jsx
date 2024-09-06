import CategoryList from "components/CategoryList/CategoryList";
import { Title, UnderTitle, Container } from "../UI";

import style from "./Categories.module.css";

const Categories = () => {
  return (
    <section className={style["categories-section"]}>
      <Container>
        <Title>Categories</Title>
        <UnderTitle>
          Discover a limitless world of culinary possibilities and enjoy
          exquisite recipes that combine taste, style and the warm atmosphere of
          the kitchen.
        </UnderTitle>
        <CategoryList />
      </Container>
    </section>
  );
};

export default Categories;
