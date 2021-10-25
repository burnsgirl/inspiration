import { React } from "react";
import "./home.css";
import rightFoot from "../../Assets/rightFoot.png";
import leftFoot from "../../Assets/leftFoot.png";
import { useHistory } from "react-router-dom";



function Home() {

    const history = useHistory();

    const pageRoute2 = () => {
        history.push("/bestplaces");
      };

    return (
        <div>
            <section id="callToAction">
                <h1>Explore</h1>
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