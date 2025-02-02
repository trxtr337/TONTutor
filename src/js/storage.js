import db from './database.js';

// Сохранение прогресса урока
export const saveLessonProgress = async (lessonId, score) => {
  await db.progress.update(lessonId, { score, timestamp: Date.now() });
};

// Загрузка всех уроков
export const loadLessons = async () => {
  return await db.progress.toArray();
};

// Инициализация пользователя
export const initUser = async (tgUser) => {
  const existingUser = await db.users.get({ tgId: tgUser.id });
  
  if (!existingUser) {
    await db.users.add({
      tgId: tgUser.id,
      firstName: tgUser.first_name,
      lastName: tgUser.last_name || ''
    });
  }
};