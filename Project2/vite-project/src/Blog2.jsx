import Menu from "./component/menu";
import Slides from "./component/Slides"
import img1 from "./images/MicroSoftDeal.webp"
import styles from "./jimBlog.module.css"
import img2 from "./images/chinaUS.webp"
import img3 from "./images/SliverFall2.jpg";
import SideBar from "./component/SideBar";
import style from "./Blog2.module.css"
import Title from "./component/Title";

function Blog() {
    return (
        <>
            <Title/> 
            <Menu/> 
            <SideBar/>
            <div className={style["image"]}>            
                <Slides image1={img3}></Slides>
            </div>

            <div>
                <h5 className={style["dates"]}>Date: 10/21/2023</h5>
            </div>

            <div className={style["content"]}>
                <p>
                    When I was in Oregon during summer, I went to Sliver Fall state park. It is famous for its beautiful waterfull and hiking trails. 
                    There are many trail options offered in the park ranging from 1-mile to 6-miles long.
                </p>
                <p>
                    Just entering the park you can see the magnificent South Falls. You can walk behind the waterfall and see what a 177-foot curtain of water looks like from behind.
                    You can feel water splast from the waterfall and coolness. It's a great place to go in suummer. 
                </p>
                <p>
                    Hike along the trails you can walk along creeks and enjoying the beauty of nature. 
                    You can hear bird chirping and chipmunks running in the bushes.
                </p>
            </div>
        </>
    )
}

export default Blog;