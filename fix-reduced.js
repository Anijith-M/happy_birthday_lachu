const fs = require('fs');
let css = fs.readFileSync('motion.css', 'utf8');

// Fix prefers-reduced-motion for scroll-hint
const reducedMotionFix = `
@media (prefers-reduced-motion: reduce) {
  .scroll-hint.reveal-fade {
    transform: translateX(-50%) !important;
  }
}
`;

css += reducedMotionFix;
fs.writeFileSync('motion.css', css);
console.log('Fixed reduced motion for scroll-hint.');
