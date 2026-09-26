/* ===================================================================
   LACHU'S PREMIUM INTERACTIVE BIRTHDAY WEBSITE — SCRIPT.JS
   Complete interactive engine, custom data store, media handling,
   and particle celebration system.
   =================================================================== */

// ===================================================================
// PERSONAL CONTENT — EDIT THIS SECTION TO CUSTOMIZE YOUR WEBSITE
// ===================================================================
const FRIENDSHIP_CONFIG = {
  // Friend Details
  friendName: "Lachu",
  birthDate: "2004-09-28",
  senderName: "Anijith",

  // Music Configuration
  music: {
    title: "",
    src: "assets/music/audio.mp3",
    autoPlayOnStart: true
  },

  // 1. Timeline Events ("How It Started")
  timeline: [
    {
      year: "School Days",
      title: "Where It All Began",
      desc: "We were in the same classroom, barely knowing that years down the line, we’d become each other's go-to person. We weren't instant best friends back then, but the seeds were planted.",
      image: "assets/images/lkg.jpeg",
      imageCaption: "Where it all started — School Days 🎒",
      fallbackColor: "#7A1C30"
    },
    {
      year: "Growing Up Years",
      title: "Quiet Connections",
      desc: "We were in the same class and knew each other for quite some time, but we weren't really close or talking much. Looking back, it's funny how someone who was once just a familiar face became such an important part of my life."
    },
    {
      year: "The Shift",
      title: "Becoming Real Friends",
      desc: "Somewhere along the line, talks became longer, secrets became shared, and we stopped being just classmates. You started becoming someone I genuinely relied on."
    },
    {
      year: "Present & Beyond",
      title: "My Person & Unpaid Therapist",
      desc: "Now, you are the first person I want to tell things to, my personal diary, someone who feels safe and irreplaceable. Here’s to every year that led to this.",
      image: "assets/images/present.jpeg",
      imageCaption: "Us Today — Still my person 🤍",
      fallbackColor: "#7A1C30"
    }
  ],

  // 2. Photo Gallery Snapshots
  photos: [
    {
      id: "photo-1",
      title: "The First Selfie",
      caption: "Don't ask me what was going on here. I genuinely don't remember. 😭",
      date: "#Unexpected",
      src: "assets/images/pic1.jpeg",
      fallbackColor: "#6B2D5C"
    },
    {
      id: "photo-2",
      title: "For the plot",
      caption: "Some decisions are better left unexplained. 😂",
      date: "It made sense at that time",
      src: "assets/images/pic2.jpeg",
      fallbackColor: "#8B4513"
    },
    {
      id: "photo-3",
      title: "Meanwhile...",
      caption: "Nothing particularly important. Still somehow worth remembering.",
      date: "Life was happening",
      src: "assets/images/pic3.jpeg",
      fallbackColor: "#2F4F4F"
    },
    {
      id: "photo-4",
      title: "This exists",
      caption: "No deep meaning behind this one. I just like having it here. 🫠",
      date: "And thats enough",
      src: "assets/images/pic4.jpeg",
      fallbackColor: "#4B0082"
    },
    {
      id: "photo-5",
      title: "Moving on",
      caption: "Looking back at how far we've come since the early school days.",
      date: "Somewhere in between ✨",
      src: "assets/images/pic5.jpeg",
      fallbackColor: "#5F9EA0"
    },
    {
      id: "photo-6",
      title: "Somewhere along the way",
      caption: "No particular moment. No proper explanation. It just happened. 🫂",
      date: "Things just became like this.",
      src: "assets/images/pic6.jpeg",
      fallbackColor: "#D2691E"
    }
  ],

  // 3. Motion Memories (Videos)
  videos: [
    {
      id: "vid-1",
      title: "The Person Who Means So Much 🤍",
      desc: "A little reminder of what you mean to me and why having you as my best friend is something I'll always be grateful for.",
      src: "assets/videos/video1.mp4",
      poster: "assets/images/poster1.jpeg"
    },
    {
      id: "vid-2",
      title: "Home Is A Person🫂",
      desc: "Some people just make you feel comfortable being yourself. For me, that's you. Somehow, being around you just feels like home.❤️‍🩹",
      src: "assets/videos/video2.mp4",
      poster: "assets/images/poster2.jpeg"
    }
  ],

  // 4. "Things I Never Say Enough" Cards
  unsaid: [
    {
      num: "01",
      headline: "You're my personal diary.",
      note: "Whenever something happens—good, bad, or utterly chaotic—you are literally the first person I open WhatsApp or call to tell. I don't even have to filter my thoughts."
    },
    {
      num: "02",
      headline: "The unpaid therapist.",
      note: "Thank you for listening to my endless rants, overthinking sessions, and life updates without judging me. You have an incredible way of making things feel manageable."
    },
    {
      num: "03",
      headline: "A genuine safe space.",
      note: "Around you, I never feel the need to pretend or put on a mask. That kind of comfort and emotional safety is extremely rare, and I treasure it."
    },
    {
      num: "04",
      headline: "I am genuinely proud of you.",
      note: "I see the way you handle challenges, the kindness you extend to people, and how much you grow every year. You deserve to be celebrated every single day."
    }
  ],

  // 5. Why You Are Special To Me Cards
  specialToMe: [
    "You listen without making me feel judged.",
    "I can tell you almost anything.",
    "You are one of the first people I want to tell when something happens.",
    "You make difficult days feel a little easier.",
    "You understand things I don't always know how to explain.",
    "You have seen different versions of me and still stayed.",
    "Our friendship feels comfortable and genuine.",
    "I can be completely myself around you.",
    "Even ordinary moments with you have become memories I value."
  ],

  // ===============================
  // FRIENDSHIP QUESTION
  // ===============================
  friendshipQuestion: {
    questionTitle: "One little question before you continue...",
    questionSubtitle: "Who is the first person I run to tell when something happens in my life?",
    placeholder: "Type your answer...",

    // Normalized answer mapping -> personalized micro-responses
    answers: {
      "lachu": "Obviously. You knew this one. 😂",
      "you": "Exactly. That's who I meant. 🤍",
      "me": "Technically correct... but you know what I meant. 😭",
      "i": "Technically correct... but you know what I meant. 😭",
      "sreelekshmi": "Okay, I'll allow it. 😌"
    },

    defaultSuccessMessage: "You got it. 🤍",
    followUpMessage: "And honestly... that probably says more about our friendship than anything else.",

    playfulError: "Hmm... think about it. 👀\nWho gets to hear all my random life updates first?",

    hiddenContent: {
      title: "Okay... you unlocked this.",
      body: `<p>You've always been the very first person I turn to—whether it's good news, crazy stories, or random late-night thoughts.</p><p>Having someone in my life who listens without judgment is something I'll never take for granted.</p>`,
      mediaText: `
  <img 
    src="assets/images/lachu.jpeg" 
    alt="Lachu"
    style="width:100%; max-width:600px; height:auto; display:block; margin:0 auto; border-radius:12px;"
  >
`
    }
  },

  // 9. Personal Digital Envelope Letter
  letter: {
    date: "September 28, 2026",
    salutation: "Dear Lachu,",
    body: 
`
      
      
      <p>I don't really know how to explain this properly, but there are some things I just wanted you to know.</p>
      
      <p>You have become such a big part of my life that I genuinely can't imagine my everyday life without you in it.</p>
      
      <p>You're the first person I want to tell when something happens. Whether it's something exciting, something stupid, something that's bothering me, or just some completely random thing that happened during my day. Somehow, you're always the person I want to talk to.</p>
      
      <p>And I don't think you realise how much that means to me.</p>
      
      <p>You make me feel loved. You make me feel less alone. You have given me so many reasons to smile, sometimes without even knowing that you did.</p>
      
      <p>I can talk to you about almost anything without thinking too much about how it sounds. I can rant, overthink, complain, laugh about something stupid, or just say whatever is in my head. And somehow, with you, it always feels easy.</p>
      
      <p>That's probably why I call you my personal diary and my unpaid therapist. 😭</p>
      
      <p>But honestly, you're much more than that.</p>
      
      <p>You feel like home to me.</p>
      
      <p>I don't know how to explain what that actually means, but you're one of the few people around whom I can just be myself. I don't have to make things sound better or pretend I'm okay when I'm not.</p>
      
      <p>And if I ever got the chance to choose my best friend again, in another life or another universe or whatever, I'd still choose you. 🫂❤️‍🩹</p>
      
      <p>I really hope we stay like this for a very, very long time. I hope we keep having random conversations, laughing about stupid things, telling each other everything, and being there for each other through whatever comes next.</p>
      
      <p>I'm genuinely lucky to have you, Lachu.</p>
      
      <p>And no matter how many times I say it, I don't think I'll ever be able to properly explain how much you mean to me.</p>
      
      <p>I love you with my whole heart. ❤️‍🩹🫶🏻</p>
      
      <p>Happy birthday to my most favourite person.</p>
    `,
    signature: "Anijith"


  },

  // 10. Final Reveal Quotes
  finalReveal: {
    quote1: "Here's to another year of you being you.",
    quote2: "Keep becoming the person you want to be.",
    quote3: "Happy Birthday, my precious one."
  }
};

