import './App.css';
import React from "react";
import Header from "./header/Header";
import Main from "./Main/Main";
import Skills from "./skills/Skills";
import Works from "./Works/Works";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Works />
      <Contacts />
      <Footer/>
    </div>
  );
}

export default App;
