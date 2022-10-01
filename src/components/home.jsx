import React, { useEffect, useState } from "react";
import Autocomplete from "react-autocomplete";
import {
  getAutoCompleteWords,
  getImagesForWords,
  getMergedImageUrl,
} from "../services/wordToImageService";

function Home(props) {
  const [inputData, setInputData] = useState("");
  const [autoCmpWrdLst, setAutoCmpWrdLst] = useState([]);
  const [imageUrls, setImageUrls] = useState([]);
  const [outputImage, setOutputImage] = useState("");

  const getLastWord = () => {
    if (inputData.indexOf(",") === -1) return inputData;
    else {
      const ls = inputData.split(",");
      const lastWord = ls[ls.length - 1].trim();
      return lastWord;
    }
  };

  const getInputBeforeLastWord = () => {
    if (inputData.indexOf(",") === -1) return "";
    else {
      const ls = inputData.split(",");
      const lastWord = ls[ls.length - 1].trim();
      return inputData.substring(0, inputData.length - lastWord.length);
    }
  };

  const getImagesUrlForInput = async () => {
    if (inputData !== "" && getInputBeforeLastWord() !== "") {
      setImageUrls(await getImagesForWords(getInputBeforeLastWord()));
    } else setImageUrls([]);
  };

  useEffect(() => {
    async function onChangeInput() {
      if (inputData.length !== 0 && getLastWord(inputData).length !== 0) {
        const wordList = await getAutoCompleteWords(getLastWord(inputData));
        setAutoCmpWrdLst(wordList);
      } else setAutoCmpWrdLst([]);
    }
    onChangeInput();
    getImagesUrlForInput();
  }, [inputData]);

  useEffect(() => {
    async function onChangeImageUrls() {
      if (imageUrls.length > 0)
        setOutputImage(await getMergedImageUrl(imageUrls));
      else setOutputImage("");
    }
    onChangeImageUrls();
  }, [imageUrls]);

  return (
    <div className="d-flex justify-content-center align-items-center mt-3 flex-column">
      <div className="mb-3 word_input_group">
        <label htmlFor="words" className="form-label text-light">
          Enter Text or Sentence
        </label>
        <Autocomplete
          id="words"
          items={autoCmpWrdLst.map((item, idx) => {
            console.log("item :>> ", getInputBeforeLastWord() + item);
            return { label: getInputBeforeLastWord() + item };
          })}
          getItemValue={(item) => item.label}
          renderItem={(item, isHighlighted) => (
            <div
              style={{
                background: isHighlighted ? "#bcf5bc" : "white",
              }}
              key={item.id}
            >
              {item.label}
            </div>
          )}
          value={inputData}
          onChange={(e) => setInputData(e.currentTarget.value)}
          onSelect={(val) => setInputData(val)}
          inputProps={{
            className: "form-control text_input_bg_color w-100",
            id: "words",
          }}
          wrapperStyle={{
            display: "block",
          }}
        />
      </div>
      <div>
        {outputImage !== "" && (
          <img
            className="img-thumbnail combined-image"
            src={outputImage}
            alt="image 1"
          />
        )}
      </div>
      <div className="d-flex flex-wrap align-items-center justify-content-center mt-2">
        {imageUrls.length > 0 &&
          imageUrls.map((imgUrl, idx) => (
            <div
              key={idx}
              className="logo-title-link d-flex align-items-center flex-column c-pointer m-2"
            >
              <img
                className="img-thumbnail home-page-thumbnail"
                src={imgUrl}
                alt={`image ${idx}`}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
