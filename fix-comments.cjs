const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.jsx') && f !== 'Home.jsx');

for (const file of files) {
  const filePath = path.join(pagesDir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Replace HTML comments with JSX comments
  content = content.replace(/<!--(.*?)-->/g, '{/*$1*/}');
  
  fs.writeFileSync(filePath, content);
}
console.log('Fixed comments in generated JSX files.');
