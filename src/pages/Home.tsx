import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import { postsRef } from "../firebase";

interface Provider {
  title?: string;
  text?: string;
  date?: Date;
}

const Home = () => {
  const [state, setState] = useState<{
    list: Array<Provider>;
    loading: boolean;
  }>({ list: [{}], loading: true });
  useEffect(() => {
    postsRef.on("value", (snapshot) => {
      let items = snapshot.val();
      let array: Array<Provider> = [];
      for (const key in items) {
        array.unshift(items[key]);
      }
      setState((prevState) => ({ ...prevState, list: array, loading: false }));
    });
  }, [state.loading]);
  return (
    <>
      <h1>Home lol</h1>
      <section>
        {state.list.map((item, i) => {
          return (
            <Post
              key={i}
              title={item.title}
              text={item.text}
              date={item.date}
            />
          );
        })}
      </section>
    </>
  );
};

export default Home;
