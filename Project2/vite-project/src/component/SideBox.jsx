import style from "./sideBoxstyle.module.css"
import {
    createBrowserRouter,
    RouterProvider,
    Link,
} from "react-router-dom"

function SideBox(props) {

    return (
        <div className={style["box"]} left={props.left}>
            <img className={style["sideImg"]} 
            src={props.img}/>

            <div className={style["text"]}>
                <Link to={props.link}>
                    <p>{props.title}</p>
                </Link>
            </div>
        </div>
    )
}

export default SideBox;