// ===================================================================
// APPLICATION ENGINE & INTERACTIVE LOGIC
// ===================================================================
document.addEventListener("DOMContentLoaded", () => {
  initAudioEngine();
  initIntroSequence();
  renderTimeline();
  renderPhotoGallery();
  renderVideoGallery();
  renderUnsaidCards();
  initFriendshipQuestion();
  renderSpecialToMeSection();
  initEnvelopeAndLetter();
  initFinalReveal();
  initConfettiCanvas();
  // Motion system — runs after all content is rendered
  initScrollReveal();
  initCustomCursor();
  initParallaxLayers();
});

// ===================================================================
// AUDIO ENGINE
// ===================================================================
let audioContext, bgAudio;
let isAudioPlaying = false;
let currentPlayingVideo = null;
let musicWasPlayingBeforeVideo = false;

const videoVisibilityObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      const vid = entry.target.querySelector("video");
      if (vid && !vid.paused) {
        vid.pause();
      }
    }
  });
}, { threshold: 0 });


function initAudioEngine() {
  bgAudio = document.getElementById("bg-music");
  
  const musicWidget = document.getElementById("music-widget");
  const musicToggle = document.getElementById("music-toggle");
  const musicTitle = document.getElementById("music-title");

  if (FRIENDSHIP_CONFIG.music.title) {
    musicTitle.textContent = FRIENDSHIP_CONFIG.music.title;
  }

  musicToggle.addEventListener("click", () => {
    if (isAudioPlaying) {
      pauseAudio();
    } else {
      playAudio();
    }
  });

  // Handle missing audio file gracefully
  bgAudio.addEventListener("error", () => {
    console.log("Audio file not found at " + FRIENDSHIP_CONFIG.music.src + ". Using silent mode fallback.");
    musicTitle.textContent = "Music Mode";
  });

  bgAudio.addEventListener("play", () => {
    isAudioPlaying = true;
    const widget = document.getElementById("music-widget");
    if (widget) widget.classList.add("playing");
  });

  bgAudio.addEventListener("pause", () => {
    isAudioPlaying = false;
    const widget = document.getElementById("music-widget");
    if (widget) widget.classList.remove("playing");
  });

  // Attempt to play immediately on page load
  if (FRIENDSHIP_CONFIG.music.autoPlayOnStart) {
    playAudio();
  }
}

