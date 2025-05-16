import Back from '../../coursecard/Back';
import Footer from '../../footer/Footer';
import Parallax from '../../parallax/Parallax';
import Requisite from '../../requisite/Requisite';
import './itpage.css'


const Backpage = () => {
    return (
        <>
            <Parallax />
            <section className="itpage">
                <div className="container">
                    <div className="itpage__header">
                        <div className="title-2">
                            <h2>Курсы по Backend</h2>
                        </div>
                    </div>
                    <div className="itcontent">
                        <Back />
                        <div className="ittxt">
                            <div className="ittxt__grid">
                                <div className="ittxt__item">
                                    <h3>Основы backend-разработки</h3>
                                    <p>Как работает сервер, HTTP, REST, клиент-серверная архитектура.</p>
                                </div>
                                <div className="ittxt__item">
                                    <h3>Язык программирования</h3>
                                    <p>Node.js / Python / PHP / Java — погружение в один из популярных языков.</p>
                                </div>
                                <div className="ittxt__item">
                                    <h3>Работа с базами данных</h3>
                                    <p>SQL (PostgreSQL, MySQL) и NoSQL (MongoDB) — теория и практика.</p>
                                </div>
                                <div className="ittxt__item">
                                    <h3>Создание API</h3>
                                    <p>REST API, авторизация, обработка запросов, CRUD-операции.</p>
                                </div>
                                <div className="ittxt__item">
                                    <h3>Безопасность и валидация</h3>
                                    <p>Как защитить данные и обрабатывать ввод безопасно.</p>
                                </div>
                                <div className="ittxt__item">
                                    <h3>Практика и проект</h3>
                                    <p>Реальный проект в портфолио и опыт командной разработки.</p>
                                </div>
                            </div>

                            <div className="ittxt__outcome">
                                <h3>После курса ты сможешь:</h3>
                                <ul>
                                    <li>Создавать полноценные backend-приложения</li>
                                    <li>Разрабатывать API и подключать базы данных</li>
                                    <li>Понимать архитектуру и безопасность серверов</li>
                                    <li>Работать в команде над реальными проектами</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <Requisite />
            <Footer />
        </>
    );
}

export default Backpage;