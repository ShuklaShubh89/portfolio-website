import React from "react";
import { Jumbotron } from "./migration";
import Figure from 'react-bootstrap/Figure';

const Certification = ({ heading, img, imageSize }) => {
  return (
    <Jumbotron
      id="certifications"
      className="m-0"
      style={{ backgroundColor: 'rgba(240, 240, 240)' }}
    >
      <h2 className="display-4 pb-5 text-center">{heading}</h2>
        <div className="col-md-12 text-center">
            { img.map((value, index) => {
              return (
                <Figure>
                <Figure.Image
                  width={imageSize.width}
                  height={imageSize.height}
                  alt="171x180"
                  src={value.img}
                />
                <Figure.Caption>
                  <p class="text-center">{value.caption}<br/>Expires: {value.expires}</p>
                </Figure.Caption>
                </Figure>
                );
            })};
        </div>
    </Jumbotron>
  );
};

export default Certification;
