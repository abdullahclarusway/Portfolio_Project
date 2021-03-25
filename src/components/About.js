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
            {/* Hello! I am Abdullah. I have been developing websites for 1 years.
            I'm Full-Stack Web Developer. Technologies I use is MERN(MongoDB,
            Express, ReactJS and NodeJS). I create responsive websites that are
            displayed on all devices desktops and smartphones. Of course, before
            I begin developing any webapp, Landing Page, Business Website or
            E-commerce, I need to have a ready-made project layout (sketch). And
            I’m ready to do this for you, before we start developing your
            website, we will discuss all the details of your niche with you, I
            will conduct a survey of your competitors and make a list of their
            advantages and weaknesses. All this is necessary to give your
            customers something that your competitors do not provide, or to
            present it too, but better! After the website is finished and ready
            to deploy and sell a product or service. It is essential that your
            potential clients know about you. */}
            A highly motivated frontend developer has worked as a manager for
            the past eleven years and has worked in the areas of personnel,
            operations and logistics planning, then developed a wide range of
            tools for Android and web applications, and now aims to continue his
            professional career. Technologies he use is MERN(MongoDB, Express,
            ReactJS and NodeJS). He create responsive websites that are
            displayed on all devices desktops and smartphones. Of course, before
            he begin developing any webapp, Landing Page, Business Website or
            E-commerce, he need to have a ready-made project layout (sketch)
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
