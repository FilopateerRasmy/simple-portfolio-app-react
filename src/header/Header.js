import React from "react";
import ButtomClassComponent from "../shared/ButtonClass";
import './Header.css';

class HeaderComponent extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <>
            
                <header className="header p-4 ">
                    <div className="ps-5">
                        <h1>John Doe</h1>
                        <p>Web Developer & Web Designer</p>
                        <ButtomClassComponent name={'Contact Me'} />
                    </div>

                </header>



            </>
        )
    }




}

export default HeaderComponent