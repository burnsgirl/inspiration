import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home/home";
import Header from "./Components/Header/header";
import Footer from "./Components/Footer/footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>

      <Header />
      <Switch>

      <Route exact path="/" component={Home} />

      </Switch>
      <Footer />

    </Router>
  );
}

export default App;
