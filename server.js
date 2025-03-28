const express = require('express');
const cors = require('cors');
const compression = require('compression');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Cấu hình tối đa hóa nén nội dung
const compressionOptions = {
  level: 9, // Mức độ nén cao nhất
  threshold: 0 // Nén tất cả các responses bất kể kích thước
};

// Middleware
app.use(compression(compressionOptions)); // Bật nén gzip với cấu hình tối ưu
app.use(cors());

// Cache control cho các file tĩnh
const staticOptions = {
  etag: true, // Bật etag
  lastModified: true, // Bật last-modified
  setHeaders: (res, path) => {
    // Thiết lập header cache cho các loại file khác nhau
    if (path.endsWith('.html')) {
      // HTML không cache nhiều
      res.setHeader('Cache-Control', 'public, max-age=0');
    } else if (path.endsWith('.css') || path.endsWith('.js')) {
      // CSS và JS cache 1 ngày
      res.setHeader('Cache-Control', 'public, max-age=86400');
    } else if (path.match(/\.(jpg|jpeg|png|gif|webp)$/)) {
      // Ảnh cache 7 ngày
      res.setHeader('Cache-Control', 'public, max-age=604800');
    } else {
      // Các file khác cache 1 giờ
      res.setHeader('Cache-Control', 'public, max-age=3600');
    }
  }
};

// Phục vụ files tĩnh với cấu hình cache
app.use(express.static('.', staticOptions));

// Thiết lập header bảo mật và tối ưu cho mobile
app.use((req, res, next) => {
  // Responsive design headers
  res.setHeader('X-UA-Compatible', 'IE=edge');

  // Bảo mật
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'SAMEORIGIN');

  // Tối ưu cho Safari và iOS
  res.setHeader('Content-Security-Policy', "default-src 'self' cdnjs.cloudflare.com unpkg.com cdn.jsdelivr.net 'unsafe-inline' 'unsafe-eval' data: blob:; img-src * data: blob:;");

  next();
});

// Phát hiện mobile browsers
app.use((req, res, next) => {
  const userAgent = req.headers['user-agent'] || '';
  req.isMobile = /iPhone|iPad|iPod|Android|webOS|BlackBerry|Windows Phone/i.test(userAgent);
  req.isSafariIOS = /iPhone|iPad|iPod/i.test(userAgent) && /WebKit/i.test(userAgent) && !/CriOS|FxiOS|OPiOS/i.test(userAgent);
  next();
});

// Route chính
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).send('Something went wrong! Please try again.');
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server is running on http://0.0.0.0:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

// Handle shutdown gracefully
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});