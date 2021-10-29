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
                <div id="headerGuides">
                    <h1>The Place To Start If You Don't Know Where To Start!</h1>
                </div>

                <div id="guideCards">

                    <div id="guideCard1">
                        <div className="cardStyle" href="#">
                            <img id="card11" />
                            <p className="cardp">Location</p>
                        </div>
                        <div className="cardStyle" href="#">
                            <img id="card12" />
                            <p className="cardp">How To Get There</p>
                        </div>
                        
                    </div>

                    <div id="guideCard2">
                        <div className="cardStyle" href="#">
                            <img id="card21"/>
                            <p className="cardpp">Weather</p>
                        </div>
                        <div className="cardStyle" href="#">
                            <img id="card22"/>
                            <a className="cardpp" href="https://tranquil-ocean-62286.herokuapp.com/lists">Lists</a>
                        </div>
                        <div className="cardStyle" href="#">
                            <img id="card23"/>
                            <p className="cardpp">Pet Friendly</p>
                        </div>
                    </div>

                    <div id="guideCard3">
                        <div className="cardStyle" href="#">
                            <img id="card31"/>
                            <p className="cardp">Kid Friendly</p>
                        </div>
                        <div className="cardStyle" href="#">
                            <img id="card32"/>
                            <p className="cardp">What To Do</p>
                        </div>
                    </div>

                </div>

            </section>


        </div>
    )
}

export default Guides;