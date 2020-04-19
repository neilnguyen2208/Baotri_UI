import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap';
import Header from "../../components/Header/Header.js";
import './UserMenu.css'
import Footer from "../../components/Footer/Footer.js";
import btn_element from '../../resources/btn_element.png'

class UserMenu extends Component {
    constructor(props) {
        super();
        this.state = {
            "avatarUrl": "https://i.imgur.com/q54xYo3.png",
            "displayName": "Nguyen Van Dong",
            "userName": "tesla",
            "gmail": "dongnv.since1999@gmail.com",
            "password_length": 10,
        }
        this.displayName = this.state.displayName;
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

    render() {

        return (
            <div className="User_Menu">
                <div className="User_Menu_User_Info_Port">
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
                            <div className="Logout_Btn_Port">
                                <button className="Logout_Btn">Logout</button>
                            </div>
                        </div>

                    </div>
                    <div className="User_Menu_Port">
                        <div className="Update_Info_Menu_Item">
                            <img className="Btn_Element" src={btn_element}></img>
                            <div> Update infomation</div>
                        </div>

                        <div className="Change_Pass_Menu_Item">
                            <img className="Btn_Element" src={btn_element}></img>
                            <div>Change password</div>
                        </div>
                        <div className="Change_Remind_Menu_Item">
                            <img className="Btn_Element" src={btn_element}></img>
                            <div> Remind Setting</div>
                        </div>
                        <div className="Room_Chat_Menu_Item">
                            <img className="Btn_Element" src={btn_element}></img>
                            <div>Room Chat</div>
                        </div>
                    </div>
                </div>
                <div className="User_Show_Info_Port">
                    <div className="User_Show_Info_Sub_Port">
                        <div className="Display_Name_Port">
                            <div className="Display_Name_Label">Display name::</div>
                            <input className="Display_Name_Input" type="text" defaultValue={this.state.displayName} onchange={this.handleChangeDisplayName}></input>
                        </div>
                        <div className="User_Name_Port">
                            <div className="User_Name_Label">Username:</div>
                            <input className="User_Name_Input" type="text" defaultValue={this.state.userName} readOnly></input>
                        </div>
                        <div className="User_Name_Port">
                            <div className="User_Name_Label">Gmail:</div>
                            <input className="User_Name_Input" type="text" defaultValue={this.state.gmail} readOnly></input>
                        </div>
                        <div className="User_Name_Port">
                            <div className="User_Name_Label">Passwords:</div>
                            <input className="User_Name_Input" type="text" defaultValue={this.generateHiddenPass()} readOnly></input>
                        </div>
                        <div className = "Save_Change_Info_Btn_Port">
                            <button className="Save_Change_Info_Btn">Save changes</button>
                        </div>
                    </div>
                </div>

            </div >

        );
    }

}

export default UserMenu;