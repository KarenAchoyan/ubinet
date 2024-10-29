// pages/api/download/[filename].js

import path from 'path';
import fs from 'fs';

export default function handler(req, res) {
  const { filename } = req.query;

  // Allowed file extensions (for security)
  const allowedExtensions = ['.xls', '.xlsx'];
  const fileExtension = path.extname(filename);

  if (!allowedExtensions.includes(fileExtension)) {
    res.status(400).json({ error: 'Invalid file extension' });
    return;
  }

  const filePath = path.join(process.cwd(), 'public', filename);

  if (!fs.existsSync(filePath)) {
    res.status(404).json({ error: 'File not found' });
    return;
  }

  // Set headers to force download with the correct filename and type
  res.setHeader('Content-Type', 'application/vnd.ms-excel');
  res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);

  // Create a read stream and pipe it to the response
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
}
