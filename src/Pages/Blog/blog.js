import { React } from "react";
import "./blog.css";
import { useHistory } from "react-router-dom";
import blog from "../../blog.json";

function Blog() {

    const history = useHistory();

    return (
        <div>

        <section id="coverBlog">
            <h1>Follow Where I Go!</h1>
        </section>

        <section id="blogSection">
            {blog.map ((props) => {
                return (

            
            <div className="blogCard">
                <h1>{props.date}</h1>
                <p id={"placesBlog" + props.places}>{props.place}<br></br>{props.content}</p>
                <img src={props.image} alt={props.alt} />
            </div>
                );
            })}
        </section>

        </div>
    )
}

export default Blog;