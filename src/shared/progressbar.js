import React from "react";
import './progressclass.css';
class ProgressClassComponent extends React.Component {
    constructor(props) {
        super()
    }



    render() {
        return (
            <>
                <div className="progress mb-3">
                    <div className="progress-bar" role="progressbar" style={{ width: this.props.skills + '%' }} > {this.props.skillName} </div>
                </div>
            </>

        )
    }




}


export default ProgressClassComponent;