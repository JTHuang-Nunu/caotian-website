// components/DirectoryList.js
import React, { useEffect, useState } from 'react';
import { Cards, Card } from 'nextra/components';
import {marked} from 'marked';

const DirectoryList = () => {
  const [data, setData] = useState({});
//   const renderer = new marked.Renderer
  useEffect(() => {
    fetch('/api/list-files')
      .then(response => response.json())
      .then(setData)
      .catch(console.error);
  }, []);
  
    // // 自定義標題的渲染方式
    // renderer.heading = function (text, level) {
    // return `<h${level} style="color: blue;">${text}</h${level}>`;
    // };

    // // 配置 marked 使用自定義渲染器
    // marked.setOptions({
    // renderer: renderer
    // });

    // // 轉換 Markdown 為 HTML
    // const customHtml = marked('# Custom Header');
    // console.log(customHtml);  
  const markdownString = 'Some markdown **bold**, *italic*';
  const html = marked(markdownString);
    
  return (
    
    <div>
      {Object.keys(data).map(key => (
        <div key={key}>
          <ul>
            {data[key].files.map(file => (
              <Card title= {file} href=""/>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default DirectoryList;
