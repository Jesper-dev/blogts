import { useState } from "react";
import { postsRef } from "../firebase";

interface Props {
  postId: string;
}

class Comment {
  name: string;
  comment: string;
  id: string;
  constructor(name: string, comment: string) {
    this.name = name;
    this.comment = comment;
    this.id = Date.now().toString();
  }
}

const CommentPanel = ({ postId }: Props) => {
  const [state, setState] = useState<{ name: string; comment: string }>({
    name: "",
    comment: "",
  });

  const onSubmit = (name: string, comment: string) => {
    let newComment = new Comment(name, comment);
    setState((prevState) => ({ ...prevState, name: "", comment: "" }));
    postsRef
      .child(postId)
      .child("comments")
      .child(newComment.id)
      .set(newComment);
  };
  return (
    <div className="commentsContainer">
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
            setState((prevState) => ({ ...prevState, comment: e.target.value }))
          }
        ></textarea>
      </label>
      <button onClick={() => onSubmit(state.name, state.comment)}>
        Submit
      </button>
    </div>
  );
};

export default CommentPanel;
