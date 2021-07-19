import { useEffect, useState } from "react";
import { postsRef } from "../firebase";
import { RouteComponentProps, Link } from "react-router-dom";
import CommentPanel from "../components/postPage/CommentPanel";
import Comments from "../components/postPage/Comments";

type TParams = { id: string };

interface Provider {
  name?: string | undefined;
  comment?: string | undefined;
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
  }>({ post: {}, commentList: [{}], mounted: false });

  useEffect(() => {
    let newList: Array<Provider> = [];
    setState((prevState) => ({ ...prevState, post: {} }));
    postsRef.child(match.params.id).on("value", (snapshot) => {
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
      newList = [];
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
      <CommentPanel postId={match.params.id} />
      <Comments list={state.commentList} />
    </section>
  );
};

export default PostPage;
