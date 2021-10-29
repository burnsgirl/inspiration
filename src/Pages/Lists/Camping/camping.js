import { React } from "react";
import "./camping.css";
import { useHistory } from "react-router-dom";

function Camping() {

    const history = useHistory();

    return (
        <div>
             <section id="guidesLists">
                <h1>Camping List</h1>
            </section>
        </div>
    );

};

export default Camping;