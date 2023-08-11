
import React from "react";
import resume from "./resume.png";
import "./Resume.css"



const Resume = () => {
    return (
        <div className="resumecontent">
            <h1 className="titles">Resume</h1>
            <img src={resume} alt="bala" className="resume"></img> 
        </div>
    );
}

export default Resume;