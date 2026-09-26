# 🎂 Premium Interactive Birthday Website for Lachu

An emotional, cinematic, mobile-first interactive friendship journey built specifically for **Lachu** (September 28, 2004).

---

## 🌟 Highlights & Features

- **Editorial & Cinematic Design System**: Google Fonts (*Cormorant Garamond* & *Plus Jakarta Sans*), warm ivory and dark charcoal contrast, subtle SVG noise texture, and glassmorphism.
- **Mobile-First Responsiveness**: Tailored for mobile screens (320px–430px+) up to 4K desktop viewports. Comfortable 48px+ touch targets, vertical swipe stacks, and smooth scroll animations.
- **Dynamic Content Engine**: Easy-to-edit JavaScript configuration (`FRIENDSHIP_CONFIG` in `script.js`) for photos, videos, timeline events, personal reflections, and personal letter.
- **Media Fallbacks**: Built-in SVG data URI generators mean the site looks stunning right out of the box even before personal media files are uploaded.
- **Interactive Storyline Sections**:
  1. **Intro Screen**: Dark curiosity sequence with typing text reveal.
  2. **Timeline ("How It Started")**: Interactive progression from early school days to present best-friend status.
  3. **Our Memories (Photo Gallery)**: Clean polaroid grid with full-screen lightbox modal and uncropped photo support.
  4. **Our Videos (Motion Memories)**: Mobile-optimized HTML5 video clips with custom play overlays.
  5. **Things I Don't Say Out Loud Often Enough**: Micro-card interactive flip notes.
  6. **Interactive Question Section**: Special question reveal with personalized micro-responses.
  7. **Why You Are Special To Me**: 9 reflection cards and "Something I Want You To Know" ("I am genuinely proud of you...").
  8. **To the Person Who Is My Personal Diary**: Dedicated paper letter section about her being your personal diary and unpaid therapist.
  9. **3D Physical Envelope & Letter**: Envelope flap flip animation revealing the personal letter modal.
  10. **Final Birthday Reveal & Canvas Confetti**: Emotional payoff with customizable gold particle burst celebration.
  11. **Floating Music Player**: Discreet bottom widget with ambient audio support.

---

## 📁 Directory Structure

```
portfolio/
├── index.html                  # Main website semantic structure
├── style.css                   # Responsive layout, keyframes, theme variables
├── script.js                   # Interactive logic & FRIENDSHIP_CONFIG content block
├── README.md                   # This documentation guide
└── assets/                     # Media folder
    ├── images/                 # Photo gallery images (memory-01.jpg, etc.)
    ├── videos/                 # Video clips (memory-01.mp4, etc.)
    └── music/                  # Friendship audio track (friendship-song.mp3)
```

---

## 🛠️ Personalization Guide

All personal text, dates, memories, photos, videos, reflections, and letter copy can be customized directly in `script.js`.

Open `script.js` and locate the top section:

```javascript
// ===================================================================
// PERSONAL CONTENT — EDIT THIS SECTION TO CUSTOMIZE YOUR WEBSITE
// ===================================================================
const FRIENDSHIP_CONFIG = {
  friendName: "Lachu",
  birthDate: "2004-09-28",
  senderName: "Anijith",
  ...
};
```

### 1. Timeline Images (School Days & Present & Beyond)
- Place your images in `assets/images/` (e.g., `timeline-lkg.jpg` and `timeline-present.jpg`).
- In `script.js`, update the `timeline` array entries:
  ```javascript
  {
    year: "School Days",
    title: "Where It All Began",
    desc: "...",
    image: "assets/images/timeline-lkg.jpg",
    imageCaption: "Where it all started — School Days 🎒"
  },
  {
    year: "Present & Beyond",
    title: "My Person & Unpaid Therapist",
    desc: "...",
    image: "assets/images/timeline-present.jpg",
    imageCaption: "Us Today — Still my person 🤍"
  }
  ```

### 2. Adding Photos (Gallery)
- Place your image files inside `assets/images/` (e.g. `memory-01.jpg`).
- In `script.js`, update the `photos` array:
  ```javascript
  {
    id: "photo-1",
    title: "Your Title Here",
    caption: "Your caption story...",
    date: "Date or Label",
    src: "assets/images/memory-01.jpg"
  }
  ```

### 3. Adding Videos
- Place MP4 video files inside `assets/videos/` (e.g. `memory-01.mp4`).
- Update the `videos` array in `script.js`:
  ```javascript
  {
    id: "vid-1",
    title: "Video Title",
    desc: "Short description...",
    src: "assets/videos/memory-01.mp4",
    poster: "assets/images/video-poster-01.jpg"
  }
  ```

### 4. Adding Background Music
- Place your audio file in `assets/music/friendship-song.mp3`.
- Set `music.title` in `script.js` to your song title.

### 5. Customizing the Letter
- Edit `letter.body` in `script.js` with your personal handwritten letter paragraphs.

---

## 🚀 How to Run Locally

1. Simply double-click `index.html` in your file explorer to open it in Google Chrome, Safari, Edge, or Firefox.
2. Or use VS Code's **Live Server** extension.

---

## 🌐 How to Host on GitHub Pages (Free)

1. Create a new GitHub repository (e.g., `lachu-birthday`).
2. Push all files (`index.html`, `style.css`, `script.js`, `README.md`, and `assets/`) to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit for Lachu's Birthday Website"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/lachu-birthday.git
   git push -u origin main
   ```
3. On GitHub, go to your repository **Settings** → **Pages**.
4. Under **Build and deployment** → **Branch**, select `main` and `/ (root)`.
5. Click **Save**.
6. After a minute, GitHub will give you a public link (e.g. `https://YOUR_USERNAME.github.io/lachu-birthday/`) that Lachu can open on her phone!

---

## ❤️ Credits
Crafted with heart & memories for Lachu.
