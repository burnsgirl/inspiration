import { React } from "react";
import "./desert.css";
import { useHistory } from "react-router-dom";

function Desert() {

    const history = useHistory();

    return (
        <div>
             <section id="guidesLists">
                <h1>Desert List</h1>
            </section>
        </div>
    );

};

export default Desert;