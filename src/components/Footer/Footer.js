import React, { Component } from 'react'
import './Footer.css'
import facebookIcon from '../../resources/facebook.png'
import twitterIcon from '../../resources/twitter.png'
class Footer extends Component {

    render() {
        return (
            <div className="Footer">
                <div className="Footer_1">
                    <div className="Contact us"> CONTACT US </div>
                    <div className="Under_Contact_Us">
                        <div>You have a question about learning English Network</div>
                        <div>fill out our Contact Form, and we will get back to you asap.</div>
                    </div>
                </div>

                <div className="Footer_2">
                    <div className="FollowUs">
                        {/* <a href="https://facebook.com" className="Icon_Facebook">
                    <img className="Icon_Facebook_Image" src={facebookIcon} alt="Facebook"></img>
                </a>
                <a href="https://twitter.com" className="Icon_Twitter">
                    <img className="Icon_Twitter_Image" src={twitterIcon} alt="Twitter"></img>
                </a> */}
                    </div>
                    <div className="AboutUs">
                        Copyright @ Committed People 2020 - All rights reserved.
                </div>
                </div>

            </div >
        );
    }
}

export default Footer;