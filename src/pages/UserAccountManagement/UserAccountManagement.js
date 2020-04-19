import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap';
import Header from "../../components/Header/Header.js";
import './UserAccountManagement.css'
import Footer from "../../components/Footer/Footer.js";
import PageTitle from "../../components/PageTitle/PageTitle.js"
import UserMenu from "../../components/UserMenu/UserMenu.js"

class UserAccountManagement extends Component {
    constructor(props) {
        super(props);
        this.name = "COMPARATIVE";
    }
    render() {
        return (
            <div className="User_Account_Management">
                <div className="User_Account_Management_Header">
                    <Header></Header>
                </div>
                <div className="User_Account_Management_Outline_Port">
                    <div className="User_Account_Management_Inline_Port">
                        <div> <PageTitle prevTitle="Edit your" mainTitle="Profile"></PageTitle></div>
                        <div> <UserMenu userName="Nguyen Van Dong" gmail="dongnv.since199@gmail.com" avatarUrl="https://i.imgur.com/q54xYo3.png"></UserMenu></div>
                        <div className="decoration_insert_left_right_border"></div>
                        <div className="decoration_below_border"></div>
                    </div>
                </div>
                <div className="User_Account_Management_Footer">
                    <Footer ></Footer>
                </div>
            </div>
        );
    }

    // render() {
    //     return (
            
    //             <div className="main">
    //                 <h1>Responsive Card Grid Layout</h1>
    //                 <ul className="cards">
    //                     <li class="cards_item">
    //                         <div className="card">
    //                             <div className="card_image"><img src="https://picsum.photos/500/300/?image=11" /></div>
    //                             <div className="card_content">
    //                                 <h2 className="card_title">Card Grid Layout</h2>
    //                                 <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
    //                                 <button className="btn card_btn">Read More</button>
    //                             </div>
    //                         </div>
    //                     </li>
    //                     <li class="cards_item">
    //                         <div className="card">
    //                             <div className="card_image"><img src="https://picsum.photos/500/300/?image=11" /></div>
    //                             <div className="card_content">
    //                                 <h2 className="card_title">Card Grid Layout</h2>
    //                                 <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
    //                                 <button className="btn card_btn">Read More</button>
    //                             </div>
    //                         </div>
    //                     </li>
    //                     <li class="cards_item">
    //                         <div className="card">
    //                             <div className="card_image"><img src="https://picsum.photos/500/300/?image=11" /></div>
    //                             <div className="card_content">
    //                                 <h2 className="card_title">Card Grid Layout</h2>
    //                                 <p className="card_text">Demo of pixel perfect pure CSS simple responsive card grid layout</p>
    //                                 <button className="btn card_btn">Read More</button>
    //                             </div>
    //                         </div>
    //                     </li>
    //                 </ul>
    //             </div >
              
    //     );
    // }

}

export default UserAccountManagement;
