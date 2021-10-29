import { React } from "react";
import "./mountains.css";
import { useHistory } from "react-router-dom";

function Mountains() {

    const history = useHistory();

    return (
        <div>
             <section id="guidesLists">
                <h1>Mountains List</h1>
            </section>
        </div>
    );

};

export default Mountains;