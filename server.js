import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Basit chat endpoint
app.post("/chat", (req, res) => {
  const userMessage = req.body.message || "";

  // Şimdilik test cevabı
  const botReply = `Bot: "${userMessage}" mesajını aldım. 😊`;

  res.json({ reply: botReply });
});

// Test için GET route
app.get("/", (req, res) => {
  res.send("Bot backend çalışıyor 🚀");
});

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunda çalışıyor`);
});