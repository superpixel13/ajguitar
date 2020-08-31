import React from 'react';
import '../App.css';
import AccordionLists from './AccordionLists'
import Header from './header'
import Hjumbotron from './headerJumbotron'
import Features from "./Features"
import FeedbackSection from './FeedbackSection';
import Footer from './Footer'
function App() {
  return (
    <div className="App">
      <Header />
      <Hjumbotron />
      <Features />
      <AccordionLists />
      <FeedbackSection />
      <Footer/>
    </div>
  );
}

export default App;
