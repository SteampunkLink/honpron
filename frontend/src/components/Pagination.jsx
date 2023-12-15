import { Link } from "react-router-dom";
import {
  BiSolidLeftArrowSquare,
  BiSolidRightArrowSquare,
} from "react-icons/bi";

const Pagination = ({ page, pages, link }) => {
  return (
    pages > 1 && (
      <div className="display-box">
        <div className="pagination">
          <Link
            to={`${link}/${Number(page) - 1}`}
            className={Number(page) === 1 ? "disabled-link" : null}
            title="Previous"
          >
            <BiSolidLeftArrowSquare />
          </Link>
          <p>{page}</p>
          <Link
            to={`${link}/${Number(page) + 1}`}
            className={Number(page) === Number(pages) ? "disabled-link" : null}
            title="Next"
          >
            <BiSolidRightArrowSquare />
          </Link>
        </div>
      </div>
    )
  );
};

export default Pagination;
