import React, { useState, memo } from "react";

import Figure from "react-bootstrap/Figure";

import "./index.css";

const TeamPicture = ({ name, image, about }) => {
  const [showAbout, setShowAbout] = useState(false);
  return (
    <li className={`question-group ${showAbout ? "is-open" : ""}`}>
      <Figure
        className="figure fade question"
        onClick={() => setShowAbout(!showAbout)}
      >
        <Figure.Image alt={name} src={image} className="img" thumbnail={true} />
        <Figure.Caption className="figcaption">{name}</Figure.Caption>
      </Figure>
      <div
        className="answer"
        style={{
          maxHeight: showAbout ? "500px" : 0
        }}
      >
        <p>{about}</p>
      </div>
    </li>
  );
};

export default memo(TeamPicture);
