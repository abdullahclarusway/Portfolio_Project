import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Share from "../assets/React_Share.png";
import Netflix from "../assets/Netflix_Clone.png";
import Job from "../assets/Job_Search.png";
import Clothing from "../assets/Lighthouse_Clothing.png";
import MyLinkedIn from "../assets/LinkedIn_Clone.png";
import Facebook from "../assets/Facebook_Clone.png";

const Portfolio = () => {
  const url = {
    share: {
      link: "https://sharewithreact.vercel.app/",
      github: "https://github.com/abdullahclarusway/React_Share",
    },
    netflix: {
      link: "https://netflix-clone-with-react.vercel.app/",
      github: "https://github.com/abdullahclarusway/Netflix_Clone_with_React",
    },
    job: {
      link: "https://job-search-abdullahclarusway.vercel.app/",
      github: "https://github.com/abdullahclarusway/Job_Search_with_React",
    },
    clothing: {
      link: "https://lighthouse-clothing.vercel.app/",
      github:
        "https://github.com/abdullahclarusway/Lighthouse_Clothing_E_Commerce",
    },
    linkedIn: {
      link: "https://my-linkedln-abdullahclarusway.vercel.app/",
      github:
        "https://github.com/abdullahclarusway/Linkedln_Clone_with_REACT.JS",
    },
    facebook: {
      link: "https://facebook-clone-abdullahclarusway.vercel.app/",
      github: "https://github.com/abdullahclarusway/Facebook_Clone_with_REACT",
    },
  };
  return (
    <div className="works section" id="works">
      <span className="section-subtitle">My portfolio</span>
      <h2 className="section-title">Recent Works</h2>
      <div className="works__container bd-grid">
        <div className="works__img">
          <img src={Share} alt="work-1"></img>
          <div className="works__data">
            <a href={url.share.link} className="works__link">
              <FontAwesomeIcon icon={faLink} size="2x" className="icon" />
            </a>
            <a href={url.share.github} className="works__link">
              <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
            </a>
            <span className="works__title">React Share</span>
          </div>
        </div>
        <div className="works__img">
          <img src={Netflix} alt="work-1"></img>
          <div className="works__data">
            <a href={url.share.link} className="works__link">
              <FontAwesomeIcon icon={faLink} size="2x" className="icon" />
            </a>
            <a href={url.share.github} className="works__link">
              <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
            </a>
            <span className="works__title">Netflix IMDB Movies</span>
          </div>
        </div>
        <div className="works__img">
          <img src={Job} alt="work-1"></img>
          <div className="works__data">
            <a href={url.share.link} className="works__link">
              <FontAwesomeIcon icon={faLink} size="2x" className="icon" />
            </a>
            <a href={url.share.github} className="works__link">
              <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
            </a>
            <span className="works__title">Job Search</span>
          </div>
        </div>
        <div className="works__img">
          <img src={Clothing} alt="work-1"></img>
          <div className="works__data">
            <a href={url.share.link} className="works__link">
              <FontAwesomeIcon icon={faLink} size="2x" className="icon" />
            </a>
            <a href={url.share.github} className="works__link">
              <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
            </a>
            <span className="works__title">Lighthouse Clothing</span>
          </div>
        </div>
        <div className="works__img">
          <img src={MyLinkedIn} alt="work-1"></img>
          <div className="works__data">
            <a href={url.share.link} className="works__link">
              <FontAwesomeIcon icon={faLink} size="2x" className="icon" />
            </a>
            <a href={url.share.github} className="works__link">
              <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
            </a>
            <span className="works__title">My LinkedIn</span>
          </div>
        </div>
        <div className="works__img">
          <img src={Facebook} alt="work-1"></img>
          <div className="works__data">
            <a href={url.share.link} className="works__link">
              <FontAwesomeIcon icon={faLink} size="2x" className="icon" />
            </a>
            <a href={url.share.github} className="works__link">
              <FontAwesomeIcon icon={faGithub} size="2x" className="icon" />
            </a>
            <span className="works__title">My Facebook</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;

{
  /* <span className="section-subtitle">My portfolio</span> */
}
{
  /* <h2 className="section-title">Recent Works</h2> */
}
{
  /* <div className="works__img"> */
}
{
  /* <img src={Share} alt="work-1"> */
}
{
  /* <div className="works__data"> */
}
{
  /* <a href={url.share.link} className="works__link"><FontAwesomeIcon icon={faLink} size="2x" className="icon" /></a> */
}
{
  /* <a href={url.share.github} className="works__link"><FontAwesomeIcon icon={faGithub} size="2x" className="icon" /></a> */
}
{
  /* <span className="works__title">React Share</span> */
}
