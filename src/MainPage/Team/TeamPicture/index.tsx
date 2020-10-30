import React, { useState, memo } from "react";

import { Card, CardTitle, CardImg, CardImgOverlay } from "reactstrap";

import "./index.css";

type Props = {
  name: string;
  image: string;
  about: string;
};

const TeamPicture = ({ name, image, about }: Props): JSX.Element => {
  const [showAbout, setShowAbout] = useState<boolean>(false);
  return (
    <li className={`question-group ${showAbout ? "is-open" : ""}`}>
      <Card
        className="figure fade question"
        onClick={() => setShowAbout(!showAbout)}
      >
        {/* eslint-disable import/no-dynamic-require */}
        <CardImg
          className="img"
          src={`${require(`../../../images/team/${image}`)}`}
        />
        {/* eslint-enable import/no-dynamic-require */}
        <CardImgOverlay>
          <CardTitle className="figcaption">{name}</CardTitle>
        </CardImgOverlay>
      </Card>
      <div
        className="answer"
        style={{
          maxHeight: showAbout ? "500px" : 0,
        }}
      >
        <p>{about}</p>
      </div>
    </li>
  );
};

export default memo<Props>(TeamPicture);
