const fs = require('fs');

// Patch script.js
let js = fs.readFileSync('script.js', 'utf8');

const htmlToReplace = `        </video>
        <div class="video-overlay-play">`;

const newHtml = `        </video>
        <button class="btn-fullscreen" aria-label="Full Screen" title="Full Screen">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
          </svg>
        </button>
        <div class="video-overlay-play">`;

js = js.replace(htmlToReplace, newHtml);

const listenerToReplace = `    overlay.addEventListener("click", () => {`;

const newListener = `    const fullscreenBtn = card.querySelector(".btn-fullscreen");
    if (fullscreenBtn) {
      fullscreenBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Don't trigger play/pause overlay
        if (videoEl.requestFullscreen) {
          videoEl.requestFullscreen();
        } else if (videoEl.webkitRequestFullscreen) { /* Safari */
          videoEl.webkitRequestFullscreen();
        } else if (videoEl.msRequestFullscreen) { /* IE11 */
          videoEl.msRequestFullscreen();
        }
      });
    }

    overlay.addEventListener("click", () => {`;

js = js.replace(listenerToReplace, newListener);

fs.writeFileSync('script.js', js);
console.log('Patched script.js for fullscreen.');

// Patch style.css
const cssPatch = `

/* --- VIDEO FULLSCREEN BUTTON --- */
.btn-fullscreen {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 36px;
  height: 36px;
  background: rgba(0, 0, 0, 0.45);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease, transform 0.2s ease, background 0.2s ease;
  z-index: 10;
  padding: 0;
}

/* Show fullscreen button when hovering over the video player or when it is playing */
.video-player-wrapper:hover .btn-fullscreen,
.video-card.playing .btn-fullscreen {
  opacity: 0.85;
  pointer-events: auto;
}

.btn-fullscreen:hover {
  opacity: 1 !important;
  background: rgba(0, 0, 0, 0.7);
  transform: scale(1.05);
}
`;

fs.appendFileSync('style.css', cssPatch);
console.log('Patched style.css for fullscreen.');
