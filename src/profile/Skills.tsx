import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Menu.css";
import { faCode, faDatabase, faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";
import { faServer } from "@fortawesome/free-solid-svg-icons/faServer";
import {
  faGithub,
  faJs,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
export default function skills() {
  return (
    <>
      <h1 className="div-h1">SKILLS</h1>
      <h2 className="skill">Languages: </h2>
      <div className="div-box">
        <div className="my-box">
          <div className="div-i">
            <FontAwesomeIcon icon={faPython} />
            <p>Python</p>
          </div>
          <div>
            <p className="div-p3">Concepts:</p>
            <p className="div-p4">
              OOP(Classes, Object, Inheritance, Polymorphism),
            </p>
          </div>
        </div>
        <div className="my-box">
          <div className="div-i">
            <FontAwesomeIcon icon={faJs} />
            <p> JavaScript</p>
          </div>
          <div>
            <p className="div-p3">Concepts:</p>
            <p className="div-p4"> Data Structures(Arrays, Strings, Basics)</p>
          </div>
        </div>
        <div className="my-box">
          <div className="div-i">
            <FontAwesomeIcon icon={faDatabase} />
            <p> SQL</p>
          </div>
          <div>
            <p className="div-p3">Concepts:</p>
            <p className="div-p4">Data Fundamentals(joins, Normalization),</p>
          </div>
        </div>
      </div>
      <div className="div-box1">
        <h2>DataBase: </h2>
        <h2>Frontend: </h2>
        <h2>Backend: </h2>
      </div>
      <div className="div-box2">
        <div className="my-box">
          <div className="div-i">
            <FontAwesomeIcon icon={faDatabase} />
            <p> MySQL</p>
          </div>
          <div>
            <p className="div-p3">Concepts:</p>
            <p className="div-p4">Data Fundamentals(joins, Normalization),</p>
          </div>
        </div>
        <div className="my-box">
          <div className="div-i">
            <FontAwesomeIcon icon={faCode} />
            <p>
              Html,Css,
              <FontAwesomeIcon icon={faReact} />
              React Js
            </p>
          </div>
          <div>
            <p className="div-p3">Concepts:</p>
            <p className="div-p4">Frontend(DOM, Responsive Design),</p>
          </div>
        </div>
        <div className="my-box">
          <div className="div-i">
            <FontAwesomeIcon icon={faServer} />
            <p>Django</p>
          </div>
          <div>
            <p className="div-p3">Concepts:</p>
            <p className="div-p4">Backend(Django MVC)</p>
          </div>
        </div>
      </div>
      
      <div className="div-box3">
        <h2>Tools</h2>
      <div className="my-box">
        <div className="div-1">
            <p><FontAwesomeIcon icon={faScrewdriverWrench} />Tools</p>
          <p className="div-p5">
            <FontAwesomeIcon icon={faGithub} />
            Gitup</p>
            <p className="div-p5"><FontAwesomeIcon icon={faCode} />VS code,</p>
            <p className="div-p5"> <FontAwesomeIcon icon={faDatabase}/>MySQL Workbench
          </p>
        </div>
      </div>
        </div>
    </>
  );
}
