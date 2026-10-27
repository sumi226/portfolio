import fs from 'node:fs';
import path from 'node:path';

const streamContent = `BT
/F2 18 Tf
50 742 Td
(FATEMA AKTER) Tj
0 -18 Td
/F1 11 Tf
(Full Stack Developer  |  MERN Stack) Tj
0 -16 Td
/F1 9.5 Tf
(Email: fsumi226@gmail.com   Phone: +880167971447   Location: Chittagong, Bangladesh) Tj
0 -13 Td
(GitHub: https://github.com/sumi226   LinkedIn: https://www.linkedin.com/in/fatema226/) Tj
0 -20 Td
/F2 12 Tf
(PROFESSIONAL SUMMARY) Tj
0 -13 Td
/F1 9.5 Tf
(Passionate Full Stack Developer with an analytical background in MBA Finance & Banking and Management.) Tj
0 -12 Td
(Dedicated to developing modern, user-friendly, responsive web applications and scalable RESTful backends) Tj
0 -12 Td
(using React.js, Node.js, Express.js, and MongoDB. Enthusiastic problem-solver and lifelong learner.) Tj
0 -20 Td
/F2 12 Tf
(TECHNICAL SKILLS) Tj
0 -14 Td
/F2 9.5 Tf
(Frontend: ) Tj
/F1 9.5 Tf
(React.js, Tailwind CSS, JavaScript ES6+, HTML5, CSS3, Responsive Web Design) Tj
0 -13 Td
/F2 9.5 Tf
(Backend: ) Tj
/F1 9.5 Tf
(Node.js, Express.js, REST APIs, JSON Middleware, Endpoint Architecture) Tj
0 -13 Td
/F2 9.5 Tf
(Databases: ) Tj
/F1 9.5 Tf
(MongoDB, Mongoose ODM, MySQL, NoSQL Database Architecture) Tj
0 -13 Td
/F2 9.5 Tf
(Tools & Platforms: ) Tj
/F1 9.5 Tf
(Git, GitHub, VS Code, Postman, npm, Vite) Tj
0 -20 Td
/F2 12 Tf
(EDUCATIONAL QUALIFICATIONS) Tj
0 -14 Td
/F2 9.5 Tf
(MBA in Finance & Banking  -  CGPA: 3.65 / 4.00) Tj
0 -12 Td
/F1 9 Tf
(International Islamic University, Chittagong (IIUC)) Tj
0 -14 Td
/F2 9.5 Tf
(MBS in Management  -  2nd Division) Tj
0 -12 Td
/F1 9 Tf
(National University) Tj
0 -14 Td
/F2 9.5 Tf
(Honours in Management  -  1st Division) Tj
0 -12 Td
/F1 9 Tf
(National University) Tj
0 -20 Td
/F2 12 Tf
(FEATURED PROJECTS) Tj
0 -14 Td
/F2 9.5 Tf
(1. E-Commerce Web Application) Tj
0 -12 Td
/F1 9 Tf
(Tech Stack: React.js, Tailwind CSS, Node.js, Express.js, MongoDB) Tj
0 -11 Td
(Features: Dynamic product catalog, search filters, interactive cart state, and responsive checkout flow.) Tj
0 -14 Td
/F2 9.5 Tf
(2. Task Management Application) Tj
0 -12 Td
/F1 9 Tf
(Tech Stack: React.js, Tailwind CSS, REST APIs, Framer Motion) Tj
0 -11 Td
(Features: Kanban workflow, CRUD operations, status management (To Do, In Progress, Done), priority labels.) Tj
0 -14 Td
/F2 9.5 Tf
(3. Personal Finance Dashboard) Tj
0 -12 Td
/F1 9 Tf
(Tech Stack: React.js, Tailwind CSS, SVG Visualizations, Express.js) Tj
0 -11 Td
(Features: Financial analytics, expense/income tracking, summary cards and charts, budget surplus metrics.) Tj
ET`;

function buildPdf(content: string): Buffer {
  const streamBytes = Buffer.from(content, 'utf-8');
  const streamLength = streamBytes.length;

  const header = '%PDF-1.4\n%\xE2\xE3\xCF\xD3\n';

  const obj1 = '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n';
  const obj2 = '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n';
  const obj3 = '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>\nendobj\n';
  const obj4 = '4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n';
  const obj5 = '5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>\nendobj\n';
  const obj6Head = `6 0 obj\n<< /Length ${streamLength} >>\nstream\n`;
  const obj6Tail = '\nendstream\nendobj\n';

  const offset1 = Buffer.byteLength(header);
  const offset2 = offset1 + Buffer.byteLength(obj1);
  const offset3 = offset2 + Buffer.byteLength(obj2);
  const offset4 = offset3 + Buffer.byteLength(obj3);
  const offset5 = offset4 + Buffer.byteLength(obj4);
  const offset6 = offset5 + Buffer.byteLength(obj5);

  const obj6Full = obj6Head + content + obj6Tail;
  const xrefOffset = offset6 + Buffer.byteLength(obj6Full);

  const pad = (n: number): string => String(n).padStart(10, '0');

  const xref = 
`xref
0 7
0000000000 65535 f 
${pad(offset1)} 00000 n 
${pad(offset2)} 00000 n 
${pad(offset3)} 00000 n 
${pad(offset4)} 00000 n 
${pad(offset5)} 00000 n 
${pad(offset6)} 00000 n 
trailer
<< /Size 7 /Root 1 0 R >>
startxref
${xrefOffset}
%%EOF
`;

  return Buffer.concat([
    Buffer.from(header, 'utf-8'),
    Buffer.from(obj1, 'utf-8'),
    Buffer.from(obj2, 'utf-8'),
    Buffer.from(obj3, 'utf-8'),
    Buffer.from(obj4, 'utf-8'),
    Buffer.from(obj5, 'utf-8'),
    Buffer.from(obj6Head, 'utf-8'),
    streamBytes,
    Buffer.from(obj6Tail, 'utf-8'),
    Buffer.from(xref, 'utf-8')
  ]);
}

const pdfBuf = buildPdf(streamContent);
const targetPath = path.resolve('public', 'resume.pdf');
fs.mkdirSync(path.dirname(targetPath), { recursive: true });
fs.writeFileSync(targetPath, pdfBuf);
console.log(`Generated ${targetPath} (${pdfBuf.length} bytes)`);
