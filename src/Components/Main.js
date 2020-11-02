import React from "react";
import "../Css/App.css";
import Movie from "./Movie";
import Header from "./Header";
import Navigation from "./Navigation";
import ParticlesBg from "particles-bg";

const Main = (props) => {
  
  return (
    <section className="Main">
      <Header />
      <div className="Main-content">
        <Navigation />
        <Movie {...props} />
      </div>
      <ParticlesBg type="random" bg={true}/>
    </section>
  );
};
export default Main;
