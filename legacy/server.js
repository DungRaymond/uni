const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 8080;
const ROOT_DIR = __dirname;

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.mjs': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.md': 'text/markdown; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8'
};

function resolveFilePath(reqPath) {
  let safePath = decodeURIComponent(reqPath.split('?')[0]);
  if (safePath === '/' || safePath === '/index.html') {
    return path.join(ROOT_DIR, 'documents.html');
  }

  // Handle common aliases
  if (safePath === '/documents' || safePath === '/docs') {
    return path.join(ROOT_DIR, 'documents.html');
  }
  if (safePath === '/homework' || safePath === '/hw') {
    return path.join(ROOT_DIR, 'homeworked.html');
  }
  if (safePath === '/y-duoc' || safePath === '/y-duoc.doc') {
    return path.join(ROOT_DIR, 'y-duoc.doc.html');
  }

  let fullPath = path.join(ROOT_DIR, safePath);

  // Prevent path traversal
  if (!fullPath.startsWith(ROOT_DIR)) {
    return null;
  }

  // If path doesn't exist, try appending .html
  if (!fs.existsSync(fullPath)) {
    if (fs.existsSync(fullPath + '.html')) {
      fullPath += '.html';
    }
  }

  return fullPath;
}

const server = http.createServer((req, res) => {
  // CORS & Development cache headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS');
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    res.end();
    return;
  }

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.writeHead(405, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('405 Method Not Allowed');
    return;
  }

  const parsedUrl = url.parse(req.url);
  const filePath = resolveFilePath(parsedUrl.pathname);

  if (!filePath || !fs.existsSync(filePath)) {
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
    res.end(`
      <!DOCTYPE html>
      <html lang="vi">
      <head>
        <meta charset="UTF-8">
        <title>404 - Không tìm thấy trang</title>
        <style>
          body { font-family: system-ui, sans-serif; display:flex; justify-content:center; align-items:center; height:100vh; margin:0; background:#f8fafc; color:#1e293b; }
          .card { text-align:center; padding:40px; background:#fff; border-radius:12px; box-shadow:0 4px 12px rgba(0,0,0,0.06); max-width:480px; }
          h1 { color:#ef4444; font-size:3rem; margin:0 0 10px; }
          p { color:#64748b; margin-bottom:24px; }
          .btn { display:inline-block; padding:10px 20px; background:#0284c7; color:#fff; text-decoration:none; border-radius:8px; font-weight:600; margin:0 6px; }
          .btn:hover { background:#0369a1; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>404</h1>
          <p>Tài liệu hoặc đường dẫn yêu cầu không tồn tại.</p>
          <div>
            <a class="btn" href="/documents.html">📑 Kho Tài Liệu</a>
            <a class="btn" href="/y-duoc.doc.html">💊 Môn Y - Dược</a>
            <a class="btn" href="/homeworked.html">📚 Bài Tập Về Nhà</a>
          </div>
        </div>
      </body>
      </html>
    `);
    return;
  }

  const stat = fs.statSync(filePath);
  if (stat.isDirectory()) {
    const indexPath = path.join(filePath, 'documents.html');
    if (fs.existsSync(indexPath)) {
      serveFile(indexPath, req, res);
      return;
    }
    res.writeHead(403, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('403 Forbidden');
    return;
  }

  serveFile(filePath, req, res);
});

function serveFile(filePath, req, res) {
  const ext = path.extname(filePath).toLowerCase();
  const contentType = MIME_TYPES[ext] || 'application/octet-stream';

  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`500 Internal Server Error: ${err.message}`);
      return;
    }
    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
}

function startServer(port, maxAttempts = 5) {
  server.listen(port, () => {
    console.log(`\n======================================================`);
    console.log(`🚀 Cổng Quản Lý & Giáo Trình Y Dược đang hoạt động!`);
    console.log(`------------------------------------------------------`);
    console.log(`👉 Trang Chủ (Kho Tài Liệu): http://localhost:${port}`);
    console.log(`💊 Môn Modul Y - Dược:        http://localhost:${port}/y-duoc.doc.html`);
    console.log(`📚 Cổng Bài Tập Về Nhà:      http://localhost:${port}/homeworked.html`);
    console.log(`📑 Danh Mục Môn Học:         http://localhost:${port}/documents.html`);
    console.log(`======================================================\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE' && maxAttempts > 0) {
      console.log(`⚠️ Cổng ${port} đang bận, tự động chuyển sang cổng ${port + 1}...`);
      startServer(port + 1, maxAttempts - 1);
    } else {
      console.error(`❌ Lỗi khởi động server:`, err);
    }
  });
}

startServer(DEFAULT_PORT);
