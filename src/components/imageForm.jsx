import React, { useState } from "react";
import Joi from "joi-browser";
import { toast } from "react-toastify";
import { saveImage } from "../services/fakeWordToImageService";

const schema = {
  word: Joi.string().required().label("Word"),
  imageLink: Joi.string().uri().required().label("Image link"),
};

function ImageForm(props) {
  const [data, setData] = useState({ word: "", imageLink: "" });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const result = Joi.validate(data, schema, {
      abortEarly: false,
    });
    if (!result.error) return null;

    const errors = {};

    for (let item of result.error.details) errors[item.path[0]] = item.message;

    return errors;
  };

  const validateProperty = ({ name, value }) => {
    const obj = { [name]: value };
    const newSchema = { [name]: schema[name] };
    const { error } = Joi.validate(obj, newSchema);
    return error ? error.details[0].message : null;
  };

  const handleChange = ({ currentTarget: input }) => {
    const newErrors = { ...errors };
    const errorMessage = validateProperty(input);
    if (errorMessage) newErrors[input.name] = errorMessage;
    else delete newErrors[input.name];

    const newData = { ...data };
    newData[input.name] = input.value;
    setData(newData);
    setErrors(newErrors);
  };

  const doSubmit = (e) => {
    e.preventDefault();
    if (!validate()) {
      saveImage(data.word, data.imageLink);
      toast.success("Image saved successfully.");
      setData({ word: "", imageLink: "" });
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center mt-3 flex-column">
      <form>
        <div className="mb-3 word_input_group">
          <label htmlFor="word" className="form-label text-light">
            Enter Word
          </label>
          <input
            type="text"
            className="form-control text_input_bg_color"
            id="word"
            name="word"
            value={data.word}
            onChange={handleChange}
          />
          {errors.word && (
            <div className="bg-danger p-2 text-white bg-opacity-50 rounded-2">
              {errors.word}
            </div>
          )}
        </div>
        <div className="mb-3 word_input_group">
          <label htmlFor="imageLink" className="form-label text-light">
            Enter Image Link
          </label>
          <input
            type="url"
            className="form-control text_input_bg_color"
            id="imageLink"
            name="imageLink"
            value={data.imageLink}
            onChange={handleChange}
          />
          {errors.imageLink && (
            <div className="bg-danger p-2 text-white bg-opacity-50 rounded-2">
              {errors.imageLink}
            </div>
          )}
        </div>
        <button
          type="submit"
          className="btn btn-success"
          onClick={doSubmit}
          disabled={validate()}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default ImageForm;
