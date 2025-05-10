import React, { useState, useRef, useEffect } from 'react'; // ✅ Импорт хуков
import math from './../../img/photo/math.jpg';
import albert from './../../img/photo/albert.jpg';
import geo from './../../img/photo/geometry.jpg';
import arrowimg from './../../img/obj/arrow.svg';
import styles from './Itemcard.module.css'; // ✅ Подключение CSS-модуля


const images = [albert, math, geo];
const extendedImages = [...images, images[0]]; // ✅ Чтобы бесконечно крутить

const Math = () => {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === images.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 800);
    } else {
      setIsTransitioning(true);
    }
  }, [index]);

  const handleClick = () => {
    alert('Переход на подробности...'); // Заменить на нужную навигацию
  };

  return (
    <div className={styles.math}>
      <div className={styles.math__imageWrapper}>
        <div
          ref={sliderRef}
          className={styles.math__slider}
          style={{
            transform: `translateX(-${index * 100}%)`,
            transition: isTransitioning ? 'transform 0.8s ease-in-out' : 'none'
          }}
        >
          {extendedImages.map((src, i) => (
            <img key={i} src={src} alt={`slide-${i}`} className={styles.math__img} />
          ))}
        </div>

        <div className={styles.math__overlay}>
          <p className={styles.math__overlayText}>Математика, Физика, Геометрия</p>
          <button onClick={handleClick} className={styles.math__button}>Еще...</button>
        </div>
      </div>

      <div className={styles.math__body}>
        <div className={styles.math__text}>
          <div className={styles.math__title}>Точная Наука</div>
        </div>
        <button onClick={handleClick} className={styles.math__icon}>
          <img src={arrowimg} alt="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Math;
