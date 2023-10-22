import { useState } from 'react'
import styles from "./mainStyle.module.css";
import BlogDiv from './component/blogDiv';
import img1 from "./images/MicroSoftDeal.webp"
import img2 from "./images/chinaUS.webp"
import img3 from "./images/silverFall.jpeg"
import SideBox from "./component/SideBox";
import Menu from './component/menu';
import SideBar from "./component/SideBar"
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom"
import Jblog from './jimBlog';
import Blog2 from './Blog2';

function MainPage() {

  return (
    <>
      <h1 className={styles["title"]}>BOOMBO</h1>

      <Menu/>

      <SideBar/>

      <div className={styles["article1"]}>
        <BlogDiv title="Microsoft completes $69bn takeover of Call of Duty maker Activision Blizzard" 
        src="/Blog2"
        img={img1} />
      </div>

      <div className={styles["sideBox1"]}>

        <SideBox img={img3} 
        link="/Blog2" 
        title="Microsoft completes $69bn takeover of Call of Duty maker Activision Blizzard"/>

      </div>

      <div className={styles["sideBox2"]}>

        <SideBox img={img1} 
        link="/jimBlog"
        title="Microsoft completes $69bn takeover of Call of Duty maker Activision Blizzard"/>

      </div>

      <div className={styles["sideBox2"]}>

        <SideBox img={img2} 
        link="/jimBlog"
        title="Chip battle escalted between the US and China"/>

      </div>
    </>
  )
}

const router = createBrowserRouter([
  {
      path: "/jimBlog",
      element: <Jblog/>,
  },
  {
      path: "/",
      element: <MainPage/>
  },
  {
      path:"/Blog2",
      element: <Blog2/>
  }
])

function App() {
  return (
     <>
      <RouterProvider router={router} />
     </>
  )
}

export default App
