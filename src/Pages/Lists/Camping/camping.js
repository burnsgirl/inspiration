import { React } from "react";
import "./camping.css";
import { useHistory } from "react-router-dom";

function Camping() {

    const history = useHistory();

    return (
        <div>
             <section id="campingLists">
                <h1>Camping List</h1>
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
                            <input type="checkbox" name="Tent" value="Tent" />
                            <label for="Tent" className="inputs">Tent</label>
                        </div>
                        <div>
                            <input type="checkbox"  name="SleepingBags" value="SleepingBags" />
                            <label for="SleepingBags" className="inputs">Sleeping Bags</label>
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
                            <input type="checkbox" name="FireWood" value="FireWood" />
                            <label for="FireWood" className="inputs">Fire Wood</label>
                        </div>
                        <div>
                            <input type="checkbox" name="ClothesLine" value="ClothesLine" />
                            <label for="ClothesLine" className="inputs">Clothes Line</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Trash Bags" value="Trash Bags" />
                            <label for="Trash Bags" className="inputs">Trash Bags</label>
                        </div>
                        <div>
                            <input type="checkbox" name="ToiletPaper" value="ToiletPaper" />
                            <label for="ToiletPaper" className="inputs">Toilet Paper</label>
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
                            <input type="checkbox" name="HeadLamp" value="HeadLamp" />
                            <label for="HeadLamp" className="inputs">Head Lamp</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Lighter" value="Lighter" />
                            <label for="Lighter" className="inputs">Lighter</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Jacket" value="Jacket" />
                            <label for="Jacket" className="inputs">Jacket</label>
                        </div>
            </section>

            <section className="listBody tips" id="spring">
                    <h1>For Spring And Summer:</h1>
                </section>

                <section  className="spring grid-container">
                    <div>
                        <input type="checkbox" name="backpack" value="Backpack" />
                        <label for="backpack" className="inputs">Backpack</label>
                    </div>
                    <div>
                        <input type="checkbox"  name="boots" value="Boots" />
                        <label for="boots" className="inputs">Hiking Boots</label>
                    </div>
                    <div>
                        <input type="checkbox" name="water" value="Water" />
                        <label for="water" className="inputs">Water</label>
                    </div>
                </section>

                <section className="listBody tips" id="fall">
                    <h1>For Fall And Winter:</h1>
                </section>

                <section className="fall grid-container">
                    <div>
                        <input type="checkbox" name="backpack" value="Backpack" />
                        <label for="backpack" className="inputs">Backpack</label>
                    </div>
                    <div>
                        <input type="checkbox"  name="boots" value="Boots" />
                        <label for="boots" className="inputs">Hiking Boots</label>
                    </div>
                    <div>
                        <input type="checkbox" name="water" value="Water" />
                        <label for="water" className="inputs">Water</label>
                    </div>
                </section>
                
        </div>
    );

};

export default Camping;