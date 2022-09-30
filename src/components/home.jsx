import React from "react";

function Home(props) {
  return (
    <div className="d-flex justify-content-center align-items-center mt-3 flex-column">
      <div className="mb-3">
        <label for="exampleInputEmail1" className="form-label text-light">
          Enter Text or Sentence
        </label>
        <input
          type="email"
          className="form-control text_input_bg_color"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div>
        <img
          className="img-thumbnail combined-image"
          src="https://cdn.pixabay.com/photo/2014/12/21/23/49/couch-576134__340.png"
          alt="image 1"
        />
      </div>
      <div className="d-flex flex-wrap align-items-center justify-content-center mt-2">
        <div className="logo-title-link d-flex align-items-center flex-column c-pointer m-2">
          <img
            className="img-thumbnail home-page-thumbnail"
            src="https://cdn.pixabay.com/photo/2017/01/31/23/48/skull-2028286__340.png"
            alt="image 1"
          />
        </div>
        <div className="logo-title-link d-flex align-items-center flex-column c-pointer m-2">
          <img
            className="img-thumbnail home-page-thumbnail"
            src="https://cdn.pixabay.com/photo/2016/04/01/12/00/automobile-1300467__340.png"
            alt="image 1"
          />
        </div>
        <div className="logo-title-link d-flex align-items-center flex-column c-pointer m-2">
          <img
            className="img-thumbnail home-page-thumbnail"
            src="https://cdn.pixabay.com/photo/2013/07/13/12/03/banknotes-159085__340.png"
            alt="image 1"
          />
        </div>
        <div className="logo-title-link d-flex align-items-center flex-column c-pointer m-2">
          <img
            className="img-thumbnail home-page-thumbnail"
            src="https://cdn.pixabay.com/photo/2017/01/31/15/37/evergreen-2025158__340.png"
            alt="image 1"
          />
        </div>
        <div className="logo-title-link d-flex align-items-center flex-column c-pointer m-2">
          <img
            className="img-thumbnail home-page-thumbnail"
            src="https://cdn.pixabay.com/photo/2016/03/31/17/33/chest-1293748__340.png"
            alt="image 1"
          />
        </div>
        <div className="logo-title-link d-flex align-items-center flex-column c-pointer m-2">
          <img
            className="img-thumbnail home-page-thumbnail"
            src="https://cdn.pixabay.com/photo/2013/07/13/12/11/umbrella-159361__340.png"
            alt="image 1"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
