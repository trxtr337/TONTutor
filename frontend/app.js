document.addEventListener("DOMContentLoaded", () => {
  const wordElement = document.getElementById("word");
  const translationElement = document.getElementById("translation");

  function fetchWord() {
      fetch("http://localhost:3000/word") // Замени на свой сервер при деплое
          .then(response => response.json())
          .then(data => {
              wordElement.textContent = data.word;
              translationElement.textContent = data.translation;
              translationElement.style.display = "none"; // Прячем перевод
              console.log("Получено слово:", data.word); // Проверка
          })
          .catch(error => console.error("Ошибка загрузки слова:", error));
  }

  window.showTranslation = function () {
      translationElement.style.display = "block"; // Показываем перевод
  };

  window.fetchWord = fetchWord; // Делаем функцию доступной в HTML

  fetchWord(); // Загружаем слово при запуске страницы
});
