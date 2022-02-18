import React from "react";
import './Aboutus.css'
class AboutMeComponent extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <>

                <div className="container py-5">

                    <div className="row">
                        <div className="col-md-3 text-center">
                            <h2>About ME</h2>
                        </div>
                        <div className="col-md-9">
                            <p>It is a long established fact that a reader will be distracted by the readable content of
                                a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal
                                distribution of letters, as opposed to using 'Content here, content here', making it look like readable
                                English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model
                                text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years,
                                sometimes by accident, sometimes on purpose (injected humour and the like).</p>

                            <a className="btn download" href="../../public/filopateer - Copy.pdf" download >Download Resume</a>
                        </div>

                    </div>


                </div>



            </>
        )
    }


}



export default AboutMeComponent;