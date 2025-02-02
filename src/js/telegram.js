// Инициализация Telegram Web App
const tg = window.Telegram.WebApp;

//Синхронизация с данными пользователя Telegram
export const getTelegramUser = () => {
    const tg = window.Telegram.WebApp;
    tg.expand();
    return tg.initDataUnsafe.user;
  };


// Получение данных пользователя
export const initTelegram = () => {
  tg.expand(); // Раскрыть на весь экран
  const user = tg.initDataUnsafe.user;
  
  // Покажем имя пользователя
  document.getElementById('username').textContent = user.first_name || 'Аноним';
  
  return user;
};