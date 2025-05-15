import styles from './Coursecard.module.css'
import content from './../../img/photo/back.jpg'
import arrowimg from './../../img/obj/arrow.svg'
import { useNavigate } from 'react-router-dom'



const Back = () => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/backpage');
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__imageWrapper}>
        <img className={styles.card__img} src={content} alt="Con" />
        <div className={styles.card__overlay}>
          <p className={styles.card__overlayText}>
            Frontend блистает — Backend рулит.
          </p>
          <button onClick={handleClick} className={styles.card__button}>
            Еще...
          </button>
        </div>
      </div>
      <div className={styles.card__body}>
        <div className={styles.card__text}>
          <div className={styles.card__title}>Backend</div>
        </div>
        <button onClick={handleClick} className={styles.card__icon}>
          <img src={arrowimg} alt="Open" />
        </button>
      </div>
    </div>
  );
}

export default Back;