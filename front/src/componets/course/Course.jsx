import './course.css'

import Back from "../coursecard/Back";
import Front from "../coursecard/Front";
import Uiux from "../coursecard/Uiux";

const Course = () => {
    return (
        <section id='top-course' className='course'>
            <div className="container">
                <div className="course__header">

                    <h2 className="title-2">
                        IT-Курсы
                    </h2>

                </div>
                <div className="course__card">
                    <Back />
                    <Front />
                    <Uiux />
                </div>
            </div>
        </section>
    );
}

export default Course;