// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

// Получение данных пользователя
export const initTelegram = () => {
  tg.expand(); // Раскрыть на весь экран
  const user = tg.initDataUnsafe.user;
  
  // Покажем имя пользователя
  document.getElementById('username').textContent = user.first_name || 'Аноним';
  
  return user;
};