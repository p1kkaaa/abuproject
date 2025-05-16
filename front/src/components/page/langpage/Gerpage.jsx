import Footer from '../../footer/Footer';
import Germany from '../../langcard/Ger';
import Parallax from '../../parallax/Parallax';
import Requisite from '../../requisite/Requisite';
import './langpage.css';

const Gerpage = () => {
    return (
        <>
            <Parallax />
            <section className="langpage">
                <div className="container">
                    <div className="langpage__header">
                        <div className="title-2">
                            <h2>Курс Немецкого языка</h2>
                        </div>
                    </div>

                    <div className="langcontent">
                        <Germany />
                        <div className="langtxt">
                            <div className="langtxt__grid">

                                <div className="langtxt__item">
                                    <h3>Базовая и разговорная грамматика</h3>
                                    <p>Освоишь времена, структуру предложений и важные правила — понятно и без стресса.</p>
                                </div>

                                <div className="langtxt__item">
                                    <h3>Произношение и аудирование</h3>
                                    <p>Научишься правильно говорить и понимать немецкую речь на слух.</p>
                                </div>

                                <div className="langtxt__item">
                                    <h3>Разговорная практика с первого занятия</h3>
                                    <p>Уверенно будешь вести диалоги: знакомство, покупки, путешествия, учёба, работа.</p>
                                </div>

                                <div className="langtxt__item">
                                    <h3>Чтение и письмо</h3>
                                    <p>Работа с адаптированными текстами, упражнения на письмо, диктанты и переписка.</p>
                                </div>

                                <div className="langtxt__item">
                                    <h3>Подготовка к экзаменам</h3>
                                    <p>A1, A2, B1 — поможем подготовиться к экзаменам Goethe, ÖSD и другим.</p>
                                </div>

                                <div className="langtxt__item">
                                    <h3>Уровни обучения</h3>
                                    <ul>
                                        <li>A1–A2 — начальный и базовый</li>
                                        <li>B1 — уверенный уровень для жизни, учёбы и работы</li>
                                        <li>Индивидуальный подход по уровню</li>
                                    </ul>

                                </div>

                                <div className="langtxt__item">
                                    <h3>После курса ты сможешь:</h3>
                                    <ul>
                                        <li>Понимать немецкую речь</li>
                                        <li>Вести повседневные диалоги</li>
                                        <li>Расширить словарный запас</li>
                                        <li>Сделать шаг к переезду, учёбе или работе</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Requisite />
            <Footer />
        </>
    );
};

export default Gerpage;
