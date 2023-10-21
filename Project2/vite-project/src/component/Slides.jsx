import style from "./SlideStyle.module.css";
import { useState } from 'react';

function Slide(props) {
    return (
        <div>
            <div className={style["slide"]}>
                <img className={style["image"]} src={props.image1}/>
            </div>
            <a class={style["prev"]}>&#10094;</a>
            <a class={style["next"]}>&#10095;</a>
        </div>
    )
}

export default Slide;