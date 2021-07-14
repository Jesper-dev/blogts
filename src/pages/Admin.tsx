import { useState, useEffect } from "react";
import ControlPanel from "../components/admin/ControlPanel";
import PostAdmin from "../components/admin/PostAdmin";
import { postsRef } from "../firebase";

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
      {/* Innan man kommer till allt detta så ska man vara tvungen att slå ett lösenord*/}
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
  );
};

export default Admin;
