import Footer from '../../footer/Footer';
import English from '../../langcard/Eng';
import Parallax from '../../parallax/Parallax';
import Requisite from '../../requisite/Requisite';
import './langpage.css';

const Engpage = () => {
    return (
        <>
            <Parallax />
            <section className="langpage">
                <div className="container">
                    <div className="langpage__header">
                        <div className="title-2">
                            <h2>Курс Английского языка</h2>
                        </div>
                    </div>

                    <div className="langcontent">
                        <English />
                        <div className="langtxt">
                            <div className="langtxt__grid">

                                <div className="langtxt__item">
<h3>Грамматика — без зубрежки</h3>
                                    <p>Объясняем просто, понятно и с практикой. Всё на реальных примерах.</p>
                                </div>

                                <div className="langtxt__item">
<h3>Разговорная практика</h3>
                                    <p>Speaking-сессии, диалоги, ролевые игры, обсуждения — и никакого стеснения.</p>
                                </div>

                                <div className="langtxt__item">
 <h3>Слушание и произношение</h3>
                                    <p>Развиваем слух, убираем страх аудирования и ставим уверенное произношение.</p>
                                </div>

                                <div className="langtxt__item">
<h3>Словарный запас</h3>
                                    <p>Темы из реальной жизни: учеба, работа, общение, путешествия, IT и многое другое.</p>
                                </div>

                                <div className="langtxt__item">
<h3>Адаптированный подход</h3>
                                    <p>Домашки, материалы и поддержка с учётом твоего уровня и цели.</p>
                                </div>

                                <div className="langtxt__item">
 <h3>Уровни обучения</h3>
                                    <ul>
                                        <li>A1–A2 — начинаем говорить и понимать</li>
                                        <li>B1–B2 — уверенно общаемся и читаем</li>
                                        <li>C1 — свободная и профессиональная речь</li>
                                    </ul>
                                </div>

                                <div className="langtxt__item">
  <h3>После курса ты сможешь:</h3>
                                <ul>
                                    <li>Говорить на английском уверенно</li>
                                    <li>Понимать носителей и фильмы без сабов</li>
                                    <li>Проходить интервью и писать письма</li>
                                    <li>Развить навык общения и учиться дальше</li>
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

export default Engpage;
