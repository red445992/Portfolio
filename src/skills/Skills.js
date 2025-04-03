import React, { Component }  from "react";
import Avatar from "../avatar/Avatar";
import SkillsMenu from "./skillsMenu.js";
export default class About extends Component {
    render() {
        return (

            <>
            <Avatar page="skills"/>
            <SkillsMenu/>
            </>
        );
    }
}