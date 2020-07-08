import React, { Component } from 'react'
import './Footer.css'
import facebookIcon from '../../resources/facebook-icon.png'
import gmailIcon from '../../resources/gmail.png'
import logo from '../../resources/logo.png'

class Footer extends Component {

    render() {
        return (
            <div className="Footer">
                <div className="Footer_1">
                    <div style={{ "minHeight": "50px", "height": "15%" }}> </div>
                    <div style={{
                        width: "88%",
                        position: "absolute",
                        bottom: "10px",
                        left: "6%",
                        display: "flex",
                        // justifyContent: "space-between"
                    }}>
                        <div>
                            <div className="Contact_Us"> CONTACT US </div>
                            <div className="Under_Contact_Us">
                                <div>You have a question about learning English Network</div>
                                <div>fill out our Contact Form, and we will get back to you asap.</div>
                            </div>
                        </div>
                        <div className="Icon_Contact_Port">
                            <div onClick={() => { window.location.href = "https://facebook.com" }}>
                                <img className="Icon_Image" src={facebookIcon} alt="Facebook"></img>
                            </div>
                            <div style={{ width: "10px" }}></div>
                            <div onClick={() => { window.location.href = "https://www.gmail.com" }}>
                                <img className="Icon_Image" src={gmailIcon} alt="Gmail"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Footer_2">
                    <div style={{
                        width: "88%",
                        left: "6%",
                        position: "relative",
                        display: "flex",
                        marginTop: "auto",
                        marginBottom: "auto",

                    }}>
                        <img className="Footer_Logo" src={logo} />
                        <div className="Footer_Copyright">
                            © Copyright Committed People 2020 - All rights reserved.
                        </div>
                    </div>
                </div>

            </div >
        );
    }
}

export default Footer;