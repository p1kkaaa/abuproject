import Uiux from '../../coursecard/Uiux';
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
                            <h2>Курсы по UI/UX</h2>
                        </div>
                    </div>
                    <div className="itcontent">
                        <Uiux />
                        <div className="ittxt">
                            <div className="ittxt__grid">
                                <div className="ittxt__item">
                                    <h3>Основы UX-дизайна</h3>
                                    <p>Поймешь, как анализировать поведение пользователей, строить логичную структуру сайта или приложения и решать реальные задачи с помощью дизайна.</p>
                                </div>
                                <div className="ittxt__item">
                                    <h3>Основы UI-дизайна</h3>
                                    <p>Научишься работать с визуальной частью: цвета, шрифты, сетки, иконки, композиция, UI-киты и др.</p>
                                </div>
                                <div className="ittxt__item">
                                    <h3>Работа в Figma</h3>
                                    <p>Полностью освоишь Figma — главное приложение современного дизайнера.</p>
                                </div>
                                <div className="ittxt__item">
                                    <h3>Прототипирование и взаимодействие</h3>
                                    <p>Создание кликабельных прототипов, сценариев взаимодействия и пользовательских сценариев.</p>
                                </div>
                                <div className="ittxt__item">
                                    <h3>Дизайн-система и адаптивность</h3>
                                    <p>Как сделать масштабируемый и универсальный интерфейс, подходящий для всех устройств.</p>
                                </div>
                                <div className="ittxt__item">
                                    <h3>Практика на реальных задачах</h3>
                                    <p>Сделаешь 2–3 проекта — сайт, приложение или лендинг — которые можно будет показать работодателю.</p>
                                </div>
                            </div>

                            <div className="ittxt__outcome">
                                <h3>Что ты получишь:</h3>
                                <ul>
                                    <li>Уверенные знания в UI/UX-дизайне</li>
                                    <li>Навыки работы в Figma и подготовки макетов для разработчиков</li>
                                    <li>Готовое портфолио с проектами</li>
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