import { React } from "react";
import "./mountains.css";
import { useHistory } from "react-router-dom";

function Mountains() {

    const history = useHistory();

    return (
        <div>
             <section id="guidesLists">
                <h1>Mountains List</h1>
            </section>

            <section>
                <h1>Tips</h1>
                <p>"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"</p>
            </section>

            <section>
                <form action="/action_page.php">
                <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike" />
                <label for="vehicle1"> I have a bike</label>
                <input type="checkbox" id="vehicle2" name="vehicle2" value="Car" />
                <label for="vehicle2"> I have a car</label>
                <input type="checkbox" id="vehicle3" name="vehicle3" value="Boat" />
                <label for="vehicle3"> I have a boat</label>
                </form>
            </section>
            
        </div>
    );

};

export default Mountains;