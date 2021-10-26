import { React } from "react";
import "./lists.css";
import { useHistory } from "react-router-dom";
import lists from "../../lists.json";

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
                        <a class="dropbtn" href="#hiking">Hiking</a>
                        <div class="dropdown-content">
                            <a href="#">Spring/Summer</a>
                            <a href="#">Fall/Winter</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <a class="dropbtn" href="#beach">Beach</a>
                        <div class="dropdown-content">
                            <a href="#">Spring/Summer</a>
                            <a href="#">Fall/Winter</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <a class="dropbtn" href="#mountains">Mountains</a>
                        <div class="dropdown-content">
                            <a href="#">Spring/Summer</a>
                            <a href="#">Fall/Winter</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <a class="dropbtn" href="#camping">Camping</a>
                        <div class="dropdown-content">
                            <a href="#">Spring/Summer</a>
                            <a href="#">Fall/Winter</a>
                            <a href="#">Link 3</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <a class="dropbtn" href="#international">International</a>
                        <div class="dropdown-content">
                            <a href="#">Spring</a>
                            <a href="#">Summer</a>
                            <a href="#">Fall</a>
                            <a href="#">Winter</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <a class="dropbtn" href="#desert">Desert</a>
                        <div class="dropdown-content">
                            <a href="#">Spring</a>
                            <a href="#">Summer</a>
                            <a href="#">Fall</a>
                            <a href="#">Winter</a>
                        </div>
                    </div>

                </div>
                </section>

                <section id="listBody listCards" >
                    
                    {lists.map ((props) => {
                        return (

                    
                    <div className="listCard" id={props.id}>
                        <img className="imageLists" src={props.image} alt={props.alt} />
                        <h1 className="nameOfList">{props.type}</h1>
                        
                    </div>
                        );
                    })}
       
            </section>
        </div>
    )
}

export default Lists;