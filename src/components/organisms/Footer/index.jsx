import React from "react";
import './index.css';

const Footer = () => {
  return (
    <footer className="footer">
      <a
        href="https://filipecheverrya.github.io/"
        target="_blank"
        title="Filipe Echeverrya"
        rel="noopener noreferrer"
        className="footer-text"
        aria-label="developer-link"
      >
        Created by
        <strong className="footer-strong">Filipe Echeverrya</strong>
        <img
          src="https://filipecheverrya.github.io/logo192.png"
          alt="Filipe Echeverrya"
          className="footer-img"
          aria-label="developer-img"
        />
      </a>
    </footer>
  );
}

export { Footer };