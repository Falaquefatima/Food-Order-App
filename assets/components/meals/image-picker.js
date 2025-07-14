"use client";
import classes from "./image-picker.module.css";
import { useRef } from "react";
import { useState } from "react";
import Image from "next/image";

const ImagePicker = ({ label, name }) => {
  const input = useRef();
  const [pickedImage, setPickedImage] = useState();

  function handlePickImage() {
    input.current.click();
  }
  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image picked yet</p>}
          {pickedImage && (
            <Image src={pickedImage} alt="the image selected by user" fill />
          )}
        </div>
        <input
          ref={input}
          className={classes.input}
          type="file"
          id={name}
          accept="image/png,image/jpeg"
          name={name}
          onChange={handleImageChange}
          required
        />
      </div>
      <button
        className={classes.button}
        type="button"
        onClick={handlePickImage}
      >
        Pick an image
      </button>
    </div>
  );
};

export default ImagePicker;
