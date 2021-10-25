import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home/home";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Blog from "./Pages/Blog/blog";
import Guides from "./Pages/Guides/guides";
import Lists from "./Pages/Lists/lists";
import Places from "./Pages/Places/places";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>

      <Header />
      <Switch>

      <Route exact path="/" component={Home} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/guides" component={Guides} />
      <Route exact path="/lists" component={Lists} />
      <Route exact path="/places" component={Places} />

      </Switch>
      <Footer />

    </Router>
  );
}

export default App;
