import './tutor.css';

const Tutor = () => {
  return (
    <section className="tutor-search">
      <h1 className="tutor-title">
        Репетиторы по английскому языку онлайн: прокачайте язык с опытным учителем
      </h1>

      <div className="filters-grid">
        <select>
          <option>Английский</option>
          <option>Немецкий</option>
          <option>Французский</option>
          <option>Китайский</option>
        </select>

        <div className="price-range">
          <label>Цена за урок: 3 $ - 40 $</label>
          <input type="range" min="3" max="40" />
        </div>

        <select>
          <option>Любая страна</option>
          <option>Кыргызстан</option>
          <option>Россия</option>
          <option>США</option>
          <option>Великобритания</option>
        </select>

        <select>
          <option>Любое время</option>
          <option>Утро (9:00 - 10:00)</option>
          <option>День (14:00 - 15:00)</option>
          <option>Ночь (22:00 - 23:00)</option>
        </select>

        <select>
          <option>Специальность</option>
          <option>Разговорный английский</option>
          <option>Британский английский</option>
          <option>Английский для начинающих</option>
        </select>

        <select>
          <option>Говорит на</option>
          <option>Русский</option>
          <option>Английский</option>
          <option>Французский</option>
        </select>

        <div className="toggle-block">
          <label>
            <input type="checkbox" />
            Показывать только носителей языка
          </label>
        </div>

        <div className="toggle-block">
          <label>
            <input type="checkbox" />
            Супер репетиторы — мы будем показывать репетиторов с высоким рейтингом
          </label>
          <label>
            <input type="checkbox" />
            Профессиональные репетиторы — мы будем показывать высококвалифицированных репетиторов с подтверждением сертификата
          </label>
        </div>

        <select>
          <option>Сортировать по: Нашим рекомендациям</option>
          <option>Популярности</option>
          <option>Количеству отзывов</option>
          <option>Высокому рейтингу</option>
        </select>

        <input type="text" placeholder="Искать имя или слово" />
      </div>
    </section>
  );
};

export default Tutor;

