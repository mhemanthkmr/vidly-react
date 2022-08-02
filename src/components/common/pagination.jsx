import React from "react";
import PropTypes from "prop-types";
import _ from "lodash";
const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pageCount = Math.ceil(itemsCount / pageSize);
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);
  return (
    <nav>
      <ul className="pagination">
        {pages.map((m) => (
          <li
            key={m}
            className={
              m === currentPage
                ? "hvr-float page-item active"
                : "hvr-float page-item "
            }
          >
            <a onClick={() => onPageChange(m)} className="page-link" href="#/">
              {m}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
Pagination.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};
export default Pagination;
