import React, { useState } from "react";

const ControlPanel = () => {
  const [state, setState] = useState<{ title: string; text: string }>({
    title: "",
    text: "",
  });
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state.title, state.text);
    setState((prevState) => ({ ...prevState, title: "" }));
    setState((prevState) => ({ ...prevState, text: "" }));
  };
  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, title: e.target.value }));
  };
  const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setState((prevState) => ({ ...prevState, text: e.target.value }));
  };

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <label htmlFor="title">
        title:
        <input
          type="text"
          id="title"
          onChange={(e) => onChangeTitle(e)}
          value={state.title}
          placeholder="Hello Jesper"
        />
      </label>
      <label htmlFor="text">
        text:
        <textarea
          id="text"
          value={state.text}
          onChange={(e) => onChangeText(e)}
          placeholder="Write here Jesper"
        />
      </label>
      <button>Submit</button>
    </form>
  );
};

export default ControlPanel;
