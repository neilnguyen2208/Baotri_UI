import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap';
import Header from "../../components/Header/Header.js";
import './UserMenu.css'
import Footer from "../../components/Footer/Footer.js";
class UserMenu extends Component {
    constructor(props) {
        super();
        this.name = "COMPARATIVE";
    }
    render() {
        return (
            <div className="User_Menu">
                <div className="User_Menu_User_Info">
                    <div className = "User_Name">
                        {this.props.userName}
                    </div>
                    <div className = "Gmail">
                        {this.props.gmail}
                    </div>
                    <div>
                        {this.props.avatarUrl}
                    </div>
                </div>
            </div >
        );
    }

}

export default UserMenu;