import { useState } from "react";
import "./index.css";
import "./App.css";
import Header from "./02Header";
import Body from "./03Body";
import Footer from "./04Footer";

const Title2 = () => {
  return (
    <h2 id="title2" key="h2">
      calling a function using curly brackets
    </h2>
  );
};

function App() {
  return (
    <>
      <Header></Header>
      <Body></Body>
      <Footer />   
    </>
  );
}

export default App;
