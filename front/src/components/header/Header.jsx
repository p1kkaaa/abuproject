import './header.css'
import logo from './../../img/logo/logo.jpg'
import { useNavigate, Link } from 'react-router-dom';


const Header = () => {


     const navigate = useNavigate();

    const handleClick = () => {
        navigate('/loginregistr'); // путь должен совпадать с тем, что указан в Routes
      };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return ( 
        <section className="header">
            <div className="container">
                <div className="header__row">
                    <div className="header__logo">
                        <Link to="/" className="header__logo-link">
                        <img src={logo} alt="logo" />
                        <span>LearnUp</span>
                        </Link>
                    </div>

                    <div className="header__nav">
                        <ul>
                            
                            <li><button onClick={() => scrollToSection('lang-course')}>Языковые Курсы</button></li>
                            <li><button onClick={() => scrollToSection('itcourse')}>IT Курсы</button></li>
                            <li><button onClick={() => scrollToSection('item')}>Оброзовательные Курсы</button></li>
                            <li><button onClick={() => scrollToSection('about')}>О нас</button></li>
                            <li><button onClick={() => scrollToSection('contacts')}>Контакты</button></li>
                           
                    <div className="header__auth">
                        <button onClick={handleClick} className="header__login-btn">Войти</button>
                    </div>

                        </ul>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Header;