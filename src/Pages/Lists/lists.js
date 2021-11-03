import { React } from "react";
import "./lists.css";
import { useHistory } from "react-router-dom";
import lists from "../../lists.json";

function Lists() {

    const history = useHistory();

    const pageRoute10 = () => {
        history.push("/beach");
      };

    const pageRoute11 = () => {
        history.push("/camping");
      };

    const pageRoute12 = () => {
        history.push("/desert");
      };

    const pageRoute13 = () => {
        history.push("/hiking");
      };

    const pageRoute14 = () => {
        history.push("/international");
      };

    const pageRoute15 = () => {
        history.push("/mountains");
      };

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
                            <a href="https://tranquil-ocean-62286.herokuapp.com/hiking#hikingSpring">Spring/Summer</a>
                            <a href="https://tranquil-ocean-62286.herokuapp.com/hiking#hikingFall">Fall/Winter</a>
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
                 
                        </div>
                    </div>

                    <div class="dropdown">
                        <a class="dropbtn" href="#camping">Camping</a>
                        <div class="dropdown-content">
                            <a href="#">Spring/Summer</a>
                            <a href="#">Fall/Winter</a>
                 
                        </div>
                    </div>

                    <div class="dropdown">
                        <a class="dropbtn" href="#international">International</a>
                        <div class="dropdown-content">
                            <a href="#">Spring/Summer</a>
                            <a href="#">Fall/Winter</a>
                        </div>
                    </div>

                    <div class="dropdown">
                        <a class="dropbtn" href="#desert">Desert</a>
                        <div class="dropdown-content">
                            <a href="#">Spring/Summer</a>
                            <a href="#">Fall/Winter</a>
                        </div>
                    </div>

                </div>
               
                    <div id="listCards">
                    {lists.map ((props) => {
                        return (

                    
                    <div className="listCard" id={props.id} >
                        
                            <img className="imageLists" src={props.image} alt={props.alt} />
                           
                            <a href={props.list} className="nameOfList">{props.type}</a>

                        
                    </div>
                        );
                    })}
                </div>
            </section>
        </div>
    )
}

export default Lists;