import React from "react";

const Skills = () => {
  return (
    <div className="skills section" id="skills">
      <span className="section-subtitle">Why Choose Me</span>
      <h2 className="section-title">My Skills</h2>
      <div className="skills__container bd-grid">
        <div className="skills__content">
          <h3 className="skills__subtitle">Frontend</h3>
          <div className="skills__data">
            <span className="skills__name">Html/css</span>
            <span className="skills__number">90%</span>
            <span className="skills__bar skills__html"></span>
          </div>
          <div className="skills__data">
            <span className="skills__name">Javascript</span>
            <span className="skills__number">80%</span>
            <span className="skills__bar skills__js"></span>
          </div>
          <div className="skills__data">
            <span className="skills__name">React</span>
            <span className="skills__number">70%</span>
            <span className="skills__bar skills__react"></span>
          </div>
          <div className="skills__data">
            <span className="skills__name">React Native</span>
            <span className="skills__number">70%</span>
            <span className="skills__bar skills__native"></span>
          </div>
        </div>
        <div className="skills__content">
          <h3 className="skills__subtitle">Backend</h3>
          <div className="skills__data">
            <span className="skills__name">Node js</span>
            <span className="skills__number">60%</span>
            <span className="skills__bar skills__node"></span>
          </div>
          <div className="skills__data">
            <span className="skills__name">Python</span>
            <span className="skills__number">60%</span>
            <span className="skills__bar skills__python"></span>
          </div>
          <div className="skills__data">
            <span className="skills__name">Mongo DB</span>
            <span className="skills__number">60%</span>
            <span className="skills__bar skills__mongo"></span>
          </div>
          <div className="skills__data">
            <span className="skills__name">Firebase</span>
            <span className="skills__number">70%</span>
            <span className="skills__bar skills__firebase"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
