import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home/home";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import Blog from "./Pages/Blog/blog";
import Guides from "./Pages/Guides/guides";
import Lists from "./Pages/Lists/lists";
import Places from "./Pages/Places/places";
import Beach from "./Pages/Lists/Beach/beach";
import Camping from "./Pages/Lists/Camping/camping";
import Desert from "./Pages/Lists/Desert/desert";
import Hiking from "./Pages/Lists/Hiking/hiking";
import International from "./Pages/Lists/International/international";
import Mountains from "./Pages/Lists/Mountains/mountains";
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
      <Route exact path="/beach" component={Beach} />
      <Route exact path="/camping" component={Camping} />
      <Route exact path="/desert" component={Desert} />
      <Route exact path="/hiking" component={Hiking} />
      <Route exact path="/international" component={International} />
      <Route exact path="/mountains" component={Mountains} />

      </Switch>
      <Footer />

    </Router>
  );
}

export default App;
