import Front from '../../coursecard/Front';
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
                            <h2>Курсы по Frontend</h2>
                        </div>
                    </div>
                    <div className="itcontent">
                        <Front />
                        <div className="ittxt">
                            <div className="ittxt__grid">
                                <div className="ittxt__item">
                                    <h3>HTML + CSS + Адаптивная верстка</h3>
                                    <p>Научим с нуля верстать сайты, которые красиво смотрятся на всех устройствах — от телефона до компьютера.</p>
                                </div>
                                <div className="ittxt__item">
                                    <h3>JavaScript</h3>
                                    <p>Освоишь язык, который делает сайты «живыми»: работа с DOM, события, анимации и логика.</p>
                                </div>
                                <div className="ittxt__item">
                                    <h3>Работа с Git и GitHub</h3>
                                    <p>Узнаешь, как работать в команде и вести проекты как настоящий разработчик.</p>
                                </div>
                                <div className="ittxt__item">
                                    <h3>Фреймворк React и не только</h3>
                                    <p>Погрузишься в современную разработку интерфейсов, научишься строить сложные компоненты и управлять состоянием.</p>
                                </div>
                                <div className="ittxt__item">
                                    <h3>Интерактивные проекты</h3>
                                    <p>Сделаешь несколько мини-проектов и один финальный сайт/приложение.</p>
                                </div>
                                <div className="ittxt__item">
                                    <h3>Практика и проект</h3>
                                    <p>В конце курса создадим реальный проект, который ты сможешь добавить в своё портфолио.</p>
                                </div>
                            </div>

                            <div className="ittxt__outcome">
                                <h3>После курса ты получишь:</h3>
                                <ul>
                                    <li>Полную базу по frontend-разработке с практикой</li>
                                    <li>Готовые проекты, портфолио и опыт командной работы</li>
                                    <li>Помощь ментора и поддержку на всех этапах</li>
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