import { React } from "react";
import "./mountains.css";
import { useHistory } from "react-router-dom";

function Mountains() {

    const history = useHistory();

    return (
        <div>
             <section id="mountainsLists">
                <h1>Mountains List</h1>
            </section>

            <section className="listBody" id="tips">
                <h1>Tips</h1>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </section>

            <section className="listBody" id="tips">
                    <h1>Always Bring:</h1>
            </section>

            <section className="grid-container">
                    
                        <div>
                            <input type="checkbox" name="raincoat" value="raincoat" />
                            <label for="raincoat" className="inputs">Raincoat</label>
                        </div>
                        <div>
                            <input type="checkbox"  name="FleeceJacket" value="FleeceJacket" />
                            <label for="FleeceJacket" className="inputs">Fleece Jacket</label>
                        </div>
                        <div>
                            <input type="checkbox" name="water" value="Water" />
                            <label for="water" className="inputs">Water</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Food" value="Food" />
                            <label for="Food" className="inputs">Food</label>
                        </div>
                        <div>
                            <input type="checkbox" name="FirstAidKit" value="FirstAidKit" />
                            <label for="FirstAidKit" className="inputs">First Aid Kit</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Map" value="Map" />
                            <label for="Map" className="inputs">Map</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Compass" value="Compass" />
                            <label for="Compass" className="inputs">Compass</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Sunscreen" value="Sunscreen" />
                            <label for="Sunscreen" className="inputs">Sunscreen</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Hat" value="Hat" />
                            <label for="Hat" className="inputs">Hat</label>
                        </div>
                        <div>
                            <input type="checkbox" name="HandSanitizer" value="HandSanitizer" />
                            <label for="HandSanitizer" className="inputs">Hand Sanitizer</label>
                        </div>
                        <div>
                            <input type="checkbox" name="BugSpray" value="BugSpray" />
                            <label for="BugSpray" className="inputs">Bug Spray</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Knife" value="Knife" />
                            <label for="Knife" className="inputs">Knife</label>
                        </div>
                        <div>
                            <input type="checkbox" name="BearSpray" value="BearSpray" />
                            <label for="BearSpray" className="inputs">Bear Spray</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Lighter" value="Lighter" />
                            <label for="Lighter" className="inputs">Lighter</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Boots" value="Boots" />
                            <label for="Boots" className="inputs">Boots</label>
                        </div>
            </section>

            <section className="listBody tips" id="spring">
                    <h1>For Spring And Summer:</h1>
                </section>

                <section  className="spring grid-container">
                    <div>
                        <input type="checkbox" name="SolarCharger" value="SolarCharger" />
                        <label for="SolarCharger" className="inputs">Solar Charger</label>
                    </div>
                    <div>
                        <input type="checkbox"  name="poles" value="poles" />
                        <label for="poles" className="inputs">Trekking Poles</label>
                    </div>
     
                </section>

                <section className="listBody tips" id="fall">
                    <h1>For Fall And Winter:</h1>
                </section>

                <section className="fall grid-container">
                    <div>
                        <input type="checkbox" name="PlayingCards" value="PlayingCards" />
                        <label for="PlayingCards" className="inputs">Playing Cards</label>
                    </div>
                    <div>
                        <input type="checkbox"  name="FireWood" value="FireWood" />
                        <label for="FireWood" className="inputs">Fire Wood</label>
                    </div>
                    <div>
                        <input type="checkbox" name="Notebook" value="Notebook" />
                        <label for="Notebook" className="inputs">Notebook</label>
                    </div>
                </section>
            
        </div>
    );

};

export default Mountains;