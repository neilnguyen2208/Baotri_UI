import React, {Component} from 'react'
import './Footer.css'
import facebookIcon from '../../resources/facebook.png'
import twitterIcon from '../../resources/twitter.png'
class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Footer">
                <div className="FollowUs">
                    <a href="https://facebook.com" className="Icon_Facebook">
                        <img className="Icon_Facebook_Image" src={facebookIcon} alt="Facebook"></img>
                    </a>
                    <a href="https://twitter.com" className="Icon_Twitter">
                        <img className="Icon_Twitter_Image" src={twitterIcon} alt="Twitter"></img>
                    </a>
                </div>
                <div className="AboutUs">
                    Copyright @ Committed People 2020 - All rights reserved.
                </div>
            </div>
        );
    }
}

export default Footer;