import './header.css';
import logo from './../../img/logo/logo.jpg';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';  // Импортируем useAuth

const Header = () => {
    const navigate = useNavigate();
    const { user, logout } = useAuth();  // Используем контекст для получения данных о пользователе и logout

    // Функция для перехода на страницу входа
    const handleClick = () => {
        navigate('/loginregistr'); // Путь должен совпадать с тем, что указан в Routes
    };

    const handClick = () => {
        navigate('/booking');
    };

    // Функция для прокрутки страницы к нужному разделу
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    // Функция для выхода
    const handleLogout = () => {
        logout(); // Вызываем logout из контекста
        navigate('/'); // Перенаправляем на главную страницу после выхода
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
                            <li><button onClick={handClick}>Забронировать</button></li>
                        </ul>
                    </div>

                    <div className="header__auth">
                        {user ? (
                            // Если пользователь аутентифицирован, показываем кнопку "Выйти"
                            <button onClick={handleLogout} className="header__login-btn">Выйти</button>
                        ) : (
                            // Если пользователь не аутентифицирован, показываем кнопку "Войти"
                            <button onClick={handleClick} className="header__login-btn">Войти</button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Header;
