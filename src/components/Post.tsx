import { Link } from "react-router-dom";

interface Props {
  title?: string;
  text?: string;
  date?: Date;
  id?: string;
}

const Post = ({ title, text = "", date, id }: Props): JSX.Element => {
  return (
    <div className="post">
      <div className="titleContainer">
        <h1>{title}</h1>
      </div>
      <p>{text.slice(0, 200) + "..."}</p>
      <div className="bottomContainer">
        <span>
          <strong>{date}</strong>
        </span>
        <Link to={`/post/${id}`}>Read more</Link>
        {/* <button>Read More</button> */}
      </div>
    </div>
  );
};

export default Post;
