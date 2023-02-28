import styled from 'styled-components';
import { RxDoubleArrowLeft, RxDoubleArrowRight } from 'react-icons/rx';

const PaginationBlock = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  .icon {
    border: 1px solid #c4c4c497;
    color: #0a95ff;
  }

  .icon:hover {
    color: #17649e;

    &.bg {
      background-color: #dddddd2b;
    }
  }

  .back {
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  }

  .next {
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }

  button {
    padding: 5px;
    width: 30px;
    height: 30px;
    border: 0;
    outline: 0;
    background-color: transparent;
  }
`;

const IconBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 28.5px;
`;

const Pagination = ({
  postsPerPage,
  totalPosts,
  setCurrentPage,
  currentPage,
}) => {
  const page = Math.ceil(totalPosts / postsPerPage);
  const pageNumbers = [];

  // paginate
  const paginate = (pageNumber) => {
    if (pageNumber === 0) return;
    if (pageNumber > page) return;
    setCurrentPage(pageNumber);
  };

  for (let i = 1; i <= page; i++) {
    pageNumbers.push(i);
  }

  return (
    <PaginationBlock>
      <IconBlock
        className="icon back bg"
        onClick={() => paginate(currentPage - 1)}
      >
        <RxDoubleArrowLeft size={12} />
      </IconBlock>
      <div className="pagination">
        {pageNumbers.map((number) => (
          <button
            key={number}
            className="icon bg"
            onClick={() => paginate(number)}
          >
            {number}
          </button>
        ))}
      </div>
      <IconBlock
        className="icon next bg"
        onClick={() => paginate(currentPage + 1)}
      >
        <RxDoubleArrowRight size={12} />
      </IconBlock>
    </PaginationBlock>
  );
};

export default Pagination;