function playAudio() {
  if (!bgAudio) return;
  bgAudio.play().catch(err => {
    console.log("Autoplay prevented or missing media file:", err);
  });
}

function pauseAudio() {
  if (!bgAudio) return;
  bgAudio.pause();
}

// ===================================================================
// INTRO SEQUENCE & CURIOSITY TRIGGER
// ===================================================================
function initIntroSequence() {
  const btnStart = document.getElementById("btn-start-journey");

  // Trigger the intro section reveal immediately on load
  // (uses CSS --delay variables already set in HTML for staggered entrance)
  const introRevealEls = document.querySelectorAll(
    "#sec-intro .reveal-up, #sec-intro .reveal-fade"
  );
  // Small rAF to ensure paint happens first
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      introRevealEls.forEach(el => el.classList.add("is-visible"));
    });
  });

  btnStart.addEventListener("click", () => {
    // Unlock body scroll
    document.body.classList.remove("is-locked");

    // Start music if configured
    if (FRIENDSHIP_CONFIG.music.autoPlayOnStart) {
      playAudio();
    }

    // Scroll smoothly to prologue section
    const prologue = document.getElementById("sec-prologue");
    prologue.scrollIntoView({ behavior: "smooth" });
  });
}

// ===================================================================
// RENDER TIMELINE
// ===================================================================
function renderTimeline() {
  const container = document.getElementById("timeline-list");
  container.innerHTML = "";

  FRIENDSHIP_CONFIG.timeline.forEach((item, idx) => {
    const el = document.createElement("div");
    el.className = "timeline-item reveal-up";
    el.style.setProperty("--stagger", idx);

    let imgMarkup = "";
    if (item.image) {
      const svgFallback = createSvgPlaceholder("Photo Placeholder", item.fallbackColor || "#7A1C30");
      imgMarkup = `
        <div class="timeline-polaroid-card">
          <div class="timeline-polaroid-img-box">
            <img src="${item.image}" alt="${item.title}" loading="lazy" onerror="this.onerror=null; this.src='${svgFallback}';" />
          </div>
          ${item.imageCaption ? `<div class="timeline-polaroid-caption">${item.imageCaption}</div>` : ''}
        </div>
      `;
    }

    el.innerHTML = `
      <div class="timeline-dot"></div>
      <div class="timeline-card">
        <span class="timeline-year">${item.year}</span>
        <h3 class="timeline-title">${item.title}</h3>
        <p class="timeline-desc">${item.desc}</p>
        ${imgMarkup}
      </div>
    `;
    container.appendChild(el);
  });
}

