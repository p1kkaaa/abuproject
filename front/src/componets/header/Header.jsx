import './header.css'
import logo from './../../img/logo/logo.jpg'


const Header = () => {
    return ( 
        <section className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <img src={logo} alt="logo" />
                        <span>LearnUp</span>
                    </div>

                    <div className="header__nav">
                        <ul>
                            
                            <li><button>Языковые Курсы</button></li>
                            <li><button>IT Курсы</button></li>
                            <li><button>Оброзовательные Курсы</button></li>
                            <li><button>О нас</button></li>
                            <li><button>Контакты</button></li>
                           
                    <div className="header__auth">
                        <button className="header__login-btn">Войти</button>
                    </div>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Header;