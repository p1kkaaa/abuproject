import './card.css'
import teach from './../../img/teacher/adelya.jpg'

const Card = () => {
    return ( 
        <div className="card">
      <img src={teach} alt="Tutor" className="avatar" />
      <div className="card-info">
        <div className="top-info">
          <h2>Michelle C.</h2>
          <div className="badges">
            <span className="badge professional">Профессионал</span>
            <span className="badge super">Супер-репетитор</span>
          </div>
        </div>

        <ul className="details">
          <li>Английский</li>
          <li>6 активных учеников · 75 уроков</li>
          <li>Языки: Английский (Родной язык), Испанский…</li>
        </ul>

        <p className="description">
          Репетитор английского языка с сертификатом TEFL | Специализируюсь на бизнес- и общем английском | Общий опыт
        </p>

        <div className="bottom">
          <div className="rating-price">
            <span className="stars">★ 5</span>
            <span className="reviews">4 отзыва</span>
            <span className="price">
              <span className="old-price">30 $</span>
              <span className="new-price">21 $</span> / 50-мин урок
            </span>
          </div>
          <button className="book-btn">Забронировать пробный урок</button>
          <button className="msg-btn">Отправить сообщение</button>
        </div>
      </div>
    </div>
     );
}
 
export default Card;