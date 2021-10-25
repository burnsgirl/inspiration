import { React } from "react";
import "./home.css";
import rightFoot from "../../Assets/rightFoot.png";
import leftFoot from "../../Assets/leftFoot.png";
import { useHistory } from "react-router-dom";
import wind from "../../Assets/wind.png";
import cloud1 from "../../Assets/cloud1.png";
import cloud2 from "../../Assets/cloud2.png";



function Home() {

    const history = useHistory();

    const pageRoute2 = () => {
        history.push("/bestplaces");
      };

    return (
        <div>
            <section id="callToAction">
                <h1>Explore</h1>
                {/* <img id="wind" src={wind} alt="wind" />
                <img id="cloud1" src={cloud1} alt="cloud" />
                <img id="cloud2" src={cloud2} alt="cloud" /> */}
                <p>Where will your next adventure take you? &#8609;</p>
            </section>

            <div id="homepage">
                <section className="sections" id="section2" onClick={pageRoute2}>
                    <h2>Checkout the best places to go in the U.S.</h2>
                    <div id="footprints">
                        <img className="printR prints" src={leftFoot} alt="leftFoot"/>
                        <img className="printL prints" src={rightFoot} alt="rightFoot"/>
                        <img className="printR prints" src={leftFoot} alt="leftFoot"/>
                        <img className="printL prints" src={rightFoot} alt="rightFoot"/>
                        <img className="printR prints" src={leftFoot} alt="leftFoot"/>
                        <img className="printL prints" src={rightFoot} alt="rightFoot"/>
                    </div>
                </section>

                <section className="sections" id="section3">
                    <h2>Are you prepared for your trip?</h2>

                    <div id="backgroundSection3">
                        <p>Checkout these customized packing list! &#8608;</p>
                    </div>
                    
                    
                </section>
            </div>
        </div>
    )

}
    
export default Home;