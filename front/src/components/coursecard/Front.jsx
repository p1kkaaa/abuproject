import styles from './Coursecard.module.css'
import content from './../../img/photo/front.jpg'
import arrowimg from './../../img/obj/arrow.svg'
import { useNavigate } from 'react-router-dom'


const Front = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/frontpage');
  };
  return (
    <div className={styles.card}>
      <div className={styles.card__imageWrapper}>
        <img className={styles.card__img} src={content} alt="Con" />
        <div className={styles.card__overlay}>
          <p className={styles.card__overlayText}>
            Видишь? Значит, работает — это Frontend.
          </p>
          <button onClick={handleClick} className={styles.card__button}>
            Еще...
          </button>
        </div>
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>Frontend</div>
        </div>
        <button onClick={handleClick} className={styles.card__icon}>
          <img src={arrowimg} alt="Open" />
        </button>
      </div>
    </div>
  );
}

export default Front;