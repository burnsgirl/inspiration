import { React } from "react";
import "./places.css";
// import { useHistory } from "react-router-dom";
import places from "../../places.json";

function Places() {

    // const history = useHistory();

    return (
        <div>
            <div id="coverPlaces">
                <h1>Explore These Places!</h1>
            </div>

            <div id="locationCards">
            {places.map ((props) => {
                return (
                <a className="card" href={props.href}>
                      
                        <img className="imagePlaces" id={"image" + props.id} alt={props.id} src={props.image} />
 
                        <p className="nameOfPlace" id={"place" + props.id}>{props.placename}</p>
                
                </a>
                );
            })}
            </div>
        </div>
    )
}

export default Places;