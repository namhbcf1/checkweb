const express = require('express');
const path = require('path');
const cors = require('cors');
const compression = require('compression');
const performanceCalculator = require('./performance-calculator.js');

const app = express();
const port = process.env.PORT || 3000;

// Enable compression
app.use(compression({ level: 6, threshold: 0 }));

// Configure CORS
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'User-Agent', 'Accept', 'X-Requested-With'],
    credentials: true
}));

// Add security headers and Safari iOS specific headers
app.use((req, res, next) => {
    // Security headers
    res.setHeader('X-Content-Type-Options', 'nosniff');
    res.setHeader('X-Frame-Options', 'SAMEORIGIN');
    res.setHeader('X-XSS-Protection', '1; mode=block');
    
    // Safari iOS optimizations
    res.setHeader('Cache-Control', 'public, max-age=86400'); // Add caching for better performance
    
    // Check for Safari iOS
    const userAgent = req.headers['user-agent'] || '';
    const isSafariIOS = userAgent.includes('Safari') && (userAgent.includes('iPhone') || userAgent.includes('iPad'));
    
    if (isSafariIOS) {
        // Add specific headers for Safari on iOS
        res.setHeader('X-Safari-Compatible', 'true');
        // Shorter cache time for Safari on iOS to avoid stale content issues
        res.setHeader('Cache-Control', 'public, max-age=3600');
    }
    
    next();
});

// Serve static files with caching
app.use(express.static(path.join(__dirname), {
    maxAge: '1d',
    etag: true,
    setHeaders: (res, path) => {
        if (path.endsWith('.css') || path.endsWith('.js')) {
            res.setHeader('Cache-Control', 'public, max-age=86400');
        } else if (path.endsWith('.jpg') || path.endsWith('.png') || path.endsWith('.webp') || path.endsWith('.svg')) {
            res.setHeader('Cache-Control', 'public, max-age=604800');
        }
    }
}));

app.use(express.json());

// API endpoints
app.post('/api/calculate-performance', (req, res) => {
    try {
        const { cpuScore, gpuScore, gameType } = req.body;

        const performance = {
            game: performanceCalculator.calculateGamePerformance(cpuScore, gpuScore),
            graphics: performanceCalculator.calculateGraphicsPerformance(cpuScore, gpuScore),
            office: performanceCalculator.calculateOfficePerformance(cpuScore, gpuScore),
            bottleneck: performanceCalculator.calculateBottleneck(cpuScore, gpuScore),
            stability: performanceCalculator.calculateStability(cpuScore, gpuScore),
            tips: performanceCalculator.generatePerformanceTips(gameType, cpuScore, gpuScore)
        };

        res.json(performance);
    } catch (error) {
        console.error('Error calculating performance:', error);
        const userAgent = req.headers['user-agent'] || '';
        const isSafariIOS = userAgent.includes('Safari') && userAgent.includes('iPhone') || userAgent.includes('iPad');

        if (isSafariIOS) {
            res.status(500).json({ error: 'Đã xảy ra lỗi. Vui lòng tải lại trang.' }); //More user friendly error message for Safari iOS
        } else {
            res.status(500).json({ error: 'Internal server error', details: error.message });
        }
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    const userAgent = req.headers['user-agent'] || '';
    const isSafariIOS = userAgent.includes('Safari') && (userAgent.includes('iPhone') || userAgent.includes('iPad'));

    if (isSafariIOS) {
        res.status(500).send('Đã xảy ra lỗi. Vui lòng thử lại sau.'); //User friendly error
    } else {
        res.status(500).json({ error: 'Something broke!', details: err.message });
    }
});

// Start server
app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
});