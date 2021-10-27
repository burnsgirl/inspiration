import { React } from "react";
import "./guides.css";
import { useHistory } from "react-router-dom";

function Guides() {

    const history = useHistory();

    return (
        <div>
            <section id="guidesLists">
                <h1>Guides</h1>
            </section>

            <section id="guidesBody">
                <div>
                    <h1>The Place To Start If You Don't Know Where To Start!</h1>
                </div>

                <div id="guideCards">

                    <div id="guideCard1">
                        <div className="cardStyle">
                        <img id="card11" />
                        <p id="card11p">Location</p>
                        </div>
                        <div className="cardStyle">
                        <img id="card12" />
                        <p id="card12p">Weather</p>
                        </div>
                        
                    </div>

                    {/* <div id="guideCard2">
                        <img id="card21"/>
                        <p>Lists</p>
                        <img id="card22"/>
                        <p>How To Get There</p>
                        <img id="card23"/>
                        <p>Pet Friendly</p>
                    </div>

                    <div id="guideCard3">
                        <img id="card31"/>
                        <p>What To Do</p>
                        <img id="card32"/>
                        <p>Kid Friendly</p>
                    </div> */}

                </div>

            </section>


        </div>
    )
}

export default Guides;