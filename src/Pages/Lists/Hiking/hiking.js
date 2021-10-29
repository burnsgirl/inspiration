import { React } from "react";
import "./hiking.css";
import { useHistory } from "react-router-dom";

function Hiking() {

    const history = useHistory();

    return (
        <div>
            <section id="guidesLists">
                <h1>Hiking List</h1>
            </section>
        </div>
    );

};

export default Hiking;