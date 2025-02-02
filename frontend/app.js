document.addEventListener("DOMContentLoaded", function () {
  let tg = window.Telegram.WebApp;
  tg.expand(); // Разворачиваем на весь экран

  function showTranslation() {
      document.getElementById("translation").style.display = "block";
  }
  
  window.showTranslation = showTranslation;
});
