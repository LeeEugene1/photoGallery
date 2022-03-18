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
    if (e.currentTarget.files?.[0]) {
      let file = e.currentTarget.files[0];
      //   console.log(file);

      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        setImageList((prev) => [...prev, e.target?.result as string]);
      };
    }
  };
  return (
    <section>
      <div className={"imageUpload " + (imageList.length > 0 && "row")}>
        {imageList.length === 0 && (
          <div className="imageUpload__content">
            There is no image.
            <br />
            Drag or click to post your photo.
          </div>
        )}
        <input
          className="imageUpload__input"
          type="file"
          ref={inpRef}
          onChange={inpRefChange}
        />
        {imageList.map((el, index) => (
          <ImageBox src={el} key={el + index} />
        ))}
        <div className="imageUpload__post--button" onClick={inpRefClick}>
          +
        </div>
      </div>
    </section>
  );
}

export default App;
