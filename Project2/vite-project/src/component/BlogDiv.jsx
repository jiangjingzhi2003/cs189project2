import style from "./blog.module.css"
import {
    createBrowserRouter,
    RouterProvider,
    Link,
} from "react-router-dom"

function BlogDiv(props) {
    return (
        <div className={style["blog"]}>
            <img src={props.img}></img>
            <Link to={props.src} target="blank">
                <p className={style["text"]}>{props.title}</p>
            </Link>
        </div>
    )
}

export default BlogDiv;