import React, { useState, useEffect } from "react";
var i = 0;
const Slajder = ({ galerija }) => {
  const [img, setImg] = useState(galerija[0]);
  useEffect(() => {
    setImg(galerija[0]);
  }, [galerija]);

  const nextImage = () => {
    i++;
    if (i >= galerija.length) {
      i = 0;
    }
    setImg(galerija[i]);
  };
  const prevImage = () => {
    i--;
    if (i < 0) {
      i = galerija.length - 1;
    }
    setImg(galerija[i]);
  };

  return (
    <div>
      <div className="slider-container">
        <Strelica smer='left' onClick={() => prevImage()} />
        <img className="slider-img" src={img} alt="" />

        <Strelica smer='right' onClick={() => nextImage()} />
      </div>
    </div>
  );
};

export function Strelica(props) {
  return (
    <i className={'fas fa-chevron-' + props.smer} onClick={props.onClick}></i>
  )
}

export default Slajder;
