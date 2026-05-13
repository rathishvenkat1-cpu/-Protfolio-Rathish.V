import { Navigate, Route, Routes } from "react-router-dom";
import Education from "./Education";
import Skills from "./Skills";
import Layout from "./Layout";
import Project from "./Project";
import About from "./About";
import Info from "./Info";
import Contact from "./Contact";

export default function MyRoutes(){
    return(
        <>
        <Routes>
            <Route path="/" element={<Layout />}> 
            <Route index element ={<Navigate to="/info"/>}></Route >
            <Route path="/info" element={<Info />} />
            <Route path="/About" element={<About/>}/>
            <Route path="/Contact" element={<Contact/>}/>
            <Route path="/skills" element={<Skills />} />
            <Route path="/education" element={<Education />} />
            <Route path="/project" element={<Project />} />
            </Route>
        </Routes>
        </>
    )
}