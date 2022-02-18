import React from "react";
import './ButtonClass.css';
class ButtomClassComponent extends React.Component{
constructor(props){
    super()
}



render(){
    return(
        <button className="btn contact-btn mt-4">{this.props.name}</button>
        
    )
}




}


export default ButtomClassComponent