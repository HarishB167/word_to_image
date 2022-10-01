import React, { useEffect, useState } from "react";
import {
  getAutoCompleteWords,
  getImagesForWords,
  getMergedImageUrl,
} from "../services/fakeWordToImageService";

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
      const completeWords = getInputBeforeLastWord().trim().split(",");
      completeWords.pop();
      setImageUrls(await getImagesForWords(completeWords));
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
        <label htmlFor="exampleInputEmail1" className="form-label text-light">
          Enter Text or Sentence
        </label>
        <input
          type="text"
          list="wordListOptions"
          className="form-control text_input_bg_color"
          id="words"
          value={inputData}
          onChange={(e) => setInputData(e.currentTarget.value)}
        />
        {autoCmpWrdLst.length !== 0 && (
          <datalist id="wordListOptions">
            {autoCmpWrdLst.map((item, idx) => (
              <option key={idx} value={getInputBeforeLastWord() + item}>
                {item}
              </option>
            ))}
          </datalist>
        )}
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
