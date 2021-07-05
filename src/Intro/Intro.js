import React from "react";
import ArrowDropDownCircleOutlinedIcon from '@material-ui/icons/ArrowDropDownCircleOutlined';
import './Intro.scss'

const Intro = () => (
    <div className="Intro">
        <div>
            <h1>
                Hey There !
            </h1>
        </div>
        <div>
            <h1>
                Get to know more
            </h1>
        </div>
        <div>
            <h1>
                About me...
            </h1>
        </div>
        <div className="Intro--dropdown">
            <ArrowDropDownCircleOutlinedIcon style={{fontSize: '70px'}}/>
        </div>
    </div>
);
export default Intro;