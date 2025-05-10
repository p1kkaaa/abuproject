import './parallax.css'
import promo from './../../img/photo/education.jpg'

const Parallax = () => {
    return ( 
        <section className="promo">
      <div className="container">
        <div className="promo__text">
          <div className="mutetit">
            <p>
                Открой для себя мир знаний — обучайся, расти, достигай!
            </p>
          </div>
        </div>
        <div className="promo_img">
          <img src={promo} alt="Promo"/>
        </div>
      </div>
    </section>
     );
}
 
export default Parallax;