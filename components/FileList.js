// components/FileList.js
import React, { useState, useEffect } from 'react';

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch('/api/list-files')
      .then(response => response.json())
      .then(setFiles)
      .catch(console.error);
  }, []);
//   console.log('List files:', files);
  return (
    <ul>
      {files.map(file => (
        <li key={file}>{file}</li>
      ))}
    </ul>
  );
};

export default FileList;
