import { useEffect } from 'react';

const ContentProtection = () => {
  useEffect(() => {
    // Disable right-click
    const handleContextMenu = (e) => {
      e.preventDefault();
      alert('⚠️ WARNING: Content is protected!\n\nThis website content is copyrighted and protected.\nUnauthorized copying, downloading, or reproduction is strictly prohibited and may result in legal action.');
      return false;
    };

    // Disable text selection
    const handleSelectStart = (e) => {
      e.preventDefault();
      return false;
    };

    // Disable copy
    const handleCopy = (e) => {
      e.preventDefault();
      alert('⚠️ COPYRIGHT PROTECTED!\n\nCopying content from this website is not allowed.\nAll content is protected by copyright law.');
      return false;
    };

    // Disable cut
    const handleCut = (e) => {
      e.preventDefault();
      alert('⚠️ COPYRIGHT PROTECTED!\n\nCutting content from this website is not allowed.');
      return false;
    };

    // Disable keyboard shortcuts
    const handleKeyDown = (e) => {
      // Disable Ctrl+C, Ctrl+X, Ctrl+S, Ctrl+A, Ctrl+P, F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
      if (
        (e.ctrlKey && (e.key === 'c' || e.key === 'C')) || // Copy
        (e.ctrlKey && (e.key === 'x' || e.key === 'X')) || // Cut
        (e.ctrlKey && (e.key === 's' || e.key === 'S')) || // Save
        (e.ctrlKey && (e.key === 'a' || e.key === 'A')) || // Select All
        (e.ctrlKey && (e.key === 'p' || e.key === 'P')) || // Print
        (e.ctrlKey && (e.key === 'u' || e.key === 'U')) || // View Source
        e.key === 'F12' || // DevTools
        (e.ctrlKey && e.shiftKey && (e.key === 'i' || e.key === 'I')) || // DevTools
        (e.ctrlKey && e.shiftKey && (e.key === 'j' || e.key === 'J')) || // DevTools Console
        (e.ctrlKey && e.shiftKey && (e.key === 'c' || e.key === 'C')) // DevTools Inspector
      ) {
        e.preventDefault();
        alert('⚠️ ACTION BLOCKED!\n\nThis action is disabled to protect copyrighted content.\nPretty Planet Travels & Events - All Rights Reserved.');
        return false;
      }
    };

    // Disable drag for images
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
        alert('⚠️ IMAGE PROTECTED!\n\nImages on this website are copyrighted and cannot be downloaded or copied.');
        return false;
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);
    document.addEventListener('copy', handleCopy);
    document.addEventListener('cut', handleCut);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('dragstart', handleDragStart);

    // Disable print screen (show warning)
    const checkPrintScreen = () => {
      alert('⚠️ SCREENSHOT DETECTED!\n\nThis website content is protected.\nUnauthorized reproduction is prohibited.');
    };

    // Add CSS to disable text selection
    const style = document.createElement('style');
    style.innerHTML = `
      * {
        -webkit-user-select: none !important;
        -moz-user-select: none !important;
        -ms-user-select: none !important;
        user-select: none !important;
      }
      
      input, textarea {
        -webkit-user-select: text !important;
        -moz-user-select: text !important;
        -ms-user-select: text !important;
        user-select: text !important;
      }
      
      img {
        pointer-events: none !important;
        -webkit-user-drag: none !important;
        -khtml-user-drag: none !important;
        -moz-user-drag: none !important;
        -o-user-drag: none !important;
        user-drag: none !important;
      }
    `;
    document.head.appendChild(style);

    // Console warning for developers
    console.log('%c⚠️ WARNING - COPYRIGHT PROTECTED', 'color: red; font-size: 24px; font-weight: bold;');
    console.log('%cThis website and all its content are protected by copyright law.', 'color: red; font-size: 16px;');
    console.log('%cUnauthorized copying, extraction, or reproduction is STRICTLY PROHIBITED.', 'color: red; font-size: 16px;');
    console.log('%c© Pretty Planet Travels & Events - All Rights Reserved', 'color: red; font-size: 14px; font-weight: bold;');

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
      document.removeEventListener('copy', handleCopy);
      document.removeEventListener('cut', handleCut);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('dragstart', handleDragStart);
      if (style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, []);

  return null; // This component doesn't render anything
};

export default ContentProtection;
