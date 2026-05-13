import "./Menu.css";
import Image from "./Fsd.png";
export default function info() {
  return (
    <>
      <div className="div-info">
        <div className="div-full">
          <h2 className="div-h2">Full-Stack Developer</h2>
          <p className="div-p1">
            I'm a Full Stack Developer passionate about building end-to-end web
            solutions.
          </p>

          <p className="div-p1">
            I work with frontend technologies like React, HTML, CSS, and
            JavaScript, along with backend tools such as Python, Django, and
            MySQL,SQL.
          </p>

          <p className="div-p1">
            I enjoy solving real-world problems through efficient, scalable, and
            user-friendly applications.
          </p>
        </div>
        <img src={Image} alt="Full Stack Developer" className="info-img" />
      </div>
    </>
  );
}
