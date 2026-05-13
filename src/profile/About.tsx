import "./Menu.css";
import   Image from "./Full.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

 export default function Homepage(){
   
    return(
        <>
         <h1 className="div-h1">About Me</h1>
         <div className="div-About">
          <div>
        <h2 >Hi, I'm Rathish S/O Venkatesh</h2>
        <div className="div-p1">
<p className="div-p2">Full-Stack Developer & Frontend Developer</p>
<p>I create modern, responsive websites and web applications.</p>

<p className="div-p2">I'm a passionate web developer with experience in HTML, CSS,
JavaScript, React and Backend,Databases(MYSQL)</p>

<p className="div-p2">I enjoy building clean and user-friendly websites that solve
real-world problems.</p>
<p className="div-p2"> I love learning new technologies and
improving my design skills.</p>
</div>
</div>
<img src={Image} alt="Rathish" className="info-img1" />
</div>
 <h1 className="div-h1">My Resume</h1> 
 <a href="https://drive.google.com/file/d/1Ii7sgp2B2K-G2OzbJ0Yl4Ubt1Id0S_ve/view?usp=drivesdk" download style={{paddingBottom:"20px"}}>
  <FontAwesomeIcon icon={faFilePdf} />Download Resume
</a>
      
        </>
    )
}
