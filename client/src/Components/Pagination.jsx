import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const PaginationBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .icon {
    width: 20px;
    height: 20px;
    margin: 5px;
  }
`;

const Pagination = ({ postPerPage, totalPosts, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <PaginationBlock>
      <IoIosArrowBack
        className="icon"
        onClick={() => paginate(currentPage - 1)}
      />
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
      <IoIosArrowForward
        className="icon"
        onClick={() => paginate(currentPage + 1)}
      />
    </PaginationBlock>
  );
};

export default Pagination;
