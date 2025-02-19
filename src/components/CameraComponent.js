import React, { useRef, useState } from 'react';
import Webcam from 'react-webcam';

const CameraComponent = ({ onCapture }) => {
  const webcamRef = useRef(null);
  const [image, setImage] = useState(null);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImage(imageSrc);
    onCapture(imageSrc);
  };

  return (
    <div>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      <button onClick={capture}>Capturar Foto</button>
      {image && <img src={image} alt="Captura" />}
    </div>
  );
};

export default CameraComponent;