// Настройка базы данных
const db = new Dexie('TONTutorDB');
db.version(1).stores({
  progress: '++id, lessonId, score, timestamp',
  settings: '++id, theme, language'
});

// Сохранение прогресса урока
export const saveProgress = async (lessonId, score) => {
  await db.progress.add({
    lessonId,
    score,
    timestamp: new Date().getTime()
  });
};

// Загрузка всех уроков
export const loadProgress = async () => {
  return await db.progress.toArray();
};