import { useState } from "react";
import "./App.css";
import Home from "./Pages/Home";
import { PropContext } from "./Store/Context";

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  return <div className="App">
    <PropContext.Provider value={{searchTerm,setSearchTerm}}>
    <Home/>
    </PropContext.Provider>
  </div>;
}

export default App;
