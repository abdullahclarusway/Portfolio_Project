import React from "react";
import author from "../assets/Logo.png";

const About = () => {
  return (
    <div id="about" className="container py-5 about">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author..." />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about </h1>
          <p>
            I am a highly motivated frontend developer that has worked as a
            manager for the past eleven years in the areas of personnel,
            operations and logistics planning, then changed career path to web
            development recently, developed a wide range of tools for Android
            and web applications, and now aims to continue his professional
            career. Technologies I use is MERN(MongoDB, Express, ReactJS and
            NodeJS). I create responsive websites that are displayed on all
            devices desktops and smartphones. Of course, before I begin
            developing any webapp, Landing Page, Business Website or E-commerce,
            I need to have a ready-made project layout (sketch)
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
