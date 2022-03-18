import React, { useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import ImageBox from "./components/ImageBox";

function App() {
  const inpRef = useRef<HTMLInputElement>(null);
  const [imageList, setImageList] = useState<string[]>([]);
  console.log(imageList);
  const inpRefClick = () => {
    inpRef.current?.click();
  };
  const inpRefChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.currentTarget.value) {
      let elem = e.currentTarget.value;
      setImageList((prev) => [...prev, elem]);
    }
  };
  return (
    <section>
      <div className="imageUpload">
        {imageList.length === 0 && (
          <div className="imageUpload__content">
            There is no image.
            <br />
            Post your first photo.
          </div>
        )}
        <input
          className="imageUpload__input"
          type="file"
          ref={inpRef}
          onChange={inpRefChange}
        />
        <div className="imageUpload__post--button" onClick={inpRefClick}>
          +
        </div>
        <ImageBox src="" />
      </div>
    </section>
  );
}

export default App;
