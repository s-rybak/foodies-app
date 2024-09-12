import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTestimonials } from "../../redux/testimonials/testimonialsOperations";
import {
  selectTestimonials,
  selectLoading,
  selectError,
} from "../../redux/testimonials/testimonialsSelectors";
import styles from "./Testimonials.module.css";
import Icon from "../shared/Icon/Icon";

const Testimonials = () => {
  const dispatch = useDispatch();
  const testimonials = useSelector(selectTestimonials);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    dispatch(fetchTestimonials());
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (isLoading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.testimonials}>
      <p className={styles.testimonial_text}>Отзывы наших клиентов</p>
      <h2>Отзывы</h2>
      <div className={styles.container_icon}>
        <Icon iconId={"icon-testimoals"} customStyle={styles.icon} stroke="" />
      </div>
      <div className={styles.slider}>
        <p className={styles.testimonial_message}>
          {testimonials[currentIndex]?.text}
        </p>
        <h4>{testimonials[currentIndex]?.author}</h4>
      </div>
      <div className={styles.pagination}>
        {testimonials.map((testimonial, index) => (
          <button
            key={testimonial.id}
            className={index === currentIndex ? styles.active : ""}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
