import './tutor.css'

const Tutor = () => {
  return (
    <section className="tutor-search">
      <h1 className="tutor-title">
        Репетиторы по английскому языку онлайн: прокачайте язык с опытным учителем
      </h1>
      <div className="filters-grid">
        <select>
          <option>Хочу изучить</option>
          <option>Английский</option>
          <option>Немецкий</option>
          <option>Французский</option>
          <option>Испанский</option>
          <option>Программирование</option>
          <option>Математика</option>
          <option>Анология</option>
        </select>

        <select>
          <option>Любая цена</option>
          <option>3 $ - 40+ $</option>
          <option>3 $ - 10 $</option>
          <option>10 $ - 20 $</option>
          <option>20 $ - 40 $</option>
          <option>40 $+</option>
        </select>

        <select>
          <option>Любая страна</option>
          <option>Россия</option>
          <option>Кыргызстан</option>
          <option>США</option>
          <option>Филиппины</option>
          <option>Великобритания</option>
        </select>

        <select>
          <option>Любое время</option>
          <option>Утро</option>
          <option>День</option>
          <option>Вечер</option>
          <option>Ночь</option>
        </select>

        <select>
          <option>Специальность</option>
          <option>Разговорный английский</option>
          <option>Подготовка к экзаменам</option>
          <option>Бизнес английский</option>
        </select>

        <select>
          <option>Говорит на</option>
          <option>Русский</option>
          <option>Кыргызский</option>
          <option>Английский</option>

        </select>

        <select>
          <option>Носитель языка</option>
          <option>Да</option>
          <option>Нет</option>
        </select>

        <select>
          <option>Категории преподавателей</option>
          <option>Профессиональные преподаватели</option>
          <option>Частные учителя</option>
        </select>

        <select>
          <option>Сортировать по: Нашим рекомендациям</option>
          <option>По рейтингу</option>
          <option>По цене (сначала дешевые)</option>
          <option>По цене (сначала дорогие)</option>
          <option>По отзывам</option>
        </select>

        <select>
          <option>Опыт преподавания</option>
          <option>1–3 года</option>
          <option>3–5 лет</option>
          <option>5+ лет</option>
        </select>

        <input type="text" placeholder="Искать по имени или ключевому слову: John, IELTS, USA..." />

      </div>

    </section>
  );
}

export default Tutor;

