// src/components/CustomTitleBar.js

import React from 'react';
 

function CustomTitleBar() {
  const handleMinimize = () => {
    window.electronAPI.minimize();
  };

  const handleMaximize = () => {
    window.electronAPI.maximize();
  };

  const handleClose = () => {
    window.electronAPI.close();
  };

  return (
    <div className="title-bar">
      <div className="title-bar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      
      {/* This middle section is the draggable area */}
      <div className="title-bar-middle-drag-region"></div>
      
      <div className="title-bar-right">
        <button id="minimize-btn" onClick={handleMinimize}>-</button>
        <button id="maximize-btn" onClick={handleMaximize}>☐</button>
        <button id="close-btn" onClick={handleClose}>×</button>
      </div>
    </div>
  );
}

export default CustomTitleBar;