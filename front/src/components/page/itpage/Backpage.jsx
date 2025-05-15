import Back from '../../coursecard/Back';
import Footer from '../../footer/Footer';
import Parallax from '../../parallax/Parallax';
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
                            <h2>
                                Основы backend-разработки
                                Изучим, как работает сервер, что такое HTTP, REST и как устроена клиент-серверная архитектура.
                            </h2>
                            <h2>
                                Язык программирования (например, Node.js / Python / PHP / Java)
                                Полное погружение в один из популярных языков backend-разработки.
                            </h2>
                            <h2>
                                Работа с базами данных
                                Научишься использовать SQL (PostgreSQL, MySQL) и NoSQL (MongoDB) базы.
                            </h2>
                            <h2>
                                Создание API
                                Построим собственные REST API, научимся обрабатывать запросы, авторизовывать пользователей и многое другое.
                            </h2>
                            <h2>
                                Безопасность и валидация данных
                                Как защищать свои серверы от атак и обрабатывать пользовательские данные правильно.
                            </h2>
                            <h2>
                                Практика и проект
                                В конце курса создадим реальный проект, который ты сможешь добавить в своё портфолио.
                            </h2>
                            <h2>
                                Уверенные знания и навыки backend-разработки
                            </h2>
                            <h2>
                                Готовый проект и опыт командной работы
                            </h2>
                            <h2>
                                Поддержку ментора и разбор домашек
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default Backpage;