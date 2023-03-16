import logo from "./logo.svg";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import { BrowserRouter } from "react-router-dom";
import Layout from "./component/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Navigation />
    </BrowserRouter>
  );
}

export default App;
