import { initTelegram } from './telegram.js';
import { saveProgress, loadProgress } from './storage.js';

document.addEventListener('DOMContentLoaded', async () => {
  // Инициализация Telegram
  const user = initTelegram();
  
  // Загрузка прогресса
  const progress = await loadProgress();
  renderLessons(progress);
});

function renderLessons(progress) {
  const container = document.getElementById('lessons');
  // Пример: отрисовка уроков
  container.innerHTML = progress.map(lesson => `
    <div class="lesson-item">
      Урок ${lesson.lessonId}: ${lesson.score} баллов
    </div>
  `).join('');
}