import React, { Component } from 'react'
import './Admin_AccountCenter.css'
import btn_element from '../../resources/btn_element.png'
import Footer from "../../components/Footer/Footer.js";
import PageTitle from "../../components/PageTitle/PageTitle.js"
import Header from "../../components/Header/Header.js";
import Admin_Menu from '../../components/AdminMenu/AdminMenu';
import jwt_decode from 'jwt-decode'
import Popup from 'reactjs-popup'

class Admin_AccountCenterComponent extends Component {
    constructor(props) {
        super(props);
        this.notifyContent = "";
        this.newPassword_ = "";
        this.newPassword_Confirm = "";
        this.state = {
            adminInfo_PatchDTO:
            {
                "displayName": "",
                "userName": "",
                "email": "",
                "currentPassword": null,
                "newPassword": null
            }
            ,
            admin_id: "",
            isUpdateInfo: true,
            isChangePass: false,
            isChangeRemind: false,
            "avatarUrl": "https://i.imgur.com/q54xYo3.png",
            "passwordLength": 12,
            "isNotifyPopupOpen": false,
            "isNormalNotifyPopupOpen": false,
            "canUpdateInfo": false,
            "canUpdatePass": false,
            "canClickUpdatePass": false
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
        this.admin_id = jwtParsed.sub;

        fetch('/api/v1/users/' + this.admin_id, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => response.json())
            .then(response => {
                this.state.adminInfo_PatchDTO = response;
                // console.log(this.state.adminInfo_PatchDTO);
                this.setState(this.state);
            })
            .catch(error => {
                console.log(error);
            })
    }

    updateInfo = (e) => {
        e.preventDefault();
        let token = localStorage.getItem('token');
        if (!token || token.length < 10)
            return;
        let jwtParsed = jwt_decode(token);
        this.admin_id = jwtParsed.sub;
        console.log(JSON.stringify(this.state.adminInfo_PatchDTO));
        fetch('/api/v1/users/' + this.admin_id, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(this.state.adminInfo_PatchDTO)
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
        console.log("update pass has been called!");

        if (!this.state.canUpdatePass) {
            this.openNormalNotifyPopupHandler();
        }
        else {
            e.preventDefault();
            let token = localStorage.getItem('token');
            if (!token || token.length < 10)
                return;
            let jwtParsed = jwt_decode(token);
            this.admin_id = jwtParsed.sub;
            console.log(JSON.stringify(this.state.adminInfo_PatchDTO));

            fetch('/api/v1/users/' + this.admin_id, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(this.state.adminInfo_PatchDTO)
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

    //generate hiden pass
    generateHiddenPass = () => {
        var hidden_pass = "";
        for (let i = 0; i < this.state.passwordLength; i++) {
            hidden_pass += "*";
        }
        return hidden_pass;
    }

    render() {
        let view = <div></div>;

        if (this.state.isUpdateInfo) {
            view =
                <div className="Admin_Account_Center_Show_Info_Sub_Port"  >
                    {/* display name port */}
                    <div className="Admin_Account_Center_Label">Display name: </div>
                    <input className="Admin_Account_Center_Changable_Input" type="text" defaultValue={this.state.adminInfo_PatchDTO.displayName} onChange={this.changeDisplayNameHandler} />

                    {/* user name port */}
                    <div className="Admin_Account_Center_Label">Username:</div>
                    <input className="Admin_Account_Center_Unchangable_Input" type="text" defaultValue={this.state.adminInfo_PatchDTO.userName} readOnly ></input>

                    {/*  gmail port*/}
                    <div className="Admin_Account_Center_Label">Email:</div>
                    <input className="Admin_Account_Center_Unchangable_Input" type="text" defaultValue={this.state.adminInfo_PatchDTO.email} readOnly ></input>

                    {/* password port */}
                    <div className="Admin_Account_Center_Label">Passwords:</div>
                    <input className="Admin_Account_Center_Unchangable_Input" type="text" defaultValue={this.generateHiddenPass()} readOnly></input>

                    {/* save change port */}
                    <div className="Admin_Account_Center_Save_Change_Info_Btn_Port">
                        <button className="Blue_Button" onClick={this.updateInfo} disabled={!this.state.canUpdate}>Save change(s)</button>
                    </div>
                </div>
        }
        else {
            if (this.state.isChangePass) {
                view =
                    <div className="Admin_Account_Center_Show_Info_Sub_Port">
                        <div>
                            <div className="Admin_Account_Center_Label">Current passwords:</div>
                            <input className="Simple_Changable_Text_Input" type="password" onChange={this.changeCurrentPasswordHandler}></input>
                        </div>
                        <div>
                            <div className="Admin_Account_Center_Label">New passwords:</div>
                            <input className="Simple_Changable_Text_Input" type="password" onChange={this.changeNewPasswordHandler} ></input>
                        </div>
                        <div>
                            <div className="Admin_Account_Center_Label">Confirm new passwords:</ div>
                            <input className="Simple_Changable_Text_Input" type="password" onChange={this.changeConfirmNewPasswordHandler}></input>
                        </div>
                        <div className="Admin_Account_Center_Save_Change_Info_Btn_Port">
                            <button className="Blue_Button" onClick={this.updatePassword} disabled={!this.state.canClickUpdatePass}>Save password</button>
                        </div>
                    </div>;
            }
        }

        return (
            <div className="Admin_Account_Center">

                {/* Header Area */}
                <div className="Admin_Account_Center_Header">
                    <Header></Header>
                </div>

                <div className="Admin_Account_Center_Dock_Notification">
                    One of the most effective ways to improve your English Explorer a bit to find out what we do.
                </div>

                {/* Body Area */}
                <div className="Admin_Account_Center_Main_Port">

                    {/* Page Title */}
                    <PageTitle prevTitle="Manage" mainTitle="Your page"></PageTitle>
                    <div className="Admin_Account_Center_Horizontal_Menu_Bar_Main_Management_Port">
                        <Admin_Menu />

                        {/* Menu_Main_Show_Port */}
                        <div className="Admin_Account_Center_Management_Port">
                            <div className="Admin_Account_Center_Menu">
                                <div className="Admin_Account_Center_Menu_Item" onClick={this.handleUpdateOption}>
                                    <img className="Admin_Account_Center_Btn_Element" src={btn_element}></img>
                                    <div> Update infomation</div>
                                </div>
                                <div className="Admin_Account_Center_Menu_Item" onClick={this.handleChangePassOption}>
                                    <img className="Admin_Account_Center_Btn_Element" src={btn_element}></img>
                                    <div>Change password</div>
                                </div>
                            </div>
                            <div className="Admin_Account_Center_Show_Info_Port">
                                {view}
                            </div>
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

                <div className="Admin_Account_Center_Footer">
                    <Footer ></Footer>
                </div>

            </div>
        );
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

    //handle change info
    changeDisplayNameHandler = (e) => {
        this.state.adminInfo_PatchDTO.displayName = e.target.value;
        console.log(this.state.adminInfo_PatchDTO.displayName);
        this.state.canUpdate = true;
        this.setState(this.state);
    }

    //change input info of update pass:
    /*  */
    changeCurrentPasswordHandler = (e) => {
        this.state.adminInfo_PatchDTO.currentPassword = e.target.value;
        this.checkPasswordEmptyField();
        this.setState(this.state);
    }

    changeNewPasswordHandler = (e) => {
        this.state.adminInfo_PatchDTO.newPassword = e.target.value;
        this.newPassword_ = e.target.value;
        this.checkValidNewPassword();
        this.checkPasswordEmptyField();
        this.setState(this.state);

    }

    changeConfirmNewPasswordHandler = (e) => {
        this.state.adminInfo_PatchDTO.newPassword = e.target.value;
        this.newPassword_Confirm = e.target.value;
        this.checkValidNewPassword();
        this.checkPasswordEmptyField();
        this.setState(this.state);
    }

    //handle change option:
    handleUpdateOption = () => {
        this.setState({
            "isUpdateInfo": true,
            "isChangePass": false,
        })
    }
    handleChangePassOption = () => {
        this.setState({
            "isUpdateInfo": false,
            "isChangePass": true,
        })
    }

}

export default Admin_AccountCenterComponent;
