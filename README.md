<div align="center">
  <img src="https://img.shields.io/badge/Status-Active-brightgreen.svg" alt="Status">
  <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License">
  <img src="https://img.shields.io/badge/Deployment-Vercel%20%2B%20Render-informational.svg" alt="Deployment">
  <img src="https://img.shields.io/badge/AI-Google%20Gemini%201.5-orange.svg" alt="AI">
  
  <h1>🚀 NexaPrep AI</h1>
  <p><b>Next-Gen Intelligent Study Companion & Exam Preparation Ecosystem.</b></p>
  <p><i>Turn any exam syllabus into interactive visual mind-maps, voice-assisted tutoring, smart flashcards, and a hyper-focused study workflow.</i></p>

  <p>
    <a href="https://prep-nexus-ai-eight.vercel.app"><b>🌐 Live Demo App</b></a>
  </p>
</div>

---

## 🌟 Overview

**NexaPrep AI** is a comprehensive, production-grade AI study ecosystem engineered for competitive exam aspirants (UPSC, NEET, JEE, GATE, CA, and university exams). Traditional study workflows suffer from passive reading, fragmented tools (YouTube, Pomodoro apps, flashcard software), and lack of personalized doubt resolution.

NexaPrep solves this by integrating:
- **Active Recall & Spaced Repetition (SM-2)**
- **Document RAG (Retrieval-Augmented Generation)**
- **Real-Time Text-to-Speech (TTS) Voice Guidance**
- **Dynamic Curriculum Parsing & Video Mapping**
- **Gamified Consistency Tracking (Heatmaps & Streaks)**
- **Credit-Based Token Monetization Architecture**

---

## ✨ Comprehensive Features Breakdown

### 🧠 1. Core AI & RAG Capabilities
- **📄 "Chat with your PDF" (RAG Pipeline):**
  - Built an in-memory document ingestion engine utilizing `multer` and `pdf-parse`.
  - Aspirants can upload textbooks, class notes, or PYQ papers; the server extracts the raw text and dynamically injects the document context into the Gemini LLM prompt for contextual Q&A and instant summarization.
- **🤖 Socratic AI Voice Tutor:**
  - 24/7 floating study mentor utilizing browser-native **Web Speech API** for hands-free listening.
  - Implemented an **Audio Context Unlock trick** on user interaction to bypass aggressive browser autoplay security restrictions.
  - Per-message manual read-aloud buttons and Socratic instruction framing to guide students toward the answer rather than spoon-feeding solutions.
- **🗺️ Magic Revision Sheets (Mermaid.js Flowcharts):**
  - Converts complex syllabus chapters into clean, interactive conceptual mind-maps dynamically rendered in SVG.
  - Includes exam-specific fallback templates (JEE, NEET, UPSC, CA) ensuring graceful degradation under slow network conditions.
- **🖨️ One-Click Magic Sheet PDF Export:**
  - Clean `window.print()` media styles allowing students to print or save generated visual flowcharts and revision notes offline.

---

### 📚 2. Master Syllabus & Video Integration
- **🗂️ Split-Up Master Syllabus Explorer:**
  - Hierarchically organizes complex syllabuses into modular Subjects, Chapters, and Topics tailored for Indian & global competitive exams.
  - Displays individual subject mastery bars and automated completion percentages.
- **📺 Native YouTube Curated Lecture Links:**
  - AI dynamically maps each topic and subject to curated **One-Shot Lectures** and **Full Course Playlists** on YouTube with zero clutter or distraction.
- **🎯 "AI Pick" Smart Recommendation:**
  - Real-time high-yield topic recommendations on the Dashboard based on student progress.
  - One-click **"Start Studying"** action that pre-fills and routes directly to the AI Revision Sheet generator.

---

### 📈 3. Gamification, Streak & Progress Analytics
- **📊 GitHub-Style Study Heatmap:**
  - Custom responsive 52-week activity grid displaying annual study consistency and engagement intensity.
- **🔥 Dynamic Daily Streak Maintenance:**
  - Tracks consecutive daily study check-ins with automated streak counters and freeze protection tokens to motivate daily discipline.
- **🎯 Overall Syllabus Completion Percentage:**
  - Visual circular and linear progress indicators reflecting total completed modules across the student's exam curriculum.
- **⏰ Scheduled Revisions & Priority Queue:**
  - Time-spaced revision cards flagged by high-yield priorities and upcoming due dates.

---

### ⚡ 4. Active Recall & High-Retention Learning
- **🎴 Smart Flashcards (Spaced Repetition):**
  - Interactive Tinder-style swipeable 3D flashcards powered by the **SuperMemo-2 (SM-2)** algorithm for optimal memory consolidation.
