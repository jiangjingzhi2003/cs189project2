import Menu from "./component/menu";
import Slides from "./component/Slides"
import img1 from "./images/MicroSoftDeal.webp"
import styles from "./jimBlog.module.css"
import img2 from "./images/chinaUS.webp"
import img3 from "./images/SliverFall2.jpg";
import SideBar from "./component/SideBar";
import style from "./Blog2.module.css"

function Blog() {
    return (
        <>
            <h1>Blog2</h1>
            <Menu/> 
            <SideBar/>
            <div className={style["image"]}>            
                <Slides image1={img3}></Slides>
            </div>

            <div>
                <h5 className={style["dates"]}>Date: 10/21/2023</h5>
            </div>

            <p>
                
            </p>
        </>
    )
}

export default Blog;