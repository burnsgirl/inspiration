import { React } from "react";
import "./header.css";
import cloudd from "../../Assets/nav-cloud.jpeg";



function Header() {



    return (
        <div id="header">
            <ul>
                <div id="images">
                    <li>Home</li>
                </div>

                <div id="images">
                    <li>Blog</li>
                </div>

                <div id="images">
                    <li>Places</li>
                </div>

                <div id="images">
                    <li>Guides</li>
                </div>

                {/* <img className="nav-cloud" src={cloudd} /> */}
            </ul>
        </div>
    )

}
    
export default Header;
