import { initTelegram } from './telegram.js';
import { initUser, saveLessonProgress, loadLessons } from './storage.js';
import { renderLessons, updateProgress } from './ui.js';
import db from './database.js';

// Инициализация приложения
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // 1. Подключение к Telegram
    const { user, theme } = initTelegram();
    document.getElementById('username').textContent = user.first_name;
    
    // 2. Инициализация пользователя в БД
    await initUser(user);

    // 3. Загрузка уроков
    const lessons = await loadLessons();
    renderLessons(lessons);

    // 4. Обновление прогресса
    const totalScore = lessons.reduce((acc, lesson) => acc + lesson.score, 0);
    const averageProgress = (totalScore / (lessons.length * 100)) * 100;
    updateProgress(averageProgress);

    // 5. Обработчики событий
    document.querySelectorAll('.start-lesson').forEach(button => {
      button.addEventListener('click', async (e) => {
        const lessonId = e.target.closest('.lesson-card').dataset.lessonId;
        await saveLessonProgress(lessonId, 10); // Пример: +10% за урок
        window.location.reload(); // Обновить интерфейс
      });
    });

  } catch (error) {
    console.error('Ошибка инициализации:', error);
    Telegram.WebApp.showAlert('Произошла ошибка. Пожалуйста, перезагрузите приложение.');
  }
});