// ===================================================================
// RENDER PHOTO GALLERY & LIGHTBOX
// ===================================================================
function renderPhotoGallery() {
  const grid = document.getElementById("photo-gallery-grid");
  if (!grid) return;
  grid.innerHTML = "";

  const createPhotoCard = (photo, idx) => {
    const card = document.createElement("div");
    card.className = "polaroid-card";
    card.style.setProperty("--stagger", idx);

    // Generate fallback SVG placeholder data URI
    const svgFallback = createSvgPlaceholder(photo.title, photo.fallbackColor || "#7A1C30");

    card.innerHTML = `
      <div class="polaroid-img-box">
        <img src="${photo.src}" alt="${photo.title}" loading="lazy" onerror="this.onerror=null; this.src='${svgFallback}';" />
      </div>
      <div class="polaroid-caption">
        <h4 class="polaroid-title">${photo.title}</h4>
        <span class="polaroid-date">${photo.date}</span>
      </div>
    `;

    card.addEventListener("click", () => openLightbox(photo, svgFallback));
    return card;
  };

  FRIENDSHIP_CONFIG.photos.forEach((photo, idx) => {
    grid.appendChild(createPhotoCard(photo, idx));
  });

  // Lightbox bindings
  const lightbox = document.getElementById("photo-lightbox");
  const closeBtn = document.getElementById("lightbox-close");
  const backdrop = document.getElementById("lightbox-backdrop");

  if (lightbox && closeBtn && backdrop) {
    const closeLightbox = () => lightbox.classList.remove("active");
    closeBtn.addEventListener("click", closeLightbox);
    backdrop.addEventListener("click", closeLightbox);
  }
}

function openLightbox(photo, svgFallback) {
  const lightbox = document.getElementById("photo-lightbox");
  const img = document.getElementById("lightbox-img");
  const title = document.getElementById("lightbox-title");
  const desc = document.getElementById("lightbox-desc");
  const date = document.getElementById("lightbox-date");

  img.src = photo.src;
  img.onerror = () => { img.src = svgFallback; };
  title.textContent = photo.title;
  desc.textContent = photo.caption;
  date.textContent = photo.date;

  lightbox.classList.add("active");
}

function createSvgPlaceholder(text, color) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450"><rect width="600" height="450" fill="${color}"/><text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="28" fill="#FFFFFF" font-weight="bold">${text}</text><text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="rgba(255,255,255,0.7)">[Photo Placeholder]</text></svg>`;
  return 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
}

