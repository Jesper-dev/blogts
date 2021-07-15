import { useEffect, useState } from "react";
import { postsRef } from "../firebase";
import { RouteComponentProps } from "react-router-dom";

type TParams = { id: string };

interface Object {
  title?: string;
  text?: string;
  date?: Date;
  id?: string;
}

const PostPage = ({ match }: RouteComponentProps<TParams>) => {
  const [state, setState] = useState<{ post: Object }>({ post: {} });
  useEffect(() => {
    postsRef.child(match.params.id).on("value", (snapshot) => {
      setState((prevState) => ({ ...prevState, post: snapshot.val() }));
    });
  }, []);
  return (
    <div>
      <h1>{state.post.title}</h1>
      <p>{state.post.text}</p>
    </div>
  );
};

export default PostPage;
