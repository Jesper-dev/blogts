import React from "react";
import { postsRef } from "../firebase";

const Home = () => {
  console.log(postsRef);
  return (
    <div>
      <h1>Home lol</h1>
    </div>
  );
};

export default Home;
