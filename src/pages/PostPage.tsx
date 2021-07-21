import { useEffect, useState } from "react";
import { postsRef } from "../firebase";
import { RouteComponentProps, Link } from "react-router-dom";
import CommentPanel from "../components/postPage/CommentPanel";
import Comments from "../components/postPage/Comments";

type TParams = { id: string };

interface Provider {
  name?: string;
  comment?: string;
}

interface Object {
  title?: string;
  text?: string;
  date?: Date;
  id?: string;
  comments?: Provider;
}

const PostPage = ({ match }: RouteComponentProps<TParams>) => {
  const [state, setState] = useState<{
    post: Object;
    commentList: Array<Provider>;
    mounted: boolean;
    commentAdded: boolean;
    showPanel: boolean;
  }>({
    post: {},
    commentList: [{}],
    mounted: false,
    commentAdded: false,
    showPanel: false,
  });

  useEffect(() => {
    setState((prevState) => ({ ...prevState, commentList: [] }));
    postsRef.child(match.params.id).on("value", (snapshot) => {
      let newList: Array<Provider> = [];
      let value = snapshot.val();
      setState((prevState) => ({ ...prevState, post: snapshot.val() }));
      for (const key in value.comments) {
        newList.unshift(value.comments[key]);
      }
      setState((prevState) => ({ ...prevState, commentList: newList }));
    });

    return () => {
      setState((prevState) => ({ ...prevState, mounted: true }));
      setState((prevState) => ({ ...prevState, post: {} }));
      setState((prevState) => ({ ...prevState, commentList: [] }));
      setState((prevState) => ({ ...prevState, commentAdded: false }));
    };
  }, [state.mounted, match.params.id]);

  return (
    <section className="pageContainer">
      <Link to="/" className="homeButton">
        HOME
      </Link>
      <section className="postSection">
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
      {/* Jag ska göra så att man kan 'gömma' commentPanel */}
      <button
        className="togglePanelBtn"
        onClick={() =>
          setState((prevState) => ({
            ...prevState,
            showPanel: !state.showPanel,
          }))
        }
      >
        {state.showPanel ? "hide" : "show"}
      </button>
      {state.showPanel ? <CommentPanel postId={match.params.id} /> : null}
      <Comments list={state.commentList} />
    </section>
  );
};

export default PostPage;
