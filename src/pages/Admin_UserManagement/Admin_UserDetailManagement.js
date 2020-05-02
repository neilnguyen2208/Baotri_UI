import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap';
import Header from "../../components/Header/Header.js";
import './Admin_UserDetailManagement.css'
import Footer from "../../components/Footer/Footer.js";
import PageTitle from "../../components/PageTitle/PageTitle.js"
import btn_element from '../../resources/btn_element.png'

class Admin_UserDetailManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "avatarUrl": "https://i.imgur.com/q54xYo3.png",
            "displayName": "Nguyen Van Dong",
            "userName": "tesla",
            "gmail": "dongnv.since1999@gmail.com",
            "password_length": 10,
            isUpdateInfo: true,
            isChangePass: false,
            isChangeRemind: false
        }
    }

    handleLogout = () => {
        //logout
    }

    handleChangeDisplayName = () => {

    }

    generateHiddenPass() {
        var hidden_pass = "";
        for (let i = 0; i < this.state.password_length; i++) {
            hidden_pass += "*";
        }
        return hidden_pass;
    }

    handleUpdate = () => {
        this.setState({
            "isUpdateInfo": true,
            "isChangePass": false,
            "isChangeRemind ": false,
        })
    }

    handleChangePass = () => {
        this.setState({
            "isUpdateInfo": false,
            "isChangePass": true,
            "isChangeRemind ": false,
        })
    }

    handleChangeRemind = () => {
        this.setState({
            "isUpdateInfo": false,
            "isChangePass": false,
            "isChangeRemind ": true,
        })
    }

    render() {
        let view;
        if (this.state.isUpdateInfo) {
            view = <div className="User_Show_Info_Port">
                <div className="User_Show_Info_Sub_Port">
                    <div >
                        <div className="Label">Display name:</div>
                        <input className="Changable_Input" type="text" value={this.state.displayName} onchange={this.handleChangeDisplayName}></input>
                    </div>
                    <div >
                        <div className="Label">Username:</div>
                        <input className="Unchangable_Input" type="text" value={this.state.userName} readOnly></input>
                    </div>
                    <div>
                        <div className="Label">Gmail:</div>
                        <input className="Unchangable_Input" type="text" value={this.state.gmail} readOnly></input>
                    </div>
                    <div >
                        <div className="Label">Passwords:</div>
                        <input className="Unchangable_Input" type="text" value={this.generateHiddenPass()} readOnly></input>
                    </div>
                    <div className="Save_Change_Info_Btn_Port">
                        <button className="Save_Change_Info_Btn">Save changes</button>
                    </div>
                </div>
            </div>
        }
        else {
            if (this.state.isChangePass) {
                view =
                    <div className="User_Show_Info_Port">
                        <div className="User_Show_Info_Sub_Port">
                            <div>
                                <div className="Label">Current passwords:</div>
                                <input className="Changable_Input" type="text" value=""></input>
                            </div>
                            <div>
                                <div className="Label">New passwords:</div>
                                <input className="Changable_Input" type="text" value="" ></input>
                            </div>
                            <div>
                                <div className="Label">Confirm new passwords:</div>
                                <input className="Changable_Input" type="text" value=""></input>
                            </div>
                            <div className="Save_Change_Info_Btn_Port">
                                <button className="Save_Change_Info_Btn">Save password</button>
                            </div>
                        </div>
                    </div>;
            }
            else
                view =
                    <div className="User_Show_Info_Port">
                        <div className="User_Show_Info_Sub_Port">
                            <div className="Remind_Port">
                                Choose a time step and we will announce you via mail.                              </div>
                            <div className="Remind_Port">
                                <input type="checkbox" className="toggle-switch-checkbox" />
                                 Don't remind me!
                             </div>
                            <div className="Remind_Port">
                                <input type="checkbox" className="toggle-switch-checkbox" />
                                1 Days
                            </div>
                            <div className="Remind_Port">
                                <input type="checkbox" className="toggle-switch-checkbox" />
                                 2 Days
                                 </div>

                            <div className="Remind_Port">
                                <input type="checkbox" className="toggle-switch-checkbox" />
                                 3 Days
                                 </div>

                            <div className="Remind_Port">
                                <input type="checkbox" className="toggle-switch-checkbox" />
                                 5 Days
                                 </div>
                            <div className="Save_Change_Remind_Btn_Port">
                                <button className="Save_Change_Remind_Btn">Save setting</button>
                            </div>
                        </div>
                    </div>;
        }

        return (
            <div className="Admin_User_Detail_Management">
                {/* Header */}
                <div className="User_Account_Management_Header">
                    <Header></Header>
                </div>

                {/* Notification below header */}
                <div className="Dock_Notification">
                    One of the most effective ways to improve your English Explorer a bit to find out what we do.
                </div>
                <div className="User_Account_Management_Main_Port"> {/* width = 100%, contain all content */}
                    <div className="User_Account_Management_Inline_Port">
                        <div> <PageTitle prevTitle="Edit your" mainTitle="Profile"></PageTitle></div>
                        <div className="User_Menu">
                            {/* User menu + user info port */}
                            <div className="User_Menu_User_Info_Port">

                                {/* Show info of account */}
                                <div className="User_Info_Port">
                                    <div className="Avatar_Port">
                                        <img className="Avatar" src={this.state.avatarUrl} />
                                    </div>
                                    <div className="User_Name_Gmail_Port">
                                        <div className="User_Name">
                                            {this.state.displayName}
                                        </div>
                                        <div className="Gmail">
                                            {this.state.gmail}
                                        </div>
                                        <div className="Ban_Btn_Port">
                                            <button className="Ban_Btn">Ban</button>
                                        </div>
                                    </div>

                                </div>
                                {/* User Menu*/}
                                <div className="User_Menu_Port">
                                    <div className="Menu_Item" onClick={this.handleUpdate}>
                                        <img className="Btn_Element" src={btn_element}></img>
                                        <div> Update infomation</div>
                                    </div>

                                    <div className="Menu_Item" onClick={this.handleChangePass}>
                                        <img className="Btn_Element" src={btn_element}></img>
                                        <div>Change password</div>
                                    </div>
                                    <div className="Menu_Item" onClick={this.handleChangeRemind}>
                                        <img className="Btn_Element" src={btn_element}></img>
                                        <div> Remind Setting</div>
                                    </div>
                                </div>
                            </div>
                            {/* Show content of menu item */}
                            {view}
                        </div>
                    </div>
                </div>
                <div className="User_Account_Management_Footer">
                    <Footer ></Footer>
                </div>
            </div>
        );
    }
}

export default Admin_UserDetailManagement;
