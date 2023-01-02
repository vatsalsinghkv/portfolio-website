import path from 'path';
import { readFileSync } from 'fs';
import type { NextApiRequest, NextApiResponse } from 'next';

const filePath = path.resolve('.', 'documents/resume.pdf');
const file = readFileSync(filePath);

export default (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader('Content-Type', 'application/pdf');
  res.send(file);
};
