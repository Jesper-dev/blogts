import { useEffect, useState } from "react";
import { postsRef } from "../firebase";
import { RouteComponentProps, Link } from "react-router-dom";

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
    <section className="pageContainer">
      <Link to="/" className="homeButton">
        HOME
      </Link>
      <div className="postContainer">
        <div className="titleContainer">
          <h1>{state.post.title}</h1>
        </div>
        <p>{state.post.text}</p>
        <div className="bottomContainer">
          <span>
            <strong>{state.post.date}</strong>
          </span>
        </div>
      </div>
    </section>
  );
};

export default PostPage;
