import React from "react";

interface Props {
  title?: string;
  text?: string;
  date?: Date;
}

const PostAdmin = ({ title, text, date }: Props): JSX.Element => {
  return (
    <div className="postAdmin">
      <h1>{title}</h1>
      <p>{text}</p>
      <span>{date}</span>
      <button>Delete</button>
    </div>
  );
};

export default PostAdmin;
