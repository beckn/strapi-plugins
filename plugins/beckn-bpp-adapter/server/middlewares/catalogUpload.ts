import multer from '@koa/multer';
import * as os from 'os';
import * as path from 'path';

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const tempDir = path.join(os.tmpdir(), 'catalog-uploads');
    // Create directory if it doesn't exist
    const fs = require('fs');
    if (!fs.existsSync(tempDir)) {
      fs.mkdirSync(tempDir, { recursive: true });
    }
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    // Keep original filename with timestamp to avoid conflicts
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `${file.fieldname}-${uniqueSuffix}-${file.originalname}`);
  },
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 50 * 1024 * 1024, // 50MB limit
  },
  fileFilter: (req, file, cb) => {
    // Only accept CSV files
    if (
      file.mimetype === 'text/csv' ||
      file.mimetype === 'application/vnd.ms-excel' ||
      file.originalname.endsWith('.csv')
    ) {
      cb(null, true);
    } else {
      cb(new Error('Only CSV files are allowed'));
    }
  },
});

const catalogUpload = upload.fields([
  { name: 'items', maxCount: 1 },
  { name: 'providers', maxCount: 1 },
]);

export default () => catalogUpload;
