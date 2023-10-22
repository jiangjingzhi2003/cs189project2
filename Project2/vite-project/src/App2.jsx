import Menu from "./component/menu";
import Slides from "./component/Slides"
import img1 from "./images/MicroSoftDeal.webp"
import styles from "./jimBlog.module.css"
import img2 from "./images/chinaUS.webp"
import SideBar from "./component/SideBar";
import img4 from './images/images copy.png';

function Dblog() {

    return (
        <>
            <h1>Blog1</h1>
            <Menu/> 
            <SideBar/>

            <div className={styles["slide1"]}>
                <img src = {img4}/>
                
            </div>
            <div className={styles["content"]}>
                <p>
                The NBA season is starting very soon. That means Laker Basketball is coming back. The Los Angeles Lakers, one of the most storied franchises in the history of the NBA, are gearing up for what promises to be a thrilling and transformative season. After facing disappointment in the previous campaign, the Lakers are determined to bounce back with a vengeance. With a roster boasting some of the league's most talented and iconic players, the 2023-2024 season is shaping up to be a compelling journey filled with promise and potential.With the newly signed players of Christian Wood, Gabe Vincent, Taurean Prince, and Jaxon Hayes, this season's future is looking very bright. 
                </p>
                <p>
                Hopefully with these new additions teaming up with Lebron and Anthony Davis the Lakers will be able to go all the way to the Finals. 
                Last season the Lakers finished the season with a 43 - 39 record finishing 7th in the West, barely qualifying them for the playoffs. 
                Lets hope Lebron and Antony Davis will be able to win another ring. 

                </p>
            </div>
        </>
    )
}

export default Dblog;