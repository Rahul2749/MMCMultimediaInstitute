const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const sourceDir = 'D:\\stitch_mmc_multimedia_academy\\stitch_mmc_multimedia_academy';
const targetDir = path.join(__dirname, 'src', 'pages');

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Helper to convert snake_case or kebab-case to PascalCase
function toPascalCase(str) {
  return str.split(/[_|-]/).map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');
}

// Very basic style string to object converter
function styleStringToObject(styleStr) {
  const obj = {};
  styleStr.split(';').forEach(rule => {
    if (!rule.trim()) return;
    const parts = rule.split(':');
    if (parts.length >= 2) {
      let key = parts[0].trim();
      let value = parts.slice(1).join(':').trim();
      // camelCase the key
      key = key.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
      obj[key] = value.replace(/'/g, '"');
    }
  });
  return JSON.stringify(obj).replace(/"/g, "'").replace(/'(.*?)':/g, '$1:');
}

const routes = [];

const dirs = fs.readdirSync(sourceDir);
for (const dir of dirs) {
  const fullPath = path.join(sourceDir, dir);
  if (fs.statSync(fullPath).isDirectory()) {
    const htmlPath = path.join(fullPath, 'code.html');
    if (fs.existsSync(htmlPath)) {
      const componentName = toPascalCase(dir);
      let html = fs.readFileSync(htmlPath, 'utf8');
      
      const $ = cheerio.load(html, { xmlMode: false });
      
      // Remove nav, footer, script tags
      $('nav').remove();
      $('footer').remove();
      $('script').remove();
      
      let bodyHtml = $('body').html();
      if(!bodyHtml) continue;

      // HTML to JSX conversions
      // 1. class to className
      bodyHtml = bodyHtml.replace(/ class="/g, ' className="');
      bodyHtml = bodyHtml.replace(/ class='/g, " className='");
      // 2. self-closing tags
      bodyHtml = bodyHtml.replace(/<img(.*?)>/g, (match, p1) => {
          if(p1.trim().endsWith('/')) return match;
          return `<img${p1} />`;
      });
      bodyHtml = bodyHtml.replace(/<input(.*?)>/g, (match, p1) => {
          if(p1.trim().endsWith('/')) return match;
          return `<input${p1} />`;
      });
      bodyHtml = bodyHtml.replace(/<br>/g, '<br />');
      // 3. style to object
      bodyHtml = bodyHtml.replace(/ style="(.*?)"/g, (match, p1) => {
        try {
            return ` style={{${styleStringToObject(p1).slice(1,-1)}}}`;
        } catch(e) {
            return match;
        }
      });
      bodyHtml = bodyHtml.replace(/ style='(.*?)'/g, (match, p1) => {
        try {
            return ` style={{${styleStringToObject(p1).slice(1,-1)}}}`;
        } catch(e) {
            return match;
        }
      });

      // 4. svg attributes
      bodyHtml = bodyHtml.replace(/stroke-width/g, 'strokeWidth');
      bodyHtml = bodyHtml.replace(/stroke-linecap/g, 'strokeLinecap');
      bodyHtml = bodyHtml.replace(/stroke-linejoin/g, 'strokeLinejoin');
      bodyHtml = bodyHtml.replace(/fill-rule/g, 'fillRule');
      bodyHtml = bodyHtml.replace(/clip-rule/g, 'clipRule');

      // Wrap in GSAP template
      const componentCode = `import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ${componentName} = () => {
  const sectionsRef = useRef([]);

  useEffect(() => {
    sectionsRef.current.forEach((section) => {
      if (section) {
        gsap.fromTo(
          section,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
            },
          }
        );
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <>
      {/* 
        To add GSAP reveals, add ref={addToRefs} to <section> tags.
        Example: <section ref={addToRefs} className="...">
      */}
      ${bodyHtml}
    </>
  );
};

export default ${componentName};
`;
      // Don't overwrite Home if it exists and is MmcMasterTheArtOfMultimedia
      if (componentName === 'MmcMasterTheArtOfMultimedia') {
        routes.push({ path: '/', component: 'Home', importName: 'Home' });
      } else {
        const routePath = '/' + dir.replace(/_/g, '-');
        routes.push({ path: routePath, component: componentName, importName: componentName });
        fs.writeFileSync(path.join(targetDir, `${componentName}.jsx`), componentCode);
        console.log(`Generated ${componentName}.jsx`);
      }
    }
  }
}

// Generate App.jsx routing updates
let appJsx = `import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
`;

routes.forEach(route => {
  if (route.component !== 'Home') {
    appJsx += `import ${route.importName} from './pages/${route.component}';\n`;
  }
});

appJsx += `
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
`;

routes.forEach(route => {
  appJsx += `          <Route path="${route.path}" element={<${route.component} />} />\n`;
});

appJsx += `        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
`;

fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appJsx);
console.log('Updated App.jsx with all routes');
