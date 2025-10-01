import { VscFolder, VscFileCode } from 'react-icons/vsc'; // Using react-icons

function FileExplorer() {
  // This is just mock data. Later, you would get this from the main process.
  const files = [
    { name: 'src', type: 'folder', children: [
      { name: 'index.js', type: 'file' },
      { name: 'styles.css', type: 'file' },
    ]},
    { name: 'package.json', type: 'file' },
    { name: 'README.md', type: 'file' },
  ];

  return (
    <div className="file-explorer">
      <h4>PROJECT</h4>
      <ul>
        {files.map(file => (
          <li key={file.name}>
            {file.type === 'folder' ? <VscFolder /> : <VscFileCode />}
            <span className="file-name">{file.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FileExplorer;