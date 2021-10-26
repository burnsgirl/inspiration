import { React } from "react";
import "./lists.css";
import { useHistory } from "react-router-dom";

function Lists() {

    const history = useHistory();

    return (
        <div>
            <section id="coverLists">
                <h1>Packing List For Any Occasion!</h1>
            </section>
        </div>
    )
}

export default Lists;