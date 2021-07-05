import React from "react";
import "./Image.scss"

const Image = ({ number }) => {
    const classNameOption = `Image${number}`
    return <div className={classNameOption}/>
};
export default Image;
