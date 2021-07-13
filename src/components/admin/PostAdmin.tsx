import React from "react";
import { postsRef } from "../../firebase";

interface Props {
  title?: string;
  text?: string;
  date?: Date;
  id?: string;
}

const PostAdmin = ({ title = "", text = "", date }: Props): JSX.Element => {
  // let ID = id ? id : undefined;
  const deletePost = (title: string) => {
    postsRef.child(title).remove();
    console.log("Deleted");
  };
  return (
    <div className="postAdmin">
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
      <button onClick={() => deletePost(title)}>Delete</button>
    </div>
  );
};

export default PostAdmin;
