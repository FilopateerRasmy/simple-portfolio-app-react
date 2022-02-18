import React from "react";
import ButtomClassComponent from "../shared/ButtonClass";
import './FooterClass.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope  } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from "@fortawesome/free-solid-svg-icons";




class FooterClass extends React.Component{
    constructor(){
        super()
    }






    render(){
            return(
                <>
                <footer className="px-5 py-4">
                    <div>
                        <h3>Get in touch</h3>
                        <p>
                        <span className="me-2 text-white">
                        
                        <FontAwesomeIcon icon={faEnvelope}  className="icon"/>
                        </span>Example@gmail.com</p>
                        <p>   <span className="me-2 text-white">
                        
                        <FontAwesomeIcon icon={faPhone}  className="icon"/>
                        </span> 00000000000000</p>
                    </div>
                    <ButtomClassComponent name={'Contact Me'}/>

                    <div>
                        <span className="me-2 text-white">
                        
                        <FontAwesomeIcon icon={faFacebook}  className="icon"/>
                        </span>
                        <span className="me-2 text-white">
                        
                        <FontAwesomeIcon icon={faLinkedin}  className="icon"/>
                        </span>
                        <span className="me-2 text-white">
                        
                        <FontAwesomeIcon icon={faTwitter}  className="icon"/>
                        </span>
                        <p className="mt-3">Copyright &#169; 2021</p>
                    </div>
                </footer>
                
                </>
            )
    }
}


export default FooterClass