import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import "./SideBarstyle.css"
import {
    Link,
} from "react-router-dom"

function sideBar(props) {
    return (
        <>
            <Menu>
                <Link to="/" >Home</Link>
                <Link to="/">Tech</Link>
            </Menu>
        </>
    )
}

export default sideBar;