// ===================================================================
// RENDER VIDEO GALLERY
// ===================================================================
function renderVideoGallery() {
  const container = document.getElementById("video-grid-container");
  container.innerHTML = "";

  FRIENDSHIP_CONFIG.videos.forEach((vid, idx) => {
    const card = document.createElement("div");
    card.className = "video-card";
    card.style.setProperty("--stagger", idx);

    card.innerHTML = `
      <div class="video-player-wrapper">
        <video preload="metadata" poster="${vid.poster}" playsinline>
          <source src="${vid.src}" type="video/mp4" />
        </video>
        <button class="btn-fullscreen" aria-label="Full Screen" title="Full Screen">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="18" height="18">
            <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
          </svg>
        </button>
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
        <h4 class="video-title">${vid.title}</h4>
        <p class="video-desc">${vid.desc}</p>
      </div>
    `;

    const videoEl = card.querySelector("video");
    const overlay = card.querySelector(".video-overlay-play");
    const iconPlay = card.querySelector(".icon-play");
    const iconPause = card.querySelector(".icon-pause");

    videoVisibilityObserver.observe(card);

    videoEl.addEventListener("error", () => {
      const wrapper = card.querySelector(".video-player-wrapper");
      wrapper.innerHTML = `
        <div class="video-placeholder-graphic">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="48" height="48">
            <polygon points="23 7 16 12 23 17 23 7"></polygon>
            <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
          </svg>
          <span>${vid.title} (Add MP4 to assets/videos)</span>
        </div>
      `;
    });

    const fullscreenBtn = card.querySelector(".btn-fullscreen");
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
function renderUnsaidCards() {
  const container = document.getElementById("unsaid-cards-grid");
  container.innerHTML = "";

  FRIENDSHIP_CONFIG.unsaid.forEach((item, idx) => {
    const card = document.createElement("div");
    card.className = "unsaid-card";
    card.style.setProperty("--stagger", idx);
    card.innerHTML = `
      <span class="card-num">${item.num}</span>
      <h3 class="card-headline">${item.headline}</h3>
      <span class="card-tap-hint">Tap to reveal note ↓</span>
      <div class="card-secret-note">${item.note}</div>
    `;

    card.addEventListener("click", () => {
      card.classList.toggle("expanded");
      const hint = card.querySelector(".card-tap-hint");
      if (card.classList.contains("expanded")) {
        hint.textContent = "Tap to close ↑";
      } else {
        hint.textContent = "Tap to reveal note ↓";
      }
    });

    container.appendChild(card);
  });
}

// ===================================================================
// INTERACTIVE FRIENDSHIP QUESTION ENGINE
// ===================================================================
function normalizeInput(str) {
  if (!str) return "";
  return str
    .toLowerCase()
    .trim()
    .replace(/[-_\s]+/g, ""); // removes hyphens, underscores, extra spaces
}

function initFriendshipQuestion() {
  const form = document.getElementById("friend-question-form");
  const input = document.getElementById("q-input");
  const submitBtn = document.getElementById("q-submit-btn");
  const feedbackBox = document.getElementById("q-feedback-box");
  const revealedContainer = document.getElementById("q-revealed-content");
  const microReply = document.getElementById("q-micro-reply");
  const primaryMsg = document.getElementById("q-primary-msg");
  const followupMsg = document.getElementById("q-followup-msg");
  const unlockedCard = document.getElementById("q-unlocked-card");
  const cardBody = document.getElementById("q-card-body");
  const cardMedia = document.getElementById("q-card-media");

  if (!form) return;

  const config = FRIENDSHIP_CONFIG.friendshipQuestion;

  if (document.getElementById("q-title")) {
    document.getElementById("q-title").textContent = config.questionTitle;
  }
  if (document.getElementById("q-subtitle")) {
    document.getElementById("q-subtitle").textContent = config.questionSubtitle;
  }
  if (input) {
    input.placeholder = config.placeholder || "Type your answer...";
  }

  if (cardBody && config.hiddenContent) {
    cardBody.innerHTML = config.hiddenContent.body || "";
  }
  if (cardMedia && config.hiddenContent) {
    cardMedia.innerHTML = config.hiddenContent.mediaText || "";
  }
  if (document.getElementById("q-card-title") && config.hiddenContent) {
    document.getElementById("q-card-title").textContent = config.hiddenContent.title || "Okay... you unlocked this.";
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const rawVal = input.value;
    const normalizedVal = normalizeInput(rawVal);

    // Look up normalized answer in config.answers object
    const matchedReply = config.answers[normalizedVal];

    if (matchedReply) {
      // Clear error/feedback
      feedbackBox.innerHTML = "";

      // Disable input & button
      input.disabled = true;
      submitBtn.disabled = true;

      // Add warm background success glow to the section
      const qSection = document.getElementById("sec-question");
      if (qSection) qSection.classList.add("question-success");

      // 1. Show custom personalized micro-reply & primary success msg
      microReply.textContent = matchedReply;
      primaryMsg.textContent = config.defaultSuccessMessage || "You got it. 🤍";
      revealedContainer.classList.remove("hidden");

      // 2. After short delay, reveal follow-up message & memory card
      setTimeout(() => {
        followupMsg.textContent = config.followUpMessage || "And honestly... that probably says more about our friendship than anything else.";
        followupMsg.classList.remove("hidden");
        unlockedCard.classList.remove("hidden");
        triggerConfettiBurst(50);
      }, 1200);

    } else {
      // Incorrect answer handling
      feedbackBox.innerHTML = `<div class="question-playful-hint">${config.playfulError.replace(/\n/g, '<br>')}</div>`;
      input.value = "";
      input.focus();
    }
  });
}

// ===================================================================
// RENDER WHY YOU ARE SPECIAL TO ME CARDS
// ===================================================================
function renderSpecialToMeSection() {
  const container = document.getElementById("special-cards-grid");
  if (!container) return;
  container.innerHTML = "";

  FRIENDSHIP_CONFIG.specialToMe.forEach((text, idx) => {
    const card = document.createElement("div");
    card.className = "special-card";
    card.style.setProperty("--stagger", idx);
    const num = String(idx + 1).padStart(2, "0");
    card.innerHTML = `
      <span class="special-card-num">${num}</span>
      <p class="special-card-text">${text}</p>
    `;
    container.appendChild(card);
  });
}

// ===================================================================
// PHYSICAL 3D ENVELOPE & LETTER MODAL
// ===================================================================
function initEnvelopeAndLetter() {
  const envelopeWrapper = document.getElementById("envelope-wrapper");
  const envelope = document.getElementById("envelope");
  const btnOpen = document.getElementById("btn-open-letter");
  const modal = document.getElementById("letter-modal");
  const backdrop = document.getElementById("letter-backdrop");
  const btnClose = document.getElementById("btn-close-letter");

  // Populate letter text
  document.getElementById("letter-display-date").textContent = FRIENDSHIP_CONFIG.letter.date;
  document.getElementById("letter-modal-title").textContent = FRIENDSHIP_CONFIG.letter.salutation;
  document.getElementById("letter-full-text").innerHTML = FRIENDSHIP_CONFIG.letter.body;
  document.getElementById("letter-signature-name").textContent = FRIENDSHIP_CONFIG.letter.signature;

  const openLetterSequence = () => {
    envelope.classList.add("open");
    setTimeout(() => {
      modal.classList.add("active");
    }, 600);
  };

  const closeLetterModal = () => {
    modal.classList.remove("active");
  };

  envelopeWrapper.addEventListener("click", openLetterSequence);
  btnOpen.addEventListener("click", openLetterSequence);
  btnClose.addEventListener("click", closeLetterModal);
  backdrop.addEventListener("click", closeLetterModal);
}

// ===================================================================
// FINAL REVEAL & CELEBRATION
// ===================================================================
function initFinalReveal() {
  document.getElementById("final-bday-heading").textContent = `Happy Birthday, ${FRIENDSHIP_CONFIG.friendName}.`;
  document.getElementById("final-quote-1").textContent = FRIENDSHIP_CONFIG.finalReveal.quote1;
  document.getElementById("final-quote-2").textContent = FRIENDSHIP_CONFIG.finalReveal.quote2;
  document.getElementById("final-quote-3").textContent = FRIENDSHIP_CONFIG.finalReveal.quote3;

  const btnCeleb = document.getElementById("btn-trigger-celebration");
  btnCeleb.addEventListener("click", () => {
    triggerConfettiBurst(150);
  });
}

// ===================================================================
// CONFETTI CANVAS ENGINE
// ===================================================================
let confettiParticles = [];
let confettiAnimId = null;

function initConfettiCanvas() {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);
}

function triggerConfettiBurst(count = 80) {
  const canvas = document.getElementById("confetti-canvas");
  const ctx = canvas.getContext("2d");
  const colors = ["#D4AF37", "#7A1C30", "#9E2A4B", "#E8D5C4", "#FFF", "#F4EFE6"];

  for (let i = 0; i < count; i++) {
    confettiParticles.push({
      x: canvas.width / 2,
      y: canvas.height / 2 + 100,
      vx: (Math.random() - 0.5) * 14,
      vy: (Math.random() - 0.7) * 16,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rSpeed: (Math.random() - 0.5) * 10,
      opacity: 1
    });
  }

  if (!confettiAnimId) {
    animateConfetti(canvas, ctx);
  }
}

function animateConfetti(canvas, ctx) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const p = confettiParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += 0.25; // Gravity
    p.rotation += p.rSpeed;
    p.opacity -= 0.008;

    ctx.save();
    ctx.globalAlpha = Math.max(0, p.opacity);
    ctx.translate(p.x, p.y);
    ctx.rotate((p.rotation * Math.PI) / 180);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
    ctx.restore();

    if (p.opacity <= 0 || p.y > canvas.height + 50) {
      confettiParticles.splice(i, 1);
    }
  }

  if (confettiParticles.length > 0) {
    confettiAnimId = requestAnimationFrame(() => animateConfetti(canvas, ctx));
  } else {
    confettiAnimId = null;
  }
}

