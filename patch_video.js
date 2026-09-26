const fs = require('fs');
let js = fs.readFileSync('script.js', 'utf8');

// Inject global variables
js = js.replace(
  'let isAudioPlaying = false;',
  'let isAudioPlaying = false;\nlet currentPlayingVideo = null;\nlet musicWasPlayingBeforeVideo = false;\n\nconst videoVisibilityObserver = new IntersectionObserver((entries) => {\n  entries.forEach(entry => {\n    if (!entry.isIntersecting) {\n      const vid = entry.target.querySelector("video");\n      if (vid && !vid.paused) {\n        vid.pause();\n      }\n    }\n  });\n}, { threshold: 0 });\n'
);

// Replace renderVideoGallery
const oldFuncRegex = /function renderVideoGallery\(\)\s*\{[\s\S]*?(?=function renderUnsaidCards\(\))/;
const newFunc = `function renderVideoGallery() {
  const container = document.getElementById("video-grid-container");
  container.innerHTML = "";

  FRIENDSHIP_CONFIG.videos.forEach((vid, idx) => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.style.setProperty("--stagger", idx);

    card.innerHTML = \`
      <div class="video-player-wrapper">
        <video preload="metadata" poster="\${vid.poster}" playsinline>
          <source src="\${vid.src}" type="video/mp4" />
        </video>
        <div class="video-overlay-play">
          <div class="play-circle">
            <svg class="icon-play" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
            <svg class="icon-pause" style="display: none;" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <rect x="6" y="4" width="4" height="16"></rect>
              <rect x="14" y="4" width="4" height="16"></rect>
            </svg>
          </div>
        </div>
      </div>
      <div class="video-caption-box">
        <h4 class="video-title">\${vid.title}</h4>
        <p class="video-desc">\${vid.desc}</p>
      </div>
    \`;

    const videoEl = card.querySelector("video");
    const overlay = card.querySelector(".video-overlay-play");
    const iconPlay = card.querySelector(".icon-play");
    const iconPause = card.querySelector(".icon-pause");

    videoVisibilityObserver.observe(card);

    videoEl.addEventListener("error", () => {
      const wrapper = card.querySelector(".video-player-wrapper");
      wrapper.innerHTML = \`
        <div class="video-placeholder-graphic">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48">
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
          <span>\${vid.title} (Add MP4 to assets/videos)</span>
        </div>
      \`;
    });

    overlay.addEventListener("click", () => {
      if (videoEl.paused) {
        videoEl.play();
      } else {
        videoEl.pause();
      }
    });
    
    videoEl.addEventListener("play", () => {
      if (currentPlayingVideo && currentPlayingVideo !== videoEl) {
        const prevVideo = currentPlayingVideo;
        currentPlayingVideo = videoEl; 
        prevVideo.pause(); 
      } else if (!currentPlayingVideo) {
        currentPlayingVideo = videoEl;
        musicWasPlayingBeforeVideo = isAudioPlaying;
        if (isAudioPlaying) {
          pauseAudio();
        }
      }
      
      card.classList.add("playing");
      iconPlay.style.display = "none";
      iconPause.style.display = "block";
    });

    videoEl.addEventListener("pause", () => {
      card.classList.remove("playing");
      iconPlay.style.display = "block";
      iconPause.style.display = "none";
      
      if (currentPlayingVideo === videoEl) {
        currentPlayingVideo = null;
        if (musicWasPlayingBeforeVideo) {
          playAudio();
        }
      }
    });

    videoEl.addEventListener("ended", () => {
      videoEl.pause();
    });

    container.appendChild(card);
  });
}

// ===================================================================
// UNSAID CARDS
// ===================================================================
`;
js = js.replace(oldFuncRegex, newFunc);
fs.writeFileSync('script.js', js);
console.log('script.js patched.');
