document.addEventListener("DOMContentLoaded", () => {
  const wordElement = document.getElementById("word");
  const translationElement = document.getElementById("translation");

  function fetchWord() {
      fetch("http://localhost:3000/word") // Если сервер локально, используй localhost
          .then(response => response.json())
          .then(data => {
              wordElement.textContent = data.word;
              translationElement.textContent = data.translation;
              translationElement.style.display = "none"; // Прячем перевод
          })
          .catch(error => console.error("Ошибка загрузки слова:", error));
  }

  window.showTranslation = function () {
      translationElement.style.display = "block"; // Показываем перевод
  };

  fetchWord(); // Загружаем слово при запуске страницы
  console.log("app.js загружен!");
});
