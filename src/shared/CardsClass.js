import React from "react";

import './CardClass.css'
class CardsClass extends React.Component{
constructor(props){
    super()
}





render(){
    return(
        <>
        
        <div className="custom-card px-1"  style={{backgroundColor: this.props.index % 2 === 0 ?'rgba(128, 128, 128, 0.589)' : 'gray'  }}>

            <h2>{this.props.skill}</h2>

            <div className="line"></div>
        </div>
        
        
        
        
        </>
    )
}
}

export default CardsClass