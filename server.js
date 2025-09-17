const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test için ana sayfa
app.get("/", (req, res) => {
  res.send("Bot backend çalışıyor 🚀");
});

// Chat endpoint
app.post("/chat", (req, res) => {
  const userMessage = req.body.message || "";
  let reply = "Seninle konuşmak çok güzel Elif 💜";

  if (userMessage.toLowerCase().includes("nasılsın")) {
    reply = "Ben çok iyiyim Elif 🌹 sen nasılsın?";
  } else if (userMessage.toLowerCase().includes("özledim")) {
    reply = "Ben de seni çok özledim 💜";
  }

  res.json({ reply });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`Server ${PORT} portunda çalışıyor 🚀`));