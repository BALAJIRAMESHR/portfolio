import React from "react";
import quiz from "./quiz.png";
import cssgen1 from "./cssgen1.png";
import dig from "./dig.png";
import todo from "./todo.png";
import bmi from "./bmi.png";
import cal from "./cal.png";
import pass from "./pass.png";
import "./Projects.css";






const Projects = () => {
    return (
        <div className="projecrtpro">
            <h1 className="header">Projects</h1>
                            
                <div className="projects"> 
                    <div className="eachto">
                        <div>Authondications</div>
                        <div>
                            
                        </div>
                        </div>
                                    
                    <div className="eachto">
                        <div>TO DO</div>
                        <div className="img">
                            <img src={todo} alt="todo"></img>
                        </div>
                        </div>
                    <div className="eachto">
                        <div>BMI Detection</div>
                        <div className="img">
                                <img src={bmi} alt="bmi"></img>
                        </div>
                    </div>
                    <div className="eachto">
                        <div>Calculator</div>
                        <div className="img">
                            <img src={cal} alt="cal"></img>
                        </div>
                    </div>
                    <div className="eachto">
                        <div>password Generator</div>
                        <div className="img">
                            <img src={pass} alt="pass"></img>
                        </div>
                        </div>
                    <div className="eachto">
                        <div>quiz</div>
                        <div className="img">
                            <img src={quiz} alt="quiz"></img>                          
                        </div> 
                    </div>
                    <div className="eachto">
                        <div>digital Clock</div>
                        <div className="img">
                            <img src={dig} alt="dig"></img>
                        </div>
                    </div>
                    <div className="eachto">
                        <div>Css Generator</div>
                            <img src={cssgen1} alt="cssgen1"></img>
                        <div className="img">
                                
                        </div>
                    </div>
                </div>
        </div>

        
    );
};

export default Projects;