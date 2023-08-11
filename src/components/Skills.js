// import React from "./react";
import html from "./html.png";
import css from "./css.png";
import js from "./js.png";
import py from "./py.png";
import sql from "./sql.png";
import bootstarp from "./bootstarp.png";
import './Skills.css'

const Skills = () => {
    return (
        <div className="skills">
            <h1 class="sub-heading">Skills</h1>

            <div className="continer">
                <div className="logo">
                    <p>HTML5 </p>
                    <img src={html} alt="html"></img>
                </div>
                <div className="logo">
                    <p>Css</p>
                    <img src={css} alt="css"></img>
                </div>
                <div class="logo">
                    <p>Js</p>
                    <img src={js} alt="js"></img>
                </div>
                <div className="logo">
                    <p>Python</p>
                    <img src={py} alt="py"></img>
                </div>
                <div class="logo">
                    <p className="sqlpa">Sql</p>
                    <img src={sql} alt="sql" className="sql"></img>
                </div>
                <div className="logo">
                    <p className="boot">Bootstrap </p>
                    <img src={bootstarp} alt="bootstrap" className="boot"></img>
                </div>
                        
            </div>
        </div>
    );    
    
}

export default Skills;
