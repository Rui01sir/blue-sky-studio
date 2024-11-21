import React from "react";

function LinkButton({ link, label }) {
  return (
    <a href={link} target="_blank" rel="noopener noreferrer" className="link-button">
      {label} →
    </a>
  );
}

export default LinkButton;