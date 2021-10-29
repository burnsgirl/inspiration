import { React } from "react";
import "./beach.css";
import { useHistory } from "react-router-dom";

function Beach() {

    const history = useHistory();

    return (
        <div>
             <section id="guidesLists">
                <h1>Beach List</h1>
            </section>
        </div>
    );

};

export default Beach;