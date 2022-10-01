import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import NavBar from "./components/navBar";
import Home from "./components/home";
import ImageForm from "./components/imageForm";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="main-container">
      <ToastContainer />
      <NavBar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/new-image" exact component={ImageForm} />
      </Switch>
    </div>
  );
}

export default App;
