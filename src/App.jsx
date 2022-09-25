import { useState } from "react";
import "./App.css";
import Silence1 from "./components/Silence1";
import City from "./components/City";
import Silence2 from "./components/Silence2";

function App() {
  return (
    <div className="App bg-slate-200 bg-primary font-montserrat overflow-hidden">
      <Silence1 />
      <City />
      <Silence2 />
    </div>
  );
}

export default App;
