import English from '../langcard/Eng';
import Germany from '../langcard/Ger';
import Korea from '../langcard/Kor';
import './lang.css'



const Lang = () => {
    return (
        <section id='top-course' className='course'>
            <div className="container">
                <div className="course__header">

                    <h2 className="title-2">
                        Языковые Курсы
                    </h2>

                </div>
                <div className="course__card">
                    <English />
                    <Germany />
                    <Korea />
                </div>
            </div>
        </section>
    );
}

export default Lang;