import React from "react";
import './Aboutme.css';
import { ReactComponent as Svg } from '../../arrow-down-solid.svg';

function Aboutme(){
    return(
        <div className="screen">
            <div className="content">
                <h1 className="name">Stef Boerjan</h1>
                <h1>A Full Stack Developer</h1>
            </div>
            <div className="icon">
                <Svg className="arrow-icon" />
            </div>   
        </div>
    );
}

export default Aboutme;