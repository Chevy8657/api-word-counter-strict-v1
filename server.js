import express from "express";

const app = express();
app.use(express.json());

// Health check
app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});

// Strict word counter
app.post("/v1/word-count", (req, res) => {
  const { text } = req.body;

  if (typeof text !== "string") {
    return res.status(400).json({
      error: "Input must be a string field named 'text'"
    });
  }

  const words = text
    .trim()
    .split(/\s+/)
    .filter(Boolean);

  res.json({
    word_count: words.length
  });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
