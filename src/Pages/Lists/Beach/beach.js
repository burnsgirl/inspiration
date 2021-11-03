import { React } from "react";
import "./beach.css";
import { useHistory } from "react-router-dom";

function Beach() {

    const history = useHistory();

    return (
        <div>
             <section id="beachLists">
                <h1>Beach List</h1>
            </section>

            <section className="listBody" id="tips">
                <h1>Tips</h1>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </section>

            <section className="listBody" id="tips">
                    <h1>Always Bring :</h1>
            </section>

            <section className="grid-container">
                    
                        <div>
                            <input type="checkbox" name="sunglasses" value="sunglasses" />
                            <label for="sunglasses" className="inputs">Sunglasses</label>
                        </div>
                        <div>
                            <input type="checkbox"  name="Sandals" value="Sandals" />
                            <label for="Sandals" className="inputs">Sandals</label>
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
                            <input type="checkbox" name="Bathing Suit" value="Bathing Suit" />
                            <label for="Bathing Suit" className="inputs">Bathing Suit</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Cover-up" value="Cover-up" />
                            <label for="Cover-up" className="inputs">Cover-up</label>
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
                            <input type="checkbox" name="BeachGames" value="BeachGames" />
                            <label for="BeachGames" className="inputs">Beach Games</label>
                        </div>
                        <div>
                            <input type="checkbox" name="BeachTowel" value="BeachTowel" />
                            <label for="BeachTowel" className="inputs">Beach Towel</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Floats" value="Floats" />
                            <label for="Floats" className="inputs">Floats</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Cooler" value="Cooler" />
                            <label for="Cooler" className="inputs">Cooler</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Umbrella" value="Umbrella" />
                            <label for="Umbrella" className="inputs">Umbrella</label>
                        </div>
            </section>
        </div>
    );

};

export default Beach;