import "./contact.css";
import { FaFacebook, FaInstagram ,FaWhatsapp} from "react-icons/fa";




function Contact(){
    return(
        <section className="contact">
        <div className="contact-box">
            <div className="Con-box">
                <p className="para">Get in touch</p>
                <h1 className="heading">Contact</h1>
                <div className="icons">
                    <div>
                    <FaFacebook />
                    <span>facebbok</span>
                    </div>
                    <div>
                    <FaInstagram />
                       <span>instagram</span>
                    </div>
                    <div>
                    <FaWhatsapp />
                    <span>whatsapp</span>
                    </div>
                </div>
            </div>
        </div>
    
    
    </section>
    
    )
}
export default Contact;