// ===================================================================
// SCROLL REVEAL ENGINE
// ===================================================================
function initScrollReveal() {
  var prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var selector =
    ".reveal-up, .reveal-fade, .reveal-scale, " +
    ".polaroid-card, .unsaid-card, .special-card, " +
    ".timeline-item, .video-card";

  // If reduced motion: show everything immediately and return
  if (prefersReduced) {
    document.querySelectorAll(selector).forEach(function(el) {
      el.classList.add("is-visible");
    });
    return;
  }

  // Use a generous rootMargin so elements near the viewport edges also trigger
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px 0px 0px" });

  document.querySelectorAll(selector).forEach(function(el) {
    // If element is already visible in viewport at load time, show it immediately
    var rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add("is-visible");
    } else {
      observer.observe(el);
    }
  });
}

// ===================================================================
// CUSTOM CURSOR ENGINE (DESKTOP ONLY)
// ===================================================================
function initCustomCursor() {
  if ("ontouchstart" in window || navigator.maxTouchPoints > 0) return;
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

  var cursor = document.querySelector(".custom-cursor");
  var ring = document.querySelector(".custom-cursor-ring");
  if (!cursor || !ring) return;

  var mouseX = -100, mouseY = -100;
  var ringX = -100, ringY = -100;

  document.addEventListener("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
    cursor.classList.remove("cursor-hidden");
    ring.classList.remove("cursor-hidden");
  });

  document.addEventListener("mouseleave", function() {
    cursor.classList.add("cursor-hidden");
    ring.classList.add("cursor-hidden");
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;
    ring.style.left = ringX + "px";
    ring.style.top = ringY + "px";
    requestAnimationFrame(animateRing);
  }
  animateRing();

  document.querySelectorAll("a, button, .envelope-wrapper, .music-widget").forEach(function(el) {
    el.addEventListener("mouseenter", function() { cursor.classList.add("cursor-active"); ring.classList.add("cursor-active"); });
    el.addEventListener("mouseleave", function() { cursor.classList.remove("cursor-active"); ring.classList.remove("cursor-active"); });
  });

  document.addEventListener("mouseover", function(e) {
    if (e.target.closest(".polaroid-card, .unsaid-card, .special-card, .video-card, .timeline-item")) {
      cursor.classList.add("cursor-active");
      ring.classList.add("cursor-active");
    }
  });
  document.addEventListener("mouseout", function(e) {
    if (e.target.closest(".polaroid-card, .unsaid-card, .special-card, .video-card, .timeline-item")) {
      cursor.classList.remove("cursor-active");
      ring.classList.remove("cursor-active");
    }
  });
}

