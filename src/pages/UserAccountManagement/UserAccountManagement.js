import React, { Component } from 'react'
import { Container, Col, Row } from 'reactstrap';
import Header from "../../components/Header/Header.js";
import './UserAccountManagement.css'
import Footer from "../../components/Footer/Footer.js";
import PageTitle from "../../components/PageTitle/PageTitle.js"
import btn_element from '../../resources/btn_element.png'
import Popup from 'reactjs-popup'
import jwt_decode from 'jwt-decode'

class UserAccountManagement extends Component {
    constructor(props) {
        super(props);
        this.notifyContent = "";
        this.newPassword_ = "";
        this.newPassword_Confirm = "";

        this.state = {
            userInfo_PatchDTO: {
                "displayName": "",
                "userName": "",
                "email": "",
                "currentPassword": null,
                "newPassword": null
            },
            "isUpdateInfo": true,
            "isChangePass": false,
            "isChangeRemind": false,
            "canUpdateInfo": false,
            "canUpdatePass": false,
            "canClickUpdatePass": false,
            "avatar_URL": "https://i.imgur.com/q54xYo3.png",
            "user_ID": "",
            "role": "",
            "password_length": 10,
            "isLoadDone": false
        }
    }

    componentDidMount() {
        this.fetchInfo();
    }

    fetchInfo() {
        let token = localStorage.getItem('token');
        if (!token || token.length < 10)
            return;
        let jwtParsed = jwt_decode(token);
        this.user_ID = jwtParsed.sub;
        // console.log(jwtParsed);
        this.state.role = jwtParsed.roles[0];
        console.log("ROLE_ADMIN");
        console.log(this.state.role.authority === "ROLE_ADMIN");

        fetch('/api/v1/users/' + this.user_ID, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response =>
                response.json()
            )
            .then(response => {
                // console.log(response);
                this.state.userInfo_PatchDTO = response;
                this.state.isLoadDone = true;
                this.setState(this.state);
            })
            .catch(error => {
                console.log(error);
            })
    }

    generateHiddenPass() {
        var hidden_pass = "";
        for (let i = 0; i < this.state.password_length; i++) {
            hidden_pass += "*";
        }
        return hidden_pass;
    }

    checkValidNewPassword = () => {
        if (this.newPassword_ === this.newPassword_Confirm) {
            if (this.newPassword_.length <= 5) {
                this.notifyContent = "The length of the new password must be at least 6!";
                this.state.canUpdatePass = false;
            }
            else {
                this.state.canUpdatePass = true;
            }
        }
        else {
            this.notifyContent = "New password and confirmation password must be the same!";
            this.state.canUpdatePass = false;
        }
    }

    checkPasswordEmptyField = () => {
        if (this.newPassword_ === null || this.newPassword_ === ""
            || this.currentPassword === null || this.currentPassword === ""
            || this.newPassword_Confirm === null || this.newPassword_Confirm === "") {
            this.state.canClickUpdatePass = false;
        }
        else {
            this.state.canClickUpdatePass = true;
        }
    }

