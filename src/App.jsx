import './App.css'

// Components
import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";

// Functions and utilities
import { Outlet } from "react-router-dom";
import { useState } from 'react';
import userInputContext from "./utils/userInput.js";
import { Provider } from 'react-redux';
import reduxStore from "./utils/reduxStore.js";

function App() {
  let [userInput,setUserInput]=useState("")

  return (
    <userInputContext.Provider value={{userInput:userInput,setUserInput:setUserInput}}>
      <Provider store={reduxStore}>
      <Header/>
      <Outlet/>
      </Provider>
    </userInputContext.Provider>
  )
}

export default App;
