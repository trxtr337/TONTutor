require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const app = express();
app.use(express.json());
app.use(cors());

const words = [
    { id: 1, word: "Hello", translation: "Привет", category: "greetings" },
    { id: 2, word: "Goodbye", translation: "До свидания", category: "greetings" },
    { id: 3, word: "Thank you", translation: "Спасибо", category: "politeness" }
];

// Генерация токена (на будущее, когда будет авторизация)
app.post("/auth", (req, res) => {
    const user = { id: 1, name: "TestUser" };
    const token = jwt.sign(user, process.env.JWT_SECRET || "secret", { expiresIn: "7d" });
    res.json({ token });
});

// Получение случайного слова (с возможностью фильтрации по категории)
app.get("/word", (req, res) => {
    const { category } = req.query;
    let filteredWords = words;
    
    if (category) {
        filteredWords = words.filter(w => w.category === category);
    }
    
    if (filteredWords.length === 0) {
        return res.status(404).json({ error: "Нет слов в этой категории" });
    }
    
    const randomWord = filteredWords[Math.floor(Math.random() * filteredWords.length)];
    res.json(randomWord);
});

// Запуск сервера
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
