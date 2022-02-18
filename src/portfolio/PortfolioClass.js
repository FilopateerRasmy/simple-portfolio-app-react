import React from "react";
import CardsClass from "../shared/CardsClass";


class PortfolioClass extends React.Component {
    constructor() {
        super()
    }

skills=['Mean stack', 'web developer', 'fullstack', 'Mearn Stack', 'back-end', 'front-end']



    render() {
        return (
            <>

                <div className="container px-5 py-5">
                    <h2>Portfolio</h2>
                    <div className="row">
                        {this.skills.map((sk, i) => {
                            return    <div className="col-md-4 mb-3">
                            <CardsClass skill={sk} index={i}/>

                        </div>
                        })}

                    </div>
                </div>




            </>
        )
    }
}

export default PortfolioClass