import { useState } from 'react';
import styled from 'styled-components';
import TagList from './TagList';
import dummyData from './TagDummyData';
import { GoSearch } from 'react-icons/go';

const TagBlock = styled.div`
  width: 1200px;
  margin: 15px 20px 20px;

  h1 {
    font-size: x-large;
    font-weight: normal;
    margin-bottom: 20px;
  }

  .TagsListContainer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
  }
`;

const SerchBlock = styled.div`
  display: flex;
  margin: 40px 0px 20px;
  border: 1px solid #c5c5c5;
  width: 180px;
  border-radius: 3px;
  padding: 8px;

  input {
    width: 150px;
    border: none;
  }

  input:focus {
    outline: none;
  }

  .icon {
    margin-right: 5px;
  }
`;

const Tag = () => {
  const [search, setSearch] = useState('');
  const [list, setList] = useState(dummyData);

  const filtered = () => {
    const data = dummyData.filter((data) => {
      return data.tag.includes(search);
    });

    setList(data);
  };

  const handleOnSearch = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    filtered();
  };

  return (
    <TagBlock>
      <h1>Tags</h1>
      A tag is a keyword or label that categorizes your question with other,
      similar questions. Using <br />
      the right tags makes it easier for others to find and answer your
      question.
      <SerchBlock>
        <GoSearch className="icon" size={20} />
        <form>
          <input
            placeholder="Fliter by tag name"
            value={search}
            onChange={handleOnSearch}
          />
        </form>
      </SerchBlock>
      <div className="TagsListContainer">
        {list.map((tag) => (
          <TagList tag={tag} key={tag.id} />
        ))}
      </div>
    </TagBlock>
  );
};

export default Tag;
