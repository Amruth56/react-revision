import { useState } from "react";
import "./index.css";
import "./App.css";
import AppLayout from "./01appLayout";


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
  
      <AppLayout></AppLayout>
    </>
  );
}

export default App;
