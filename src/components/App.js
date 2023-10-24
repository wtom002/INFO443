import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Navbar.js";
import Home from "./Home.js";
import Cardio from "./Cardio.js";
import Weight from "./Weight.js";
import Flexibility from "./Flexibility.js";
import Upload from "./Upload.js";
import Footer from "./Footer.js";
import Article from "./Article.js";
import {db} from './firebase.js';
// import the function that updates the 

export function handleScroll() {
  window.scroll({
    top: document.body.offsetHeight,
    left: 0, 
    behavior: 'smooth',
  });
}

export default function App() {

//function that maps all existing cards to pages from db
// everything in db is initial state
// search bar is the function that updates state

  return(
    <div className="font-link">
      <NavBar aria-label="NavBar"/>
      <Routes>
        <Route path="/" element={<Home />} aria-label="Home"/>
        <Route path="/Cardio" element={<Cardio />} aria-label="Cardio"/>
        <Route path="/Weight" element={<Weight />} aria-label="Weight"/>
        <Route path="/Flexibility" element={<Flexibility />} aria-label="Flexibility"/>
        <Route path="/Upload" element={<Upload />} aria-label="Upload"/>
        <Route path="/Article" element={<Article />} aria-label="Article"/>
      </Routes>
      <Footer />
    </div>
  );
}
