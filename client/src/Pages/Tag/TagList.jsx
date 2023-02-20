import styled from 'styled-components';

// const TagContainer = styled.div`
//   border-radius: 3%;
// `;

const TagListBlock = styled.div`
  /* display: flex;
  flex-direction: column; */
  border: 1px solid #d8d8d8;
  border-radius: 3px;
  width: 250px;
  height: 160px;
  font-size: small;

  .tag {
    background: #e1ecf4;
    width: min-content;
    padding: 5px;
    color: #39739d;
    border-radius: 4px;
    position: relative;
    top: 10px;
    left: 10px;
  }

  .tagText {
    position: relative;
    padding: 10px;
    top: 10px;
  }
`;

const TagList = ({ tag }) => {
  return (
    // <TagContainer>
    <TagListBlock>
      <div className="tag">{tag.tag}</div>
      <div className="tagText">{`${tag.text.slice(0, 250)}...`}</div>
    </TagListBlock>
    // </TagContainer>
  );
};

export default TagList;
