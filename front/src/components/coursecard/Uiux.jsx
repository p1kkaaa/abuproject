import styles from './Coursecard.module.css'
import content from './../../img/photo/uiux.jpg'
import arrowimg from './../../img/obj/arrow.svg'
import { useNavigate } from 'react-router-dom'

const Uiux = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/uiuxpage');
  };
  return (
    <div className={styles.card}>
      <div className={styles.card__imageWrapper}>
        <img className={styles.card__img} src={content} alt="Con" />
        <div className={styles.card__overlay}>
          <p className={styles.card__overlayText}>
            UI/UX — когда дизайн думает о тебе.
          </p>
          <button onClick={handleClick} className={styles.card__button}>
            Еще...
          </button>
        </div>
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>UI/UX</div>
        </div>
        <button onClick={handleClick} className={styles.card__icon}>
          <img src={arrowimg} alt="Open" />
        </button>
      </div>
    </div>
  );
}

export default Uiux;