// ===================================================================
// PARALLAX BACKGROUND LAYERS (DESKTOP ONLY)
// ===================================================================
function initParallaxLayers() {
  if (window.innerWidth < 768) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var orbs = document.querySelectorAll(".ambient-orb");
  var ticking = false;

  window.addEventListener("scroll", function() {
    if (!ticking) {
      requestAnimationFrame(function() {
        var scrollY = window.scrollY;
        orbs.forEach(function(orb, i) {
          var speed = (i % 2 === 0) ? 0.04 : -0.03;
          var offset = scrollY * speed;
          orb.style.setProperty("--scroll-offset", offset + "px");
        });
        ticking = false;
      });
      ticking = true;
    }
  });
}




// ===================================================================
// AMBIENT BACKGROUND PARTICLE SYSTEM (Canvas)
// Renders tiny floating glowing dots that drift slowly across the
// viewport. Lightweight, GPU-friendly, and non-distracting.
// ===================================================================
function initAmbientParticles() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  var canvas = document.getElementById("ambient-particle-canvas");
  if (!canvas) return;
  var ctx = canvas.getContext("2d");

  var isMobile = window.innerWidth < 768;
  var PARTICLE_COUNT = isMobile ? 25 : 50;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();

  var resizeTimer;
  window.addEventListener("resize", function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resizeCanvas, 200);
  });

  var colors = [
    { r: 212, g: 175, b: 55 },   // gold
    { r: 255, g: 255, b: 255 },   // white
    { r: 158, g: 42,  b: 75  },   // plum
    { r: 90,  g: 15,  b: 30  },   // dark maroon (shows on white)
    { r: 120, g: 90,  b: 20  },   // dark gold (shows on white)
    { r: 60,  g: 40,  b: 50  }    // dark grey/plum (shows on white)
  ];

  var particles = [];
  for (var i = 0; i < PARTICLE_COUNT; i++) {
    var color = colors[Math.floor(Math.random() * colors.length)];
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8 + 0.4,
      baseOpacity: Math.random() * 0.4 + 0.15,
      opacity: 0,
      vx: (Math.random() - 0.5) * 0.15,
      vy: (Math.random() - 0.5) * 0.1 - 0.05,
      pulseSpeed: Math.random() * 0.008 + 0.003,
      pulseOffset: Math.random() * Math.PI * 2,
      color: color
    });
  }

  var animId;
  var lastTime = 0;

  function animate(timestamp) {
    animId = requestAnimationFrame(animate);
    if (timestamp - lastTime < 30) return;
    lastTime = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < particles.length; i++) {
      var p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -10) p.x = canvas.width + 10;
      if (p.x > canvas.width + 10) p.x = -10;
      if (p.y < -10) p.y = canvas.height + 10;
      if (p.y > canvas.height + 10) p.y = -10;

      p.opacity = p.baseOpacity + Math.sin(timestamp * p.pulseSpeed + p.pulseOffset) * p.baseOpacity * 0.5;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(" + p.color.r + "," + p.color.g + "," + p.color.b + "," + p.opacity + ")";
      ctx.fill();

      if (p.radius > 1.2) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(" + p.color.r + "," + p.color.g + "," + p.color.b + "," + (p.opacity * 0.15) + ")";
        ctx.fill();
      }
    }
  }

  animId = requestAnimationFrame(animate);

  document.addEventListener("visibilitychange", function() {
    if (document.hidden) {
      cancelAnimationFrame(animId);
    } else {
      animId = requestAnimationFrame(animate);
    }
  });
}

document.addEventListener("DOMContentLoaded", function() {
  initAmbientParticles();
});

