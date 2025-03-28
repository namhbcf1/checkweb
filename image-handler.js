
const sharp = require('sharp');
const path = require('path');
const fs = require('fs').promises;

// Kích thước ảnh tối ưu cho từng loại thiết bị
const deviceSizes = {
  mobile: 480,
  tablet: 768,
  desktop: 1200
};

// Cache để lưu ảnh đã xử lý
const imageCache = new Map();

/**
 * Xử lý và tối ưu hóa ảnh theo yêu cầu
 * @param {string} imagePath Đường dẫn gốc của hình ảnh
 * @param {object} options Tùy chọn tối ưu hóa (kích thước, chất lượng)
 * @returns {Promise<Buffer>} Buffer chứa dữ liệu ảnh đã tối ưu hóa
 */
async function processImage(imagePath, options = {}) {
  const { width = 800, quality = 80, format = 'jpeg' } = options;
  const cacheKey = `${imagePath}-${width}-${quality}-${format}`;
  
  // Kiểm tra cache
  if (imageCache.has(cacheKey)) {
    return imageCache.get(cacheKey);
  }
  
  try {
    // Đọc file ảnh gốc
    const imageBuffer = await fs.readFile(imagePath);
    
    // Xử lý ảnh với sharp
    let sharpInstance = sharp(imageBuffer)
      .resize({
        width,
        withoutEnlargement: true,
        fit: 'inside'
      });
    
    // Chọn định dạng đầu ra
    let outputBuffer;
    if (format === 'webp') {
      outputBuffer = await sharpInstance.webp({ quality }).toBuffer();
    } else if (format === 'avif') {
      outputBuffer = await sharpInstance.avif({ quality }).toBuffer();
    } else {
      outputBuffer = await sharpInstance.jpeg({ quality, progressive: true }).toBuffer();
    }
    
    // Lưu vào cache
    imageCache.set(cacheKey, outputBuffer);
    
    // Giới hạn kích thước cache
    if (imageCache.size > 200) {
      const firstKey = imageCache.keys().next().value;
      imageCache.delete(firstKey);
    }
    
    return outputBuffer;
  } catch (error) {
    console.error(`Lỗi khi xử lý ảnh ${imagePath}:`, error);
    throw error;
  }
}

/**
 * Xác định loại thiết bị từ user agent
 * @param {string} userAgent 
 * @returns {string} Loại thiết bị (mobile, tablet, desktop)
 */
function detectDeviceType(userAgent) {
  if (/mobile|iphone|ipod|android|blackberry|opera|mini|windows\sce|palm|smartphone|iemobile/i.test(userAgent)) {
    return 'mobile';
  } else if (/ipad|android 3|asus|tablet|kindle|gt-p1000|sm-t|transformer|silk|android.+tab/i.test(userAgent)) {
    return 'tablet';
  }
  return 'desktop';
}

/**
 * Kiểm tra xem trình duyệt có hỗ trợ định dạng WebP không
 * @param {string} acceptHeader 
 * @returns {boolean}
 */
function supportsWebp(acceptHeader) {
  return acceptHeader && acceptHeader.includes('image/webp');
}

/**
 * Kiểm tra xem trình duyệt có hỗ trợ định dạng AVIF không
 * @param {string} acceptHeader 
 * @returns {boolean}
 */
function supportsAvif(acceptHeader) {
  return acceptHeader && acceptHeader.includes('image/avif');
}

/**
 * Middleware Express để xử lý yêu cầu ảnh
 */
function imageMiddleware(req, res, next) {
  // Chỉ xử lý các file ảnh
  const extensions = ['.jpg', '.jpeg', '.png', '.webp'];
  const reqPath = req.path.toLowerCase();
  
  if (!extensions.some(ext => reqPath.endsWith(ext))) {
    return next();
  }
  
  // Kiểm tra nếu là yêu cầu đến thư mục ảnh đã tối ưu hóa thì bỏ qua
  if (reqPath.includes('/optimized/')) {
    return next();
  }
  
  const fullPath = path.join(__dirname, decodeURIComponent(req.path));
  
  // Xác định loại thiết bị
  const deviceType = detectDeviceType(req.headers['user-agent'] || '');
  const width = deviceSizes[deviceType];
  
  // Xác định định dạng đầu ra dựa trên khả năng hỗ trợ của trình duyệt
  let format = 'jpeg';
  if (supportsAvif(req.headers.accept)) {
    format = 'avif';
  } else if (supportsWebp(req.headers.accept)) {
    format = 'webp';
  }
  
  // Xử lý ảnh
  processImage(fullPath, { width, quality: 80, format })
    .then(buffer => {
      // Đặt header phù hợp với định dạng
      if (format === 'webp') {
        res.setHeader('Content-Type', 'image/webp');
      } else if (format === 'avif') {
        res.setHeader('Content-Type', 'image/avif');
      } else {
        res.setHeader('Content-Type', 'image/jpeg');
      }
      
      // Đặt header bộ nhớ đệm
      res.setHeader('Cache-Control', 'public, max-age=604800');
      res.setHeader('Vary', 'Accept');
      
      // Gửi ảnh đã tối ưu
      res.send(buffer);
    })
    .catch(err => {
      console.error('Lỗi khi xử lý yêu cầu ảnh:', err);
      next(); // Chuyển sang middleware tiếp theo nếu có lỗi
    });
}

module.exports = imageMiddleware;
