import React, { Component } from 'react';
import classNames from "classnames"
import "../styles/skillsMenu.css";
import frontendIcon from "../assets/eagle-emblem.png";
import backendIcon from "../assets/hawk-emblem.png";

export default class skillsMenu extends Component {
  render() {
    return (
      <div className="skills-container">
        <div className="skills-header">
          <h1>My Learning Journey</h1>
          <p className="subtitle">Building my skills one step at a time</p>
        </div>
        
        <div className="learning-path">
          <div className="path-item">
            <div className="icon-container">
              <img src={frontendIcon} alt="Frontend" className="skill-icon" />
            </div>
            <div className="content">
              <h3>Vibe Coder</h3>
              <p>Just typing with rhythm and letting the code flow</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '70%' }}></div>
              </div>
            </div>
          </div>

          <div className="path-item">
            <div className="icon-container">
              <img src={backendIcon} alt="Backend" className="skill-icon" />
            </div>
            <div className="content">
              <h3>Digital Nomad Dev</h3>
              <p>Wandering through code forests with coffee in hand.</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '60%' }}></div>
              </div>
            </div>
          </div>

          <div className="path-item">
            <div className="icon-container">
              <div className="coming-soon">🚀</div>
            </div>
            <div className="content">
              <h3>More Vibes Loading...</h3>
              <p>Cool stuff brewing in the background—stay tuned!</p>
              <div className="progress-bar">
                <div className="progress" style={{ width: '30%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


