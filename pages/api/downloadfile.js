import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
  const filePath = path.join(process.cwd(), 'public', '20234eramsyak.xls');
  const fileContents = fs.readFileSync(filePath);

  res.setHeader('Content-Type', 'application/vnd.ms-excel');
  res.setHeader('Content-Disposition', 'attachment; filename="20234eramsyak.xls"');
  res.send(fileContents);
}