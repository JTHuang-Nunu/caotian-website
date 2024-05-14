// pages/api/list-files.js
import fs from 'fs';
import path from 'path';

const readDirectory = (directoryPath) => {
  return new Promise((resolve, reject) => {
    fs.readdir(directoryPath, { withFileTypes: true }, (err, entries) => {
      if (err) {
        reject(err);
        return;
      }
      const files = [];
      const folders = [];
      entries.forEach(entry => {
        if (entry.isDirectory()) {
          folders.push(entry.name);
        } else {
          files.push(entry.name);
        }
      });
      resolve({ files, folders });
    });
  });
};

export default async function handler(req, res) {
  const baseDir = path.join(process.cwd(), "pages",'Repair-Appliance');
  const directories = ['Application', 'Component', 'Teach'];
  const results = {};

  try {
    for (const dir of directories) {
      const fullPath = path.join(baseDir, dir);
      console.log(fullPath);
      const { files, folders } = await readDirectory(fullPath);
      results[dir] = { files, folders };
    }
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: "Unable to scan directories", error: error.message });
  }
}
