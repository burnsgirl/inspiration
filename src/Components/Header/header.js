import { React } from "react";
import "./header.css";
import cloudd from "../../Assets/Header/nav-cloud.jpeg";
import { useHistory } from "react-router-dom";



function Header() {

    const history = useHistory();

    const pageRoute2 = () => {
        history.push("/blog");
      };

    const pageRoute1 = () => {
       history.push("/");
        };

    const pageRoute3 = () => {
        history.push("/places");
      };

    const pageRoute4 = () => {
        history.push("/guides");
      };



    return (
        <div id="header">
            <ul>
                <div id="images" onClick={pageRoute1}>
                    <li>Home</li>
                </div>

                <div id="images" onClick={pageRoute2}>
                    <li>Blog</li>
                </div>

                <div id="images" onClick={pageRoute3}>
                    <li>Places</li>
                </div>

                <div id="images" onClick={pageRoute4}>
                    <li>Guides</li>
                </div>

                {/* <img className="nav-cloud" src={cloudd} /> */}
            </ul>
        </div>
    )

}
    
export default Header;
