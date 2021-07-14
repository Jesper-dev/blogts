import { useState, useEffect } from "react";
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
  const [state, setState] = useState<{
    popup: boolean;
  }>({
    popup: false,
  });

  useEffect(() => {
    setTimeout(() => {
      setState((prevState) => ({ ...prevState, popup: false }));
    }, 3000);
  }, [state.popup]);

  const deletePost = (id: string) => {
    postsRef.child(id).remove();
    setState((prevState) => ({ ...prevState, popup: true }));
  };
  return (
    <div className="postAdmin">
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
      <button onClick={() => deletePost(id)}>Delete</button>
      {state.popup ? (
        <span className="popup">Post deleted with success</span>
      ) : null}
    </div>
  );
};

export default PostAdmin;
