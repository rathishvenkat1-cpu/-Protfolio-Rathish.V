import Python from "./Python.png"
import MySQL from "./Msql.png";
import Front from "./BS.png";
import Frontend from "./Port.png";
import "./Menu.css"
export default function Project(){
    return(
        <>
        
        <h1 className="div-h1">PROJECTS</h1>
        
        <div className="div-info1">
          <div className="div-no">
        <h2 className="div-h3">Speech Recognition System (Python)</h2>
        <ul>
          <li>Built a multilingual speech-to-text and text-to-speech application using Python.</li>
          <li>Integrated Google Speech Recognition API and pyttsx3 for real-time output.</li>
          <li>Enabled dynamic voice output with adjustable speed, pitch, and volume.</li>
          <li>Showcased skills in Python, speech processing, and API integration.</li>
        </ul>
        </div>
         <img src={Python} alt="Python" className="info-img1"/>
         </div>
        <hr/>
       
         <div className="div-info1">
          <div className="div-no">
           <h2 className="div-h3">Ecommerce Online Shopping (MYSQL)</h2>
        <ul>
          <li>Designed and developed a structured MySQL database for an e-commerce platform covering customers, orders, products, payments, and shipping.</li>
          <li>Implemented SQL queries, joins, subqueries, stored procedures, and triggers to analyze sales, customer behavior, and inventory.</li>
          <li>Automated loyalty points calculation, stock updates, and data validation to ensure data accuracy and integrity.</li>
          <li>Performed business insights analysis such as top customers, sales categorization, average order analysis, and payment-wise order distribution.</li>
        </ul>
        </div>
         <img src={MySQL} alt="MySQL" className="info-img1"/>
         </div>
         <hr/>
       
       <div className="div-info1">
         <div className="div-no">
         <h2 className="div-h3">Online Bookstore (Frontend)</h2>
       <ul>
         <li>Developed a responsive online bookstore website using HTML, CSS, and JavaScript</li>
         <li>Designed user-friendly pages including home, book listing, and product details</li>
         <li>Implemented features like search, navigation, and interactive UI elements</li>
         <li>Ensured mobile-friendly design for better user experience across devices</li>
         <li>Improved website performance and layout using modern frontend techniques</li>
       </ul>
       </div>
        <img src={Front} alt="FrontEnd" className="info-img1"/>
        </div>
        <hr/>
          <div className="div-info1">
         <div className="div-no">
         <h2 className="div-h3">portfolio (Frontend with ReactJs )</h2>
       <ul>
         <li>Developed responsive web applications using React and frontend technologies.</li>
         <li>Created clean and user-friendly interfaces with reusable components</li>
         <li>Improved website performance and responsiveness across different devices.</li>
         <li>Integrated APIs and managed dynamic data in frontend applications.</li>
         <li>Used Git for version control and project collaboration.</li>
       </ul>
       </div>
        <img src={Frontend} alt="FrontEnd" className="info-img1"/>
        </div>
          
      </>

    )
}
