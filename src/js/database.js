// В файле js/database.js
import Dexie from 'dexie';

const db = new Dexie('TONTutorDB');
db.version(1).stores({
  lessons: '++id, title, score, completed',
  users: '++id, tgId, username'
});

export default db;