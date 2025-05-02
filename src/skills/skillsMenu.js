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
              <h3>Frontend Development</h3>
              <p>Currently learning and mastering modern web technologies</p>
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
              <h3>Backend Development</h3>
              <p>Exploring server-side technologies and databases</p>
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
              <h3>More Skills Coming Soon</h3>
              <p>Stay tuned for updates on my learning journey</p>
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


