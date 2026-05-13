import { useNavigate } from "react-router-dom";
import "./Menu.css";

export default function Menu(){
    const route = useNavigate();
  const navFun = (data: any) => {
    if (data == 1) {
      route("/About");
    } else if (data == 2) {
      route("/skills");
    } else if (data == 3) {
      route("/education");
    } else if (data == 4){
      route("/Project");
    } else if (data == 5){
      route("/Contact");
    }else{
      route("/info")
    }
   
}
    return(
        <>
        <div className="div-pot">
          <p onClick={() => navFun(6)} style={{ cursor: "pointer" }} className="div-port">PORTFOLIO</p>
        <div className="div-menu">
        <p onClick={() => navFun(1)} style={{ cursor: "pointer" }} className="div-p">
          About Me
        </p>
        <p onClick={() => navFun(2)} style={{ cursor: "pointer" }} className="div-p">
         Skills
        </p>
        <p onClick={() => navFun(3)} style={{ cursor: "pointer" }} className="div-p">
          Education
        </p>
        <p onClick={() => navFun(4)} style={{ cursor: "pointer" }} className="div-p">
          Projects
        </p>
        <p onClick={() => navFun(5)} style={{ cursor: "pointer" }} className="div-p">
          Contact
        </p>
         </div>
            </div>
        </>
    )

}