- **📝 Weekly Adaptive Quizzes:**
  - Auto-generated diagnostic tests with instant scoring, feedback, and conceptual explanations.
- **📚 Integrated Markdown Student Notes:**
  - Dedicated notebook interface for saving summaries, formula sheets, and key takeaways.
- **🔍 PYQ (Previous Year Questions) Pattern Analyzer:**
  - Analyzes exam patterns, recurring themes, and weightage trends across multiple exam cycles.

---

### 🎧 5. Focus Zone & Workflow Management
- **⏱️ Integrated Pomodoro Engine:**
  - Configurable focus/break cycles to prevent mental fatigue during intense study sessions.
- **🎵 Built-In Lofi Beats Player:**
  - Embedded audio stream providing ambient study music without context-switching to third-party streaming apps.

---

### 💳 6. Token Economy & Monetization System
- **🛡️ Custom Token Middleware (`checkAiCredits`):**
  - Factory-level Express middleware enforcing dynamic credit deductions per feature:
    - `Revision Sheet Generation` = **3 Tokens**
    - `Syllabus & Topic Info Browsing` = **0 Tokens (Free)**
    - `Tutor Sessions & Chat` = **1 Token**
- **💳 Stripe Payment Gateway Integration:**
  - Pre-configured `/api/stripe/create-checkout-session` endpoint to generate secure Stripe Checkout URLs for token bundle purchases.
  - Safe local fallback and mock transaction feedback for regional testing.

---

## 🛠️ Tech Stack & System Architecture

| Layer | Technologies |
|---|---|
| **Frontend** | React 18 (Vite), Tailwind CSS v3, Framer Motion, Lucide Icons, Mermaid.js |
| **State Management** | Zustand (Global user auth, study tracking, gamification stores) |
| **Backend** | Node.js, Express.js (REST API architecture) |
| **Database** | MongoDB Atlas with Mongoose ODM |
| **Security & Middleware** | JWT (jsonwebtoken), bcryptjs, Helmet, Express Rate Limiting, CORS |
| **AI / LLM** | Google Gemini 1.5 Flash (`@google/genai`) with dual-tier fallback |
| **File Processing** | Multer (In-memory storage), `pdf-parse` |
| **Speech Engine** | Browser Web Speech API (`SpeechSynthesisUtterance`) |
| **Deployment** | Vercel (Client SPA) & Render (Node/Express API Web Service) |

---

## 🔌 Core API Endpoints

### 🔐 Authentication & Profile (`/api/users`)
- `POST /api/users/register` - Create account & issue JWT
- `POST /api/users/login` - Authenticate user & return token
- `GET /api/users/profile` - Hydrate active user profile, gamification & tokens
- `PUT /api/users/profile` - Update academic profile (exam, target date, style)

### 🤖 AI Services (`/api/ai`)
- `POST /api/ai/tutor` - Chat with Socratic AI tutor (accepts optional RAG context)
- `POST /api/ai/revision` - Generate Mermaid flowchart syntax & active recall cards
- `POST /api/ai/topic-info` - Fetch curated topic overview & subtopics (0 tokens)

### 📄 Document RAG (`/api/upload`)
- `POST /api/upload/pdf` - Multipart PDF upload, parses text buffer for AI injection

### 💳 Monetization (`/api/stripe`)
- `POST /api/stripe/create-checkout-session` - Generate Stripe checkout portal session
- `POST /api/stripe/mock-purchase` - Instant credit refill for demo/testing

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18+)
- Local MongoDB instance or free MongoDB Atlas URI
- Google Gemini API key

### Installation Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/rvidya15/prepNexus-AI.git
   cd prepNexus-AI
   ```

2. **Install dependencies for both Client and Server:**
   ```bash
   # Install server packages
   cd server && npm install
   
   # Install client packages
   cd ../client && npm install
   ```

3. **Configure Environment Variables:**
   - In `server/.env`:
     ```env
     PORT=5000
     MONGODB_URI=mongodb://127.0.0.1:27017/studyworkspace
     JWT_SECRET=your_jwt_secret_key
     GEMINI_API_KEY=your_google_gemini_api_key
     ```
   - In `client/.env` (optional for local dev):
     ```env
     VITE_API_BASE_URL=http://localhost:5000/api
     ```

4. **Run the Application:**
   ```bash
   # Terminal 1: Run Backend
   cd server
   npm run dev
   
   # Terminal 2: Run Frontend
   cd client
   npm run dev
   ```

5. Open `http://localhost:5173` in your browser!

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).
