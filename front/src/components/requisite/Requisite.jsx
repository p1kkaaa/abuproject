import './requisite.css'
import inst from './../../img/obj/instagram.png'

const Requisite = () => {
    return ( 
        <section id='contacts' className="requsite">
        <div className="container">
            <div className="requi__header">
                <h2 className="title-2">Контакты</h2>
            </div>

            <div className="requi__content">
                <div className="requi__block">
                        <h3>Телефон:</h3>
                    <ul>
                        <li><span>📞</span>+996 700 600 500</li>
                        <li><span>📞</span>+996 700 600 500</li>
                        <li><span>📞</span>+996 700 600 500</li>
                    </ul>
                </div>
                <div className="requi__block">
                    <h3>Соц. сети:</h3>
                    <ul className="social-links">
                        <li>
                            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                                <img src={inst} alt="Instagram" />
                            </a>
                            Instagram
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </section>
     );
}
 
export default Requisite
