import { useState } from "react";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const Language = ({ name, img, options }) => {
  const [showImage, setShowImage] = useState(true);

  // console.log(name, img, options);

  // console.log(showImage);

  return (
    <Container
      style={{ backgroundColor: "peachpuff" }}
      className="p-4 rounded-4 mt-2 h-100 lang-card"
      onClick={() => setShowImage(!showImage)}
      type="button"
    >
      {showImage && (
        <Container>
          <Image className="lang-logo" src={img} width="60%"></Image>
          <h3 className="display-6">{name}</h3>
        </Container>
      )}

      {!showImage && (
        <ul className="h-100 d-flex flex-column justify-content-center">
          {options.map((item) => {
            return <li className="h5 text-start">{item}</li>;
          })}
        </ul>
      )}
    </Container>
  );
};

export default Language;
