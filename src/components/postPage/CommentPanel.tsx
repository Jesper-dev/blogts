import { useState } from "react";
import { postsRef } from "../../firebase";

interface Props {
  postId: string;
}

class Comment {
  name: string;
  comment: string;
  date: string;
  id: string;
  constructor(name: string, comment: string, date: string) {
    this.name = name;
    this.comment = comment;
    this.date = date;
    this.id = Date.now().toString();
  }
}

const CommentPanel = ({ postId }: Props) => {
  const [state, setState] = useState<{
    name: string;
    comment: string;
    error: boolean;
  }>({
    name: "",
    comment: "",
    error: false,
  });

  const onSubmit = (name: string, comment: string) => {
    if (name === "" || comment === "") {
      setState((prevState) => ({ ...prevState, error: true }));
      setTimeout(() => {
        setState((prevState) => ({ ...prevState, error: false }));
      }, 2000);
      return;
    }
    let date: Date = new Date();
    let dateString = date.toString();
    let newComment = new Comment(name, comment, dateString.slice(0, 21).trim());
    setState((prevState) => ({ ...prevState, name: "", comment: "" }));
    postsRef
      .child(postId)
      .child("comments")
      .child(newComment.id)
      .update(newComment);
  };
  return (
    <>
      <div className="commentsPanel">
        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            placeholder="Write your name here..."
            value={state.name}
            onChange={(e) =>
              setState((prevState) => ({ ...prevState, name: e.target.value }))
            }
          />
        </label>
        <label htmlFor="comment">
          Comment
          <textarea
            id="comment"
            placeholder="Write your comment here..."
            value={state.comment}
            onChange={(e) =>
              setState((prevState) => ({
                ...prevState,
                comment: e.target.value,
              }))
            }
            maxLength={160}
          ></textarea>
        </label>
        <button onClick={() => onSubmit(state.name, state.comment)}>
          Submit
        </button>
      </div>
      {state.error ? (
        <span className="popup">Neither name or comment can be empty</span>
      ) : null}
    </>
  );
};

export default CommentPanel;
