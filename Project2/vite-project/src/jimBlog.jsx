import Menu from "./component/menu";
import Slides from "./component/Slides"
import img1 from "./images/MicroSoftDeal.webp"
import styles from "./jimBlog.module.css"
import img2 from "./images/chinaUS.webp"
import SideBar from "./component/SideBar";

function Jblog() {

    return (
        <>
            <h1>Blog1</h1>
            <Menu/> 
            <SideBar/>

            <div className={styles["slide1"]}>
                <Slides image1={img2}></Slides>
            </div>

            <div>
                <h5 className={styles["dates"]}>Date: 10/19/2023</h5>
            </div>
            <div className={styles["content"]}>
                <p>
                    In fear of chance of military use of AI for China, Biden administration imposed restriction on advanced chip exports.
                </p>
                <p>
                    To hit back Biden administration's decision , China decided to limit by restricting 
                    exports of two materials, gallium and germanium, which are key to the semiconductor 
                    industry. China is the biggest supplier in global supply chain of gallium and germanium
                    It produces 80% of the world's gallium and 60% of germanium, according to the Critical Raw Materials Alliance (CRMA) industry body.
                </p>
                <p>
                    The chip-war will hurt both side since Biden administration attempt to limit export of both chipmaking and advanced chip technology 
                    including leading company Nividia. This restriction hurt US's own economy since China accounts for up to 25% of its revenues from data centre chip sales. 
                    Nvidia's shares, which are considered a star stock, fell by as much as 4.7% in the wake of the announcement.
                </p>
                <p>
                    Chinese AI companies obviously hurt by the restrition since development of AI is depends on large computation and simulation which closely relate to hardware like GPU. Biden admistraion even ban 
                    top gaming GPU which greatly limited Chinese companies to gain enough computation power for AI developing. This restriction will worsen international relationship between China and US. 
                </p>
            </div>
        </>
    )
}

export default Jblog;