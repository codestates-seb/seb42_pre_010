import styled from 'styled-components';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const PaginationBlock = styled.div`
  .pagination {
    display: flex;
    flex-direction: row;
    padding: 0;
  }

  nav {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  ul {
    display: flex;
    justify-content: center;
  }

  li {
    list-style: none;
    margin: 15px;
    font-size: large;
  }

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
      <nav>
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
      </nav>
    </PaginationBlock>
  );
};

export default Pagination;
