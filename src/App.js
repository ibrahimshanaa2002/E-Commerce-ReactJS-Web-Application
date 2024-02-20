import "./App.css";
import Login from "./components/Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Login} />
      </Router>
      <Navbar></Navbar>
    </>
  );
}

export default App;
