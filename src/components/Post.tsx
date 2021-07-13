interface Props {
  title?: string;
  text?: string;
  date?: Date;
}

const Post = ({ title, text, date }: Props): JSX.Element => {
  return (
    <div className="post">
      <h1>{title}</h1>
      <p>{text}</p>
      <span>
        <strong>{date}</strong>
      </span>
    </div>
  );
};

export default Post;
