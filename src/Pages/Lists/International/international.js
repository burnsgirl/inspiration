import { React } from "react";
import "./international.css";
import { useHistory } from "react-router-dom";

function International() {

    const history = useHistory();

    return (
        <div>
             <section id="internationalLists">
                <h1>International List</h1>
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
                            <input type="checkbox"  name="boots" value="Boots" />
                            <label for="boots" className="inputs">Hiking Boots</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Passport" value="Passport" />
                            <label for="Passport" className="inputs">Passport</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Food" value="Food" />
                            <label for="Food" className="inputs">Food</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Medications" value="Medications" />
                            <label for="Medications" className="inputs">Medications</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Map" value="Map" />
                            <label for="Map" className="inputs">Map</label>
                        </div>
                        <div>
                            <input type="checkbox" name="RainJacket" value="RainJacket" />
                            <label for="RainJacket" className="inputs">Rain Jacket</label>
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
                            <input type="checkbox" name="Payment" value="Payment" />
                            <label for="Payment" className="inputs">Multiple Forms of Payment</label>
                        </div>
                        <div>
                            <input type="checkbox" name="InsuranceCards" value="InsuranceCards" />
                            <label for="InsuranceCards" className="inputs">Insurance Cards</label>
                        </div>
                        <div>
                            <input type="checkbox" name="Adaptor" value="Adaptor" />
                            <label for="Adaptor" className="inputs">Universal Travel Adaptor</label>
                        </div>
                        <div>
                            <input type="checkbox" name="ReusableWaterBottle" value="ReusableWaterBottle" />
                            <label for="ReusableWaterBottle" className="inputs">Reusable Water Bottle</label>
                        </div>
                        <div>
                            <input type="checkbox" name="LuggageLocks" value="LuggageLocks" />
                            <label for="LuggageLocks" className="inputs">Luggage Locks</label>
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

export default International;