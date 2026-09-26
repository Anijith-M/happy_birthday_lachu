const fs = require('fs');
let css = fs.readFileSync('motion.css', 'utf8');

// Remove .scroll-hint,
css = css.replace(/\.scroll-hint,\s*/, '');

const specificRule = `
/* --- Fix: preserve horizontal centering for scroll-hint --- */
.scroll-hint.reveal-fade {
  transform: translate(-50%, 12px) !important;
}
.scroll-hint.reveal-fade.is-visible {
  transform: translateX(-50%) !important;
}
`;

css += specificRule;
fs.writeFileSync('motion.css', css);
console.log('Fixed scroll-hint CSS.');
