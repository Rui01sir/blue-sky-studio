import React from "react";
import {Link} from "react-router-dom"

function Homepage(){
    return(
        <div>
            <div className="Home-banner">
                <img src={`${process.env.PUBLIC_URL}/img/banner.png`} alt="banner"></img>
                <Link to=""></Link>
            </div>
        </div>
    );
        
}

export default Homepage;
