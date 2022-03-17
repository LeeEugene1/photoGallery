import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import ImageBox from "./components/ImageBox";

function App() {
  return (
    <section>
      <div className="imageUpload">
        <div className="imageUpload__content">
          There is no image.
          <br />
          Post your first photo.
        </div>
        <div className="imageUpload__post--button">+</div>
        <ImageBox src="" />
      </div>
    </section>
  );
}

export default App;
