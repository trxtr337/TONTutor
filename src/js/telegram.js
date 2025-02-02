// Интеграция с Telegram Web Apps
const tg = window.Telegram.WebApp;

export const initTelegram = () => {
  tg.expand(); // Раскрыть на весь экран
  tg.enableClosingConfirmation(); // Запретить случайное закрытие

  return {
    user: tg.initDataUnsafe.user,
    theme: tg.colorScheme
  };
};

// Отправка данных в бота (если нужно)
export const sendDataToBot = (data) => {
  tg.sendData(JSON.stringify(data));
};