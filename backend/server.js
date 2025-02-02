require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");
  next();
});

const words = [
    { id: 1, word: "Hello", translation: "Привет" },
    { id: 2, word: "Goodbye", translation: "До свидания" },
    { id: 3, word: "Thank you", translation: "Спасибо" }
];

// Эндпоинт для получения случайного слова
app.get("/word", (req, res) => {
    const randomWord = words[Math.floor(Math.random() * words.length)];
    res.json(randomWord);
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
