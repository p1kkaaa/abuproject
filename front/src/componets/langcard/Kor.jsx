import styles from './Langcard.module.css'
import content from './../../img/photo/Kor.jpg'
import arrowimg from './../../img/obj/arrow.svg'



const Korea = () => {
const handleClick = () => {
    alert("Нажали на Eng");
  };

  return (
    <div className={styles.lang}>
      <div className={styles.lang__imageWrapper}>
        <img className={styles.lang__img} src={content} alt="Con" />
        <div className={styles.lang__overlay}>
          <p className={styles.lang__overlayText}>
            Изучай корейский — скажи «Annyeong» и мир откроется для тебя!
          </p>
          <button onClick={handleClick} className={styles.lang__button}>
            Еще...
          </button>
        </div>
      </div>
      <div className={styles.lang__body}>
        <div className={styles.lang__text}>
          <div className={styles.lang__title}>Корейский язык</div>
        </div>
        <button onClick={handleClick} className={styles.lang__icon}>
          <img src={arrowimg} alt="Open" />
        </button>
      </div>
    </div>
  );
}

export default Korea;