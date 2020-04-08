import React, {Component} from 'react'
import './Footer.css'

class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="Footer">
                <div className="FollowUs">
                    FollowUs
                </div>
                <div className="AboutUs">
                    AboutUs
                </div>
            </div>
        );
    }
}

export default Footer;