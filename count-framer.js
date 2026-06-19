const fs = require('fs');
const path = require('path');
const root = path.resolve(process.cwd(), 'src');
const files = [];
function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const p = path.join(dir, name);
    const stat = fs.statSync(p);
    if (stat.isDirectory()) walk(p);
    else if (/\.jsx?$/.test(name)) files.push(p);
  }
}
walk(root);
const counts = {};
const total = {motionDiv: 0, motionSection: 0, AnimatePresence: 0, whileInView: 0, useScroll: 0, useTransform: 0, scrollListener: 0};
const scrollRegex = /window\.addEventListener\(['\"]scroll['\"]|addEventListener\(['\"]scroll['\"]|onScroll=|scroll\s*:\s*function\(|scroll\s*=>/g;
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  const rel = path.relative(root, file).replace(/\\/g, '/');
  const c = {
    motionDiv: (text.match(/motion\.div/g) || []).length,
    motionSection: (text.match(/motion\.section/g) || []).length,
    AnimatePresence: (text.match(/AnimatePresence/g) || []).length,
    whileInView: (text.match(/whileInView/g) || []).length,
    useScroll: (text.match(/useScroll/g) || []).length,
    useTransform: (text.match(/useTransform/g) || []).length,
    scrollListener: (text.match(scrollRegex) || []).length,
  };
  if (Object.values(c).some(v => v > 0)) {
    counts[rel] = c;
    for (const k of Object.keys(total)) total[k] += c[k];
  }
}
console.log(JSON.stringify({counts, total}, null, 2));
