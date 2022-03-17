import React from "react";

function ImageBox(props: { src: string }) {
  return (
    <div className="imageUpload__post--image">
      <img src={props.src} alt="" />
    </div>
  );
}

export default ImageBox;
