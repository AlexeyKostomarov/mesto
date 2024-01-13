const directorsList = document.querySelector(".directors");
const directorTemplate = document.querySelector(".director-template").content;

const directors = [
  {
    name: "Стивен Спилберг",
    career: "Продюсер, Режиссер, Актер, Сценарист, Монтажер",
    films:
      "https://datalens.yandex/vwlqd2afsifoq?f3d80b92-5f21-40fa-b8d8-7255e038d045=22260&c8e5e20f-9329-4545-8550-b096c5b41d16=producer",
    top_rated_film: "Список Шиндлера",
  },
  {
    name: "Кристофер Нолан",
    career:
      "Сценарист, Продюсер, Режиссер, Оператор, Монтажер, Актер, Композитор",
    films:
      "https://datalens.yandex/vwlqd2afsifoq?f3d80b92-5f21-40fa-b8d8-7255e038d045=41477&c8e5e20f-9329-4545-8550-b096c5b41d16=writer",
    top_rated_film: "Начало",
  },
  {
    name: "Мартин Мак",
    career: "Сценарист, Режиссер, Продюсер",
    films:
      "https://datalens.yandex/vwlqd2afsifoq?f3d80b92-5f21-40fa-b8d8-7255e038d045=671251&c8e5e20f-9329-4545-8550-b096c5b41d16=writer",
    top_rated_film: "Три билборда на границе Эббинга, Миссури",
  },
  {
    name: "Алексей Балабанов",
    career: "Режиссер, Сценарист, Актер, Продюсер",
    films:
      "https://datalens.yandex/vwlqd2afsifoq?f3d80b92-5f21-40fa-b8d8-7255e038d045=64249&c8e5e20f-9329-4545-8550-b096c5b41d16=director",
    top_rated_film: "Брат",
  },
  {
    name: "Питер Фаррелли",
    career: "Продюсер, Режиссер, Сценарист, Актер",
    films:
      "https://datalens.yandex/vwlqd2afsifoq?f3d80b92-5f21-40fa-b8d8-7255e038d045=6139&c8e5e20f-9329-4545-8550-b096c5b41d16=producer",
    top_rated_film: "Зеленая книга",
  },
  {
    name: "Юрий Быков",
    career: "Актер, Режиссер, Сценарист, Композитор, Монтажер, Продюсер",
    films:
      "https://datalens.yandex/vwlqd2afsifoq?f3d80b92-5f21-40fa-b8d8-7255e038d045=1762044&c8e5e20f-9329-4545-8550-b096c5b41d16=actor",
    top_rated_film: "Дурак",
  },
  {
    name: "Жан-Марк Валле",
    career: "Режиссер, Продюсер, Монтажер, Актер, Сценарист",
    films:
      "https://datalens.yandex/vwlqd2afsifoq?f3d80b92-5f21-40fa-b8d8-7255e038d045=58767&c8e5e20f-9329-4545-8550-b096c5b41d16=director",
    top_rated_film: "Далласский клуб покупателей",
  },
];

directors.forEach(function (item) {
  const directorElement = directorTemplate.cloneNode(true);
  directorElement.querySelector(".directors__name").textContent = item["name"];
});
