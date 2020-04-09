import React, {Component} from 'react'
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import { Container, Col, Row } from 'reactstrap';
import Header from "../../components/Header/Header.js";
import './AboutUs.css'
import Footer from '../../components/Footer/Footer';

class AboutUs extends Component{

    constructor(){
        super();
    }

    render(){
        return(
            <div className="About">
                <div className="About_Header">
                    <Header></Header>
                </div>
                <div className="Content">
                    <div className="Dock_Notification">
                        One of the most effective ways to improve your English Explorer a bit to find out what we do.
                    </div>
                   <div className="Content_Row">
                        <p>You should be open to learn new things.</p>
                        <p>You should be open to learn new things.</p>
                        <p>You should be open to learn new things.</p>
                        <p>You should be open to learn new things.</p>
                        <p>You should be open to learn new things.</p>
                        <p>You should be open to learn new things.</p>
                        <p>You should be open to learn new things.</p>
                        <p>You should be open to learn new things.</p>
                   </div>
                   <div className="About_Footer">
                       <Footer></Footer>
                   </div>
                </div>
            </div>
        );
    }

}

export default AboutUs;