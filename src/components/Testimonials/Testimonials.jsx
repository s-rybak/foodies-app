import React, { useState, useEffect } from "react";
import styles from "./Testimonials.module.css";
import Icon from "../shared/Icon/Icon";

/**
  |============================
  | Это локальное - нужно удалить после запуска базы данных
  |============================
*/

const testimonials = [
  {
    id: "647495d0c825f1570b04182d",
    text: "Foodies has transformed my cooking experience! With its diverse recipe collection and user-friendly interface, I can easily find, save, and cook delicious meals for any occasion. From quick dinners to elaborate feasts, this app has become my go-to kitchen companion. Highly recommended!",
    author: "Larry Pageim",
  },
  {
    id: "647495d0c825f1570b04182e",
    text: "Foodies is a must-have for any home cook! With its extensive recipe collection and easy-to-use interface, I've discovered new culinary delights and streamlined my meal planning. Cooking has never been this enjoyable!",
    author: "Larry Pageim",
  },
  {
    id: "647495d0c825f1570b04182f",
    text: "Thank you for the wonderful recipe for feta pasta with tomatoes and basil. It turned out to be not only tasty, but also incredibly colorful. This has become a favorite family meal!",
    author: "Larry Pageim",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.testimonials}>
      <p className={styles.testimonial_text}>What our customer say</p>
      <h2>Testimonials</h2>
      <div className={styles.container_icon}>
        <Icon iconId={"icon-testimoals"} customStyle={styles.icon} stroke="" />
      </div>
      <div className={styles.slider}>
        <p className={styles.testimonial_message}>
          {testimonials[currentIndex].text}
        </p>
        <h4>{testimonials[currentIndex].author}</h4>
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

/**
  |============================
  |  Это локальное - нужно удалить после запуска базы данных 
  |============================
*/

/**
  |============================
  | Это код для подключения к базе данных - разкомитеть после подключнния базы данных
  |============================
*/
// const Testimonials = () => {
//   const [testimonials, setTestimonials] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     const fetchTestimonials = async () => {
//       try {
//         const response = await fetch(
//           "https://foodies-api-hrrk.onrender.com/testimonials"
//         );
//         const data = await response.json();
//         setTestimonials(data);
//       } catch (error) {
//         console.error("Ошибка при загрузке отзывов:", error);
//       }
//     };

//     fetchTestimonials();
//   }, []);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, [testimonials.length]);

//   if (testimonials.length === 0) {
//     return <p>Загрузка отзывов...</p>;
//   }

//   return (
//     <div className={styles.testimonials}>
//       <p className={styles.testimonial_text}>What our customer say</p>
//       <h2>Testimonials</h2>
//       <div className={styles.container_icon}>
//         <Icon iconId={"icon-testimoals"} customStyle={styles.icon} stroke="" />
//       </div>
//       <div className={styles.slider}>
//         <p className={styles.testimonial_message}>
//           {testimonials[currentIndex].text}
//         </p>
//         <h4>{testimonials[currentIndex].author}</h4>
//       </div>
//       <div className={styles.pagination}>
//         {testimonials.map((testimonial, index) => (
//           <button
//             key={testimonial.id}
//             className={index === currentIndex ? styles.active : ""}
//             onClick={() => setCurrentIndex(index)}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Testimonials;
