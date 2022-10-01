import React from "react";

function Pagination({
  pageSize,
  currentPage,
  onPageNoClick,
  itemsCount,
  ariaLabel,
  maxVisiblePageNos,
}) {
  if (!maxVisiblePageNos) {
    maxVisiblePageNos = 5;
  }

  const totalPages = Math.ceil(itemsCount / pageSize);
  const pageAppendCount = maxVisiblePageNos - 2;
  const pageAppendAtOneDirectionCount = Math.floor(pageAppendCount / 2);

  const pages = [...Array(pageAppendCount).keys()].map((i) => {
    const startPage = currentPage - pageAppendAtOneDirectionCount;
    const lastPage = currentPage + pageAppendAtOneDirectionCount;
    if (startPage < 2) {
      const paginationPageNo = i + 2;
      return paginationPageNo;
    } else if (lastPage >= totalPages) {
      const paginationPageNo = totalPages - pageAppendCount + i;
      return paginationPageNo;
    } else return currentPage + i - pageAppendAtOneDirectionCount;
  });

  console.log("pages :>> ", pages);
  console.log(
    "pageAppendAtOneDirectionCount :>> ",
    pageAppendAtOneDirectionCount
  );
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
        <li className="page-item">
          <button
            className={"page-link" + (currentPage === 1 ? " active" : "")}
            onClick={() => onPageNoClick(1)}
          >
            1
          </button>
        </li>
        {maxVisiblePageNos < totalPages && (
          <li className="page-item">
            <button className="page-link" disabled>
              ...
            </button>
          </li>
        )}
        {pages.map((p, i) => {
          return (
            <li key={i} className="page-item">
              <button
                className={"page-link" + (currentPage === p ? " active" : "")}
                onClick={() => onPageNoClick(p)}
              >
                {p}
              </button>
            </li>
          );
        })}
        {maxVisiblePageNos < totalPages && (
          <li className="page-item">
            <button className="page-link" disabled>
              ...
            </button>
          </li>
        )}
        <li className="page-item">
          <button
            className={
              "page-link" +
              (currentPage === Math.ceil(itemsCount / pageSize)
                ? " active"
                : "")
            }
            onClick={() => onPageNoClick(Math.ceil(itemsCount / pageSize))}
          >
            {Math.ceil(itemsCount / pageSize)}
          </button>
        </li>
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
