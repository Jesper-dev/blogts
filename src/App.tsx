import "./global.scss";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import NotFound from "./components/NotFound";
import PostPage from "./pages/PostPage";
import About from "./pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/jesperp-admin-8i" component={Admin} />
          <Route exact path="/post/:id" component={PostPage} />
          <Route exact path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
