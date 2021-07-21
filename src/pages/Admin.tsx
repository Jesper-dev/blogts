import { useState, useEffect } from "react";
import ControlPanel from "../components/admin/ControlPanel";
import PostAdmin from "../components/admin/PostAdmin";
import { postsRef } from "../firebase";
import { illudRef } from "../firebase";
import { Link } from "react-router-dom";

interface Provider {
  title?: string;
  text?: string;
  date?: Date;
  id?: string;
}

const Admin = () => {
  const [state, setState] = useState<{
    list: Array<Provider>;
    loading: boolean;
    illud: boolean;
    illudText: string;
    illudValue: string;
  }>({
    list: [{}],
    loading: true,
    illud: true,
    illudText: "",
    illudValue: "",
  });
  useEffect(() => {
    postsRef.on("value", (snapshot) => {
      let items = snapshot.val();
      let array: Array<Provider> = [];
      for (const key in items) {
        array.unshift(items[key]);
      }
      setState((prevState) => ({ ...prevState, list: array, loading: false }));
    });
    illudRef.on("value", (snapshot) => {
      let value = snapshot.val();
      setState((prevState) => ({ ...prevState, illudValue: value }));
    });

    return () => {
      setState((prevState) => ({ ...prevState, loading: false }));
      setState((prevState) => ({ ...prevState, illudValue: "" }));
    };
  }, [state.loading]);

  const illudChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      illudText: e.target.value,
    }));
  };

  const illudCheck = () => {
    state.illudText === state.illudValue
      ? setState((prevState) => ({
          ...prevState,
          illud: false,
        }))
      : setState((prevState) => ({
          ...prevState,
          illud: true,
        }));
  };
  return (
    <>
      <Link to="/" className="homeButton">
        HOME
      </Link>
      {state.illud ? (
        <div className="illudContainer">
          <input
            type="password"
            onChange={(e) => illudChange(e)}
            value={state.illudText}
          />
          <button onClick={() => illudCheck()}>SUBMIT</button>
        </div>
      ) : (
        <>
          <ControlPanel />
          <section className="postSectionAdmin">
            <div className="containerAdmin">
              {state.list.map((item, i) => {
                return (
                  <PostAdmin
                    key={i}
                    title={item.title}
                    text={item.text}
                    date={item.date}
                    id={item.id}
                  />
                );
              })}
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Admin;
