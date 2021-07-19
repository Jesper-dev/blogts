interface Provider {
  name?: string;
  comment?: string;
  id?: string;
  date?: string;
}

interface Props {
  list?: Array<Provider>;
}

const Comments = ({ list }: Props) => {
  return (
    <div className="commentsContainer">
      {list?.map((item, i) => {
        return (
          <div key={i} className="commentItem">
            <h2>{item.name}</h2>
            <p>{item.comment}</p>
            <span>{item.date}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
