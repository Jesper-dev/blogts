import React from "react";
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
  // let ID = id ? id : undefined;
  // console.log(id);
  const deletePost = (id: string) => {
    console.log(id);
    postsRef.child(id).remove();
    console.log("Deleted");
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
