import { postsRef } from "../../firebase";

interface Props {
  title?: string;
  text?: string;
  date?: Date;
  id?: string;
}

const PostAdmin = ({
  title = "",
  text = "",
  date,
  id = "",
}: Props): JSX.Element => {
  const deletePost = (id: string) => {
    postsRef.child(id).remove();
  };
  return (
    <div className="postAdmin">
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
      <button onClick={() => deletePost(id)}>Delete</button>
    </div>
  );
};

export default PostAdmin;
