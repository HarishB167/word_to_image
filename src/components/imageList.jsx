import React, { useEffect, useState } from "react";
import {
  deleteImageWithId,
  getImagesCount,
  getImagesListForPageNo,
} from "../services/wordToImageService";
import Pagination from "./common/pagination";
import Modal from "./common/modal";

const pageSize = 10;

function ImageList(props) {
  const [data, setData] = useState([]);
  const [totalImages, setTotalImages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemToDelete, setItemToDelete] = useState();

  async function loadData() {
    const imagesCount = await getImagesCount();
    setTotalImages(imagesCount);
    const ls = await getImagesListForPageNo(currentPage, pageSize);
    setData(ls);
  }

  useEffect(() => {
    loadData();
  }, []);

  async function doPageChange() {
    const ls = await getImagesListForPageNo(currentPage, pageSize);
    setData(ls);
  }

  useEffect(() => {
    doPageChange();
  }, [currentPage]);

  useEffect(() => {
    if (currentPage > Math.ceil(totalImages / pageSize)) setCurrentPage(1);
    doPageChange();
  }, [totalImages]);

  const handleDelete = async () => {
    if (itemToDelete) {
      await deleteImageWithId(itemToDelete);
      setItemToDelete(null);
      const imagesCount = await getImagesCount();
      setTotalImages(imagesCount);
    }
  };

  return (
    <div className="container container_max-width_500px">
      <Modal
        id="modalPopup"
        title="Delete"
        body="Are you sure you want to delete this item?"
        action={handleDelete}
        actionMessage="Delete"
      ></Modal>
      <Pagination
        pageSize={pageSize}
        currentPage={currentPage}
        itemsCount={totalImages}
        onPageNoClick={setCurrentPage}
      />
      <table className="table table-success table-scroll">
        <thead className="thead-scroll">
          <tr className="tr-scroll">
            <th scope="col text-center">Label</th>
            <th scope="col text-center">Image</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody className="tbody-scroll">
          {data.map((item, idx) => (
            <tr key={idx} className="tr-scroll align-middle">
              <td className="text-center">
                <a href="#" className="text-decoration-none text-primary">
                  {item.label}
                </a>
              </td>
              <td>
                <div className="logo-title-link d-flex align-items-center flex-column c-pointer m-2">
                  <img
                    className="img-thumbnail home-page-thumbnail"
                    src={item.url}
                    alt={item.label}
                  />
                </div>
              </td>

              <td>
                <div className="d-flex flex-column align-items-center">
                  <button
                    className="btn btn-warning btn-sm mb-2"
                    onClick={() =>
                      props.history.push(`/edit-image/${item.id}/`)
                    }
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => setItemToDelete(item.id)}
                    data-bs-toggle="modal"
                    data-bs-target="#modalPopup"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ImageList;
