import Footer from '../../footer/Footer';
import Korea from '../../langcard/Kor';
import Parallax from '../../parallax/Parallax';
import Requisite from '../../requisite/Requisite';
import './langpage.css';

const Korpage = () => {
    return (
        <>
            <Parallax />
            <section className="langpage">
                <div className="container">
                    <div className="langpage__header">
                        <div className="title-2">
                            <h2>Курс корейского языка</h2>
                        </div>
                    </div>

                    <div className="langcontent">
                        <Korea />
                        <div className="langtxt">
                            <div className="langtxt__grid">

                                <div className="langtxt__item">
                                    <h3>Хангыль — корейский алфавит</h3>
                                    <p>Уже на первом занятии научишься читать и писать по-корейски.</p>
                                </div>

                                <div className="langtxt__item">
                                    <h3>Базовая грамматика</h3>
                                    <p>Построение фраз, времена, частицы и вежливые формы общения.</p>
                                </div>

                                <div className="langtxt__item">
                                    <h3>Разговорная практика</h3>
                                    <p>Говорим на темы: знакомства, покупки, кафе, учеба, путешествия.</p>
                                </div>

                                <div className="langtxt__item">
                                    <h3>Слушание и произношение</h3>
                                    <p>Улучшим восприятие речи на слух и поработаем над акцентом.</p>
                                </div>

                                <div className="langtxt__item">
                                    <h3>Корейская культура</h3>
                                    <p>K-pop, дорамы, традиции, менталитет и особенности общения.</p>
                                </div>

                                <div className="langtxt__item">
                                    <h3>Уровни обучения</h3>
                                    <ul>
                                        <li>Beginner — с полного нуля</li>
                                        <li>A1–A2 — продолжаем учиться говорить и понимать</li>
                                        <li>Подготовка к TOPIK — по запросу</li>
                                    </ul>
                                </div>

                                <div className="langtxt__item">
                                    <h3>После курса ты сможешь:</h3>
                                    <ul>
                                        <li>Читать и писать по-корейски</li>
                                        <li>Понимать базовую речь</li>
                                        <li>Завести переписку с корейцами</li>
                                        <li>Говорить на повседневные темы</li>
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

export default Korpage;
