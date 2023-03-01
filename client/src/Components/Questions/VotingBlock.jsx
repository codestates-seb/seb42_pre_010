import styled from 'styled-components';
import { BiUpArrow, BiDownArrow } from 'react-icons/bi';
import { FaRegBookmark } from 'react-icons/fa';
import { RxCountdownTimer } from 'react-icons/rx';

const VotingWrap = styled.div`
  width: 60px;
  height: 200px;
  padding-right: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  fill: #bbbfc3;
  font-weight: 600;
  div:nth-last-child(1) {
    svg {
      width: 20px;
    }
  }
  div:nth-last-child(2) {
    svg {
      width: 16px;
    }
  }
`;

const VotingBtnBlock = styled.div`
  * {
    width: 36px;
    height: 36px;
    fill: rgb(187, 191, 195);
    pointer-events: none;
    cursor: pointer;
  }
  span {
    color: rgb(163, 167, 170);
    font-size: 21px;
  }
`;

const VotingBlock = () => {
  return (
    <VotingWrap>
      <VotingBtnBlock>
        <BiUpArrow />
      </VotingBtnBlock>
      <VotingBtnBlock>
        <span>{Math.floor(Math.random() * 100)}</span>
      </VotingBtnBlock>
      <VotingBtnBlock>
        <BiDownArrow />
      </VotingBtnBlock>
      <VotingBtnBlock>
        <FaRegBookmark />
      </VotingBtnBlock>
      <VotingBtnBlock>
        <RxCountdownTimer />
      </VotingBtnBlock>
    </VotingWrap>
  );
};

export default VotingBlock;