    updateInfo = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token');
        if (!token || token.length < 10)
            return;
        let jwtParsed = jwt_decode(token);
        this.user_ID = jwtParsed.sub;
        console.log(JSON.stringify(this.state.userInfo_PatchDTO));
        fetch('/api/v1/users/' + this.user_ID, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(this.state.userInfo_PatchDTO)
        })
            .then(response => {
                console.log(response);
                if (response.status === 200 || response.status === 204) {
                    this.notifyContent = "Update info success!";
                    this.openNotifyPopupHandler();
                }
                else {
                    this.notifyContent = "Update info failed!";
                    this.openNotifyPopupHandler();
                }
            }
            )
            .catch(error => {
                console.log(error);
            })
    }

    updatePassword = (e) => {

        if (!this.state.canUpdatePass) {
            this.openNormalNotifyPopupHandler();
        }
        else {
            e.preventDefault();
            let token = localStorage.getItem('token');
            if (!token || token.length < 10)
                return;
            let jwtParsed = jwt_decode(token);
            this.user_ID = jwtParsed.sub;
            console.log(JSON.stringify(this.state.userInfo_PatchDTO));

            fetch('/api/v1/users/' + this.user_ID, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(this.state.userInfo_PatchDTO)
            })
                .then(response => response.json())
                .then(response => {
                    if (response.currentPassword === null) {
                        this.notifyContent = "Your current password is wrong!";
                        this.openNormalNotifyPopupHandler();
                    }
                    else {
                        this.notifyContent = "Update password success!";
                        this.openNotifyPopupHandler();
                    }
                })
        }
    }

    handleLogOut = () => {
        localStorage.removeItem('token');
        console.log('logout');
        this.setState({});
        window.location.href = '/';
    }

    render() {
        let view;
        if (this.state.isUpdateInfo) {
            view = <div className="User_Show_Info_Port">
                <div className="User_Show_Info_Sub_Port">
                    <div >
                        <div className="Label">Display name:</div>
                        <input className="Changable_Input" type="text" defaultValue={this.state.userInfo_PatchDTO.displayName} onChange={this.changeDisplayNameHandler}></input>
                    </div>
                    <div >
                        <div className="Label">Username:</div>
                        <input className="Unchangable_Input" type="text" defaultValue={this.state.userInfo_PatchDTO.userName} readOnly></input>
                    </div>
                    <div>
                        <div className="Label">Email:</div>
                        <input className="Unchangable_Input" type="text" defaultValue={this.state.userInfo_PatchDTO.email} readOnly></input>
                    </div>
                    <div >
                        <div className="Label">Passwords:</div>
                        <input className="Unchangable_Input" type="text" defaultValue={this.generateHiddenPass()} readOnly></input>
                    </div>
                    <div className="Save_Change_Info_Btn_Port" disabled={!this.state.canUpdateInfo}>
                        <button className="Blue_Button" onClick={this.updateInfo} >Save changes</button>
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
                                <div className="Simple_Label">Current passwords:</div>
                                <input className="Simple_Changable_Text_Input" type="password" defaultValue="" onChange={this.changeCurrentPasswordHandler} ></input>
                            </div>
                            <div>
                                <div className="Simple_Label">New passwords:</div>
                                <input className="Simple_Changable_Text_Input" type="password" defaultValue="" onChange={this.changeNewPasswordHandler}></input>
                            </div>
                            <div>
                                <div className="Label">Confirm new passwords:</div>
                                <input className="Simple_Changable_Text_Input" type="password" defaultValue="" onChange={this.changeConfirmNewPasswordHandler}></input>
                            </div>
                            <div className="Save_Change_Info_Btn_Port">
                                <button className="Blue_Button" disabled={!this.state.canClickUpdatePass} onClick={this.updatePassword}>Save password</button>
                            </div>
                        </div>
                    </div>;
            }
            else
                view =
                    <div className="User_Show_Info_Port">
                        <div className="User_Show_Info_Sub_Port">
                            <div className="Remind_Port">
                                Choose a time step and we will announce you via mail.
                            </div>
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
            <div className="User_Account_Management">
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
                                        <img className="Avatar" src={this.state.avatar_URL} />
                                    </div>
                                    <div className="User_Name_Gmail_Port">
                                        <div className="User_Name">
                                            {this.state.userInfo_PatchDTO.displayName}
                                        </div>
                                        <div className="Gmail">
                                            {this.state.userInfo_PatchDTO.email}
                                        </div>
                                        <div className="Logout_Btn_Port">
                                            <button className="Logout_Btn" onClick={this.handleLogOut}>Logout</button>
                                        </div>
                                    </div>

                                </div>
                                {/* User Menu*/}
                                <div className="User_Menu_Port" hidden={!this.state.isLoadDone} >
                                    <div className="Menu_Item" onClick={this.handleUpdate}>
                                        <img className="Btn_Element" src={btn_element}></img>
                                        <div> Update infomation</div>
                                    </div>

                                    <div className="Menu_Item" onClick={this.handleChangePass}>
                                        <img className="Btn_Element" src={btn_element}></img>
                                        <div>Change password</div>
                                    </div>
                                    <div className="Menu_Item" onClick={this.handleChangeRemind} >
                                        <img className="Btn_Element" src={btn_element} hidden={this.state.role.authority === "ROLE_ADMIN"} ></img>
                                        <div hidden={this.state.role.authority === "ROLE_ADMIN"}> Remind Setting</div>
                                    </div>
                                </div>

                            </div>
                            {/* Show content of menu item */}
                            {view}
                        </div>
                    </div>
                </div>

                {/* Notify Popup with reload*/}
                <Popup modal
                    open={this.state.isNotifyPopupOpen}
                    onOpen={this.openNotifyPopupHandler}
                    closeOnDocumentClick={false}
                >
                    <React.Fragment>
                        <div className="Align_Center">
                            <div className="Height_30px"></div>
                            <div className="Simple_Label">{this.notifyContent}</div>
                            <div className="Height_30px"></div>
                            <div className="Justify_Content_Space_Between">
                                <button className="Blue_Button" onClick={this.closeNotifyPopupHandlerAndReload}>
                                    OK
                                </button>
                            </div>
                            <div className="Height_10px"></div>
                        </div>
                    </React.Fragment>
                </Popup>

                {/* Notify Popup without reload*/}
                <Popup modal
                    open={this.state.isNormalNotifyPopupOpen}
                    onOpen={this.openNormalNotifyPopupHandler}
                    closeOnDocumentClick={false}
                >
                    <React.Fragment>
                        <div className="Align_Center">
                            <div className="Height_30px"></div>
                            <div className="Simple_Label">{this.notifyContent}</div>
                            <div className="Height_30px"></div>
                            <div className="Justify_Content_Space_Between">
                                <button className="Blue_Button" onClick={this.closeNormalNotifyPopupHandler}>
                                    OK
                                </button>
                            </div>
                            <div className="Height_10px"></div>
                        </div>
                    </React.Fragment>
                </Popup>

                <div className="User_Account_Management_Footer">
                    <Footer ></Footer>
                </div>
            </div>
        );
    }

    //handle change option
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

    //handle change info
    changeDisplayNameHandler = (e) => {
        this.state.userInfo_PatchDTO.displayName = e.target.value;
        this.state.canUpdateInfo = true;
        this.setState(this.state);
    }

    //handle popup:
    openNotifyPopupHandler = () => {
        this.state.isNotifyPopupOpen = true;
        this.setState(this.state);
    }

    openNormalNotifyPopupHandler = () => {
        this.state.isNormalNotifyPopupOpen = true;
        this.setState(this.state);
    }

    closeNormalNotifyPopupHandler = () => {
        this.state.isNormalNotifyPopupOpen = false;
        this.setState(this.state);
    }

    closeNotifyPopupHandlerAndReload = () => {
        this.state.isNotifyPopupOpen = false;
        this.setState(this.state);
        window.location.reload();
    }

    changeCurrentPasswordHandler = (e) => {
        this.state.userInfo_PatchDTO.currentPassword = e.target.value;
        this.checkPasswordEmptyField();
        this.setState(this.state);
    }

    changeNewPasswordHandler = (e) => {
        this.state.userInfo_PatchDTO.newPassword = e.target.value;
        this.newPassword_ = e.target.value;
        this.checkValidNewPassword();
        this.checkPasswordEmptyField();
        this.setState(this.state);

    }

    changeConfirmNewPasswordHandler = (e) => {
        this.state.userInfo_PatchDTO.newPassword = e.target.value;
        this.newPassword_Confirm = e.target.value;
        this.checkValidNewPassword();
        this.checkPasswordEmptyField();
        this.setState(this.state);
    }

}

export default UserAccountManagement;
