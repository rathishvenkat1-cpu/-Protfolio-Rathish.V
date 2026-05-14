import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import "./Menu.css"


export default function Layout(){
    return(
        <>
        <div className="div-layout">
       <Menu/>
        <Outlet></Outlet>
        </div>
        
        </>
    )
    
}