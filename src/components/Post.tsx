interface Props {
  title?: string;
  text?: string;
  date?: Date;
  id?: string;
}

const Post = ({ title, text, date, id }: Props): JSX.Element => {
  return (
    <div className="post">
      <div className="titleContainer">
        <h1>{title}</h1>
      </div>
      <p>{text}</p>
      <span>
        <strong>{date}</strong>
      </span>
    </div>
  );
};

export default Post;
