import { React } from "react";
import "./places.css";
import { useHistory } from "react-router-dom";

function Places() {

    const history = useHistory();

    return (
        <div>
            <section id="coverPlaces">
                <h1>Explore These Places!</h1>
            </section>

            <section id="locationCards">
                
            </section>
        </div>
    )
}

export default Places;