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

            <section id="listBody">
                <div id="listBtns">

                    <div class="dropdown">
                        <button class="dropbtn">Hiking</button>
                        <div class="dropdown-content">
                            <a href="#">Spring/Summer</a>
                            <a href="#">Fall/Winter</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Beach</button>
                        <div class="dropdown-content">
                            <a href="#">Spring/Summer</a>
                            <a href="#">Fall/Winter</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Mountains</button>
                        <div class="dropdown-content">
                            <a href="#">Spring/Summer</a>
                            <a href="#">Fall/Winter</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Camping</button>
                        <div class="dropdown-content">
                            <a href="#">Spring/Summer</a>
                            <a href="#">Fall/Winter</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">International</button>
                        <div class="dropdown-content">
                            <a href="#">Spring</a>
                            <a href="#">Summer</a>
                            <a href="#">Fall</a>
                            <a href="#">Winter</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <button class="dropbtn">Desert</button>
                        <div class="dropdown-content">
                            <a href="#">Spring</a>
                            <a href="#">Summer</a>
                            <a href="#">Fall</a>
                            <a href="#">Winter</a>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Lists;