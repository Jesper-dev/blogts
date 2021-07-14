import React, { useState } from "react";
import { postsRef } from "../../firebase";

interface Item {
  id: string;
}

class Post {
  title: string;
  text: string;
  date: string;
  id: string;

  constructor(title: string, text: string, date: string) {
    this.title = title;
    this.text = text;
    this.date = date;
    this.id = Date.now().toString();
  }

  addPost(item: Item) {
    postsRef.child(item.id).set(item);
  }
}

const ControlPanel = () => {
  const [state, setState] = useState<{
    title: string;
    text: string;
    popup: boolean;
  }>({
    title: "",
    text: "",
    popup: false,
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let date: Date = new Date();
    let dateString = date.toString();
    let postItem = new Post(
      state.title,
      state.text,
      dateString.slice(0, 21).trim()
    );
    console.log("New Post Item Is: ", postItem);
    setState((prevState) => ({ ...prevState, title: "" }));
    setState((prevState) => ({ ...prevState, text: "" }));
    // postsRef.child(postItem.id).set(postItem);
    postItem.addPost(postItem);
    setState((prevState) => ({ ...prevState, popup: true }));
    setTimeout(() => {
      setState((prevState) => ({ ...prevState, popup: false }));
    }, 2000);
  };

  return (
    <section className="controlPanelSection">
      <form onSubmit={(e) => onSubmit(e)}>
        <label htmlFor="title">
          title:
          <input
            type="text"
            id="title"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setState((prevState) => ({ ...prevState, title: e.target.value }))
            }
            value={state.title}
            placeholder="Hello Jesper"
          />
        </label>
        <label htmlFor="text">
          text:
          <textarea
            id="text"
            value={state.text}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setState((prevState) => ({ ...prevState, text: e.target.value }))
            }
            placeholder="Write here Jesper"
          />
        </label>
        <button>Submit</button>
      </form>
      {state.popup ? <span>Post added with success</span> : null}
    </section>
  );
};

export default ControlPanel;
