import "./global.scss";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import PostPage from "./pages/PostPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  // const postList = [
  //   { title: "Test Post", text: "Test Post Here Lol", date: "2021-07-12" },
  // ];

  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/jesperp-admin-8i" component={Admin} />
          <Route exact path="/post/:id" component={PostPage} />
          <Route component={NotFound} />
        </Switch>
        {/* {postList.map((item, i) => {
        return (
          <Post key={i} title={item.title} text={item.text} date={item.date} />
        );
      })} */}
      </Router>
    </main>
  );
}

export default App;
