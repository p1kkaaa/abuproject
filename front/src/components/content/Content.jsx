import Card from '../couchcard/Card';
import './content.css'

const Content = () => {
    return (
        <section id='content' className="content">
            <div className="content__header">
                <h1 className="content-title">
                    Прокачай свои скилы на максимум с опытным преподавателем
                </h1>
            </div>
            <div className="content__txt">
                <h1>Преподаватели: 34 253 репетитора которые помогут тебе осовоит тебе новые скилы.</h1>
            </div>
            <div className="content__card">
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </section>
    );
}

export default Content;