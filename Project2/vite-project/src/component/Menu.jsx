import Button from "./Button";
import style from "./Menu.module.css"
import MainPage from "./../App"


function Menu(props) {
    return (
        <div className={style['menu']}>
            <ul className={style["menuList"]}>
                <li><Button text="Home" link="/">Home</Button></li>
                <li><Button text="tech" link="/">Technology</Button></li>
            </ul>
        </div>
    )
}

export default Menu;