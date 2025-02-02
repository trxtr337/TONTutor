// Инициализация IndexedDB через Dexie
const db = new Dexie('TONTutorDB');

db.version(1).stores({
  users: '++id, tgId, firstName, lastName',
  progress: '++id, lessonId, score, timestamp',
  settings: '++id, theme, soundEnabled'
});

// Сиды для уроков (пример данных)
db.on('populate', async () => {
  await db.progress.bulkAdd([
    { lessonId: 1, score: 0, timestamp: Date.now() },
    { lessonId: 2, score: 0, timestamp: Date.now() }
  ]);
});

export default db;