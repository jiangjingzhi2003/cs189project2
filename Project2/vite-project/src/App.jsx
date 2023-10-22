import { useState } from 'react'
import styles from "./mainStyle.module.css";
import BlogDiv from './component/blogDiv';
import img1 from "./images/MicroSoftDeal.webp"
import img2 from "./images/chinaUS.webp"
import img3 from "./images/silverFall.jpeg"
import SideBox from "./component/SideBox";
import Menu from './component/menu';
import SideBar from "./component/SideBar"
import img4 from './images/images copy.png';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
} from "react-router-dom"
import Jblog from './jimBlog';
import Blog2 from './Blog2';
import App2 from './App2';
import Title from './component/Title'

function MainPage() {

  return (
    <>
      <Title/>

      <Menu/>

      <SideBar/>

      <div className={styles["article1"]}>
        <BlogDiv title="Laker SEASON 2023 - 2024" 
        src="/Dblog"
        img={img4} />
      </div>

      <div className={styles["sideBox1"]}>

        <SideBox img={img3} 
        link="/Blog2" 
        title="Hiking in Sliver Fall state Park Oregon"/>

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
  },
  {
    path: "/Dblog",
    element: <App2/>
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
