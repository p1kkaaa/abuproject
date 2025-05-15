import Front from '../../coursecard/Front';
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
                            <h2>Курсы по Frontend</h2>
                        </div>
                    </div>
                    <div className="itcontent">
                        <Front />
                        <div className="ittxt">
                            <h2>
                                HTML + CSS + Адаптивная верстка
                                Научим с нуля верстать сайты, которые красиво смотрятся на всех устройствах — от телефона до компьютера.
                            </h2>
                            <h2>
                                JavaScript
                                Освоишь язык, который делает сайты «живыми»: работа с DOM, события, анимации и логика.
                            </h2>
                            <h2>
                                Работа с Git и GitHub
                                Узнаешь, как работать в команде и вести проекты как настоящий разработчик.
                            </h2>
                            <h2>
                                Фреймворк React и не только
                                Погрузишься в современную разработку интерфейсов, научишься строить сложные компоненты и управлять состоянием.


                            </h2>
                            <h2>
                                Интерактивные проекты
                                Сделаешь несколько мини-проектов и один финальный сайт/приложение.
                            </h2>
                            <h2>
                                Практика и проект
                                В конце курса создадим реальный проект, который ты сможешь добавить в своё портфолио.
                            </h2>
                            <h2>
                                Полную базу по frontend-разработке с практикой
                            </h2>
                            <h2>
                                Готовый проекты, готовое портфолио и опыт командной работы
                            </h2>
                            <h2>
                                Помощь ментора и поддержку на всех этапах
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