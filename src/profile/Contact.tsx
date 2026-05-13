import { faGithub, faSquareLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
import "./Menu.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAt } from "@fortawesome/free-solid-svg-icons"
export default function Contact(){
    return(
        <>
        <section id="xnjwwljw">
  <h2 style={{textAlign:"center",paddingTop:"30px"}}>Contact Me</h2>

  <form >
    <form action="https://formspree.io/f/xovwabcd" method="POST"/>
    <input type="text" placeholder="Your Name" required />
    
    <input type="email" placeholder="Your Email" required />
    
    <textarea placeholder="Your Message" rows={5} required></textarea>
    
    <button type="submit">Send Message</button>
  </form>

  <div className="social-links" style={{textAlign:"center",paddingTop:"20px"}}>
    <a href="https://www.linkedin.com/in/rathish-venkatesh-0237b73a1/" style={{marginTop:'10px'}}><FontAwesomeIcon icon={faSquareLinkedin} /></a>
    <a href="https://github.com/rathishvenkat1-cpu" style={{marginTop:'10px'}}><FontAwesomeIcon icon={faGithub} /></a>
    
    <a href="mailto:rathishvenkat1@gmail.com">
  <FontAwesomeIcon icon={faAt} />
</a>
    
    <a href="https://wa.me/9025176621" target="_blank">
  <FontAwesomeIcon icon={faWhatsapp} />
</a>
  </div>

</section>

        </>
    )
}