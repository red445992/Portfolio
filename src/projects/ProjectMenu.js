import React, { Component } from 'react'
import "../styles/projectMenu.css"

export default class ProjectMenu extends Component {
  render() {
    return (
      <div className="projects-container">
        <div className="project-box">
          <div className="cloud-icon">☁️</div>
          <h2>Nothing to show babes!</h2>
          <p>Projects are brewing in the background...</p>
          <div className="loading-dots">
            <span>.</span>
            <span>.</span>
            <span>.</span>
          </div>
        </div>
      </div>
    )
  }
}
