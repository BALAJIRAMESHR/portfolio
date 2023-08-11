
import bala from "./bala.jpg";

import TypedComponent from './TypedComponent';

import "./Home.css";



const Home = () => {

    return (
           
        <div>
            
            <section className="hidden">
                <div id="main">
                    <section id="home">
                        <div className="home-row">
                            <h1>Hi, This is <br/>Balaji<span></span></h1><br/>
                            <p>i'm <span className="auto-input"><TypedComponent/></span></p>
                            
                            <img src={bala} alt="bala" className="bala"></img> 
                                
                        </div>
                    </section>
                
                    
                    
                </div>     
                
            </section>
           
            
            
            
        </div>
        

        
            
        
                                    
                                 
    );
}

export default Home;