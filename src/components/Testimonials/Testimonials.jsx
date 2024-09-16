import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTestimonials } from "../../redux/testimonials/testimonialsOperations";
import {
  selectTestimonials,
} from "../../redux/testimonials/testimonialsSelectors";
import styles from "./Testimonials.module.css";
import Icon from "../shared/Icon/Icon";

const Testimonials = () => {
  const dispatch = useDispatch();
  const testimonials = useSelector(selectTestimonials);
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

  return (
    <div className={styles.testimonials}>
      <p className={styles.testimonial_text}>What our customer say</p>
      <h2>Testimonials</h2>
      <div className={styles.container_icon}>
        <Icon iconId={"icon-testimoals"} customStyle={styles.icon} stroke="" />
      </div>
      <div className={styles.slider}>
        <p className={styles.testimonial_message}>
          {testimonials[currentIndex]?.testimonial}
        </p>
        <h4>{testimonials[currentIndex]?.user?.name}</h4>
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
