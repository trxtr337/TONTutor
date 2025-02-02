// Отрисовка уроков
export const renderLessons = (lessons) => {
    const container = document.getElementById('lessons-container');
    container.innerHTML = lessons.map(lesson => `
      <div class="lesson-card" data-lesson-id="${lesson.lessonId}">
        <h3>Урок ${lesson.lessonId}</h3>
        <p>Прогресс: ${lesson.score}%</p>
        <button class="start-lesson">Начать</button>
      </div>
    `).join('');
  };
  
  // Обновление прогресс-бара
  export const updateProgress = (percentage) => {
    const progressFill = document.getElementById('progress-fill');
    progressFill.style.width = `${percentage}%`;
  };