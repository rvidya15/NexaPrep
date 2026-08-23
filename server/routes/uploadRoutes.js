const express = require('express');
const router = express.Router();
const multer = require('multer');
const pdfParse = require('pdf-parse');
const { protect } = require('../middleware/auth');

const upload = multer({ storage: multer.memoryStorage() });

// @route POST /api/upload/pdf
router.post('/pdf', protect, upload.single('file'), async (req, res) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'No file uploaded' });

    const pdfData = await pdfParse(req.file.buffer);
    const text = pdfData.text;

    // Return the parsed text to the frontend so it can be injected into the AI context
    // We limit it to ~20,000 characters to ensure it easily fits within LLM context windows
    res.json({ text: text.substring(0, 20000) }); 
  } catch (err) {
    console.error("PDF Parsing Error:", err);
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
