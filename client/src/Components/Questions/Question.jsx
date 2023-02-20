const Question = ({ questionData }) => {
  return (
    <li key={questionData.id}>
      <h3>{questionData.title}</h3>
      <div>{questionData.content}</div>
      <div>
        <img src={questionData.picture} alt="user-pics" />
        <span>{questionData.username}</span>
        <span>{questionData.createdAt}</span>
      </div>
    </li>
  );
};

export default Question;
