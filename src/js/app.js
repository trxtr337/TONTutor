import { initTelegram, getTelegramUser } from './telegram.js';
import { saveProgress, loadProgress } from './storage.js';
import db from './database.js';
import { renderLesson } from './ui.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Получаем пользователя Telegram
  const user = getTelegramUser();

  // Сохраняем пользователя в IndexedDB (если его ещё нет)
  await db.users.put({ tgId: user.id, username: user.username });

  // Загружаем прогресс
  const progress = await loadProgress();

  // Загружаем уроки из IndexedDB
  const lessons = await db.lessons.toArray();

  // Рендер уроков, объединяя данные о прогрессе
  renderLessons(lessons, progress);
});

function renderLessons(lessons, progress) {
  const container = document.getElementById('lessons');
  container.innerHTML = lessons.map(lesson => {
    const progressData = progress.find(p => p.lessonId === lesson.id) || { score: 0 };
    return renderLesson({ ...lesson, score: progressData.score });
  }).join('');
}
