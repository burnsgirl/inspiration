import { React } from "react";
import "./desert.css";
import { useHistory } from "react-router-dom";

function Desert() {

    const history = useHistory();

    return (
        <div>
             <section id="desertLists">
                <h1>Desert List</h1>
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
                            <input type="checkbox" name="backpack" value="Backpack" />
                            <label for="backpack" className="inputs">Backpack</label>
                        </div>
                        <div>
                            <input type="checkbox"  name="Comb" value="Comb" />
                            <label for="Comb" className="inputs">Comb</label>
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
                            <input type="checkbox" name="Powder" value="Powder" />
                            <label for="Powder" className="inputs">Sodium Replacement Powder</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Knife" value="Knife" />
                            <label for="Knife" className="inputs">Knife</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Mirror" value="Mirror" />
                            <label for="Mirror" className="inputs">Mirror</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Jacket" value="Jacket" />
                            <label for="Jacket" className="inputs">Jacket</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Whistle" value="Whistle" />
                            <label for="Whistle" className="inputs">Whistle</label>
                        </div>
            </section>
            
        </div>
    );

};

export default Desert;