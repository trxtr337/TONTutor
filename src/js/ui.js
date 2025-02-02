export const renderLesson = (lesson) => {
    return `
      <div class="lesson-card">
        <h3>${lesson.title}</h3>
        <button onclick="startLesson(${lesson.id})">Начать</button>
      </div>
    `;
  };