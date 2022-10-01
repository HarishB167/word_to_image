import React from "react";

function Pagination({
  pageSize,
  currentPage,
  onPageNoClick,
  itemsCount,
  ariaLabel,
}) {
  return (
    <nav aria-label={ariaLabel}>
      <ul className="pagination my-1">
        <li className="page-item">
          <button
            className="page-link"
            aria-label="Previous"
            onClick={() =>
              onPageNoClick(currentPage <= 1 ? 1 : currentPage - 1)
            }
          >
            <span aria-hidden="true">&laquo;</span>
          </button>
        </li>
        {[...Array(Math.ceil(itemsCount / pageSize))].map((e, i) => {
          return (
            <li key={i} className="page-item">
              <button
                className={
                  "page-link" + (currentPage === i + 1 ? " active" : "")
                }
                onClick={() => onPageNoClick(i + 1)}
              >
                {i + 1}
              </button>
            </li>
          );
        })}
        <li className="page-item">
          <button
            className="page-link"
            aria-label="Next"
            onClick={() =>
              onPageNoClick(
                currentPage >= itemsCount / pageSize
                  ? itemsCount / pageSize
                  : currentPage + 1
              )
            }
          >
            <span aria-hidden="true">&raquo;</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Pagination;
