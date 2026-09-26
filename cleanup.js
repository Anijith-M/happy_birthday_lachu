const fs = require('fs');

// index.html
let html = fs.readFileSync('index.html', 'utf8');
html = html.replace(/<!-- Floating Minimal Section Progress Indicator -->[\s\S]*?<\/nav>/, '');
fs.writeFileSync('index.html', html);

// style.css
let css = fs.readFileSync('style.css', 'utf8');
css = css.replace(/\/\* ===================================================================\s*PROGRESS NAV\s*===================================================================\s*\*\/[\s\S]*?(?=\/\* ===================================================================\s*SECTION LAYOUT)/, '');
css = css.replace(/\.progress-nav\s*\{[\s\S]*?\}/g, '');
css = css.replace(/\/\* --- Fix: progress nav text-only display.*?\.progress-counter\s*\{\s*display:\s*none;\s*\}/, '');
css = css.replace(/\.progress-track\s*\{[\s\S]*?\}/g, '');
css = css.replace(/\.progress-bar\s*\{[\s\S]*?\}/g, '');
css = css.replace(/\.progress-counter\s*\{[\s\S]*?\}/g, '');
css = css.replace(/\.progress-section-name\s*\{[\s\S]*?\}/g, '');
fs.writeFileSync('style.css', css);

// motion.css
let mcss = fs.readFileSync('motion.css', 'utf8');
mcss = mcss.replace(/\/\* ===================================================================\s*PROGRESS NAV — HIDE NUMERIC COUNTER[\s\S]*?\.progress-counter\s*\{\s*display:\s*none\s*!\s*important;\s*\}/, '');
fs.writeFileSync('motion.css', mcss);

// script.js
let js = fs.readFileSync('script.js', 'utf8');
js = js.replace(/\/\/ ===================================================================\s*\/\/ PROGRESS NAV & SCROLL OBSERVER[\s\S]*?function initProgressNav\(\)\s*\{[\s\S]*?(?=\/\/ ===================================================================\s*\/\/ RENDER TIMELINE)/, '');
js = js.replace(/initProgressNav\(\);\s*/, '');
js = js.replace(/, \.progress-nav/g, '');
fs.writeFileSync('script.js', js);
console.log('Cleanup JS done.');
