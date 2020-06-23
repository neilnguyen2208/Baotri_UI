import React, { Component } from 'react'
import Header from "../../components/Header/Header.js";
import './Admin_UserDetailManagement.css'
import Footer from "../../components/Footer/Footer.js";
import PageTitle from "../../components/PageTitle/PageTitle.js"
import btn_element from '../../resources/btn_element.png'
import Popup from 'reactjs-popup'
// import jwt_decode from 'jwt-decode'
import activated_checkbox from '../../resources/activated_checkbox.png'
import deactivated_checkbox from '../../resources/deactivated_checkbox.png'



class Admin_UserDetailManagement extends Component {
    constructor(props) {
        super(props);

        //for popups
        this.notifyContent = "";

        //for token of admin
        this.token = "";

        //for change pass world
        this.newPassword_ = "";
        this.newPassword_Confirm = "";
        this.canUpdatePass = false;
        this.canClickUpdatePass = false;

        //for update user info
        this.newDisplayName = "";
        this.canUpdateInfo = false;

        //for fetching information of this user.
        this.user_ID = "";

        //for update remind setting 
        this.canClickUpdateRemindSetting = false;

        this.state = {
            userInfo: {

            },
            userInfo_PatchDTO: {
                "id": "",
                "displayName": "",
                "userName": "",
                "email": "",
                "currentPassword": null,
                "newPassword": null
            },
            remindSetting_PutDTO: {
                "days": -1
            },
            remindOptionsList: [
                {
                    "id": 0,
                    "value": "Don't remind me!",
                    "active": true
                },
                {
                    "id": 1,
                    "value": "Everyday",
                    "active": false
                },
                {
                    "id": 2,
                    "value": "2 days",
                    "active": false
                },
                {
                    "id": 3,
                    "value": "3 days",
                    "active": false
                },
                {
                    "id": 5,
                    "value": "5 days",
                    "active": false
                }
            ],
            "isUpdateInfo": true,
            "isChangePass": false,
            "isChangeRemind": false,
            "avatar_URL": "https://i.imgur.com/q54xYo3.png",
            "user_ID": "",
            "password_length": 10,
            "isLoadDone": false,

        }
    }

    componentDidMount() {
        this.fetchInfo();
    }

    fetchInfo() {
        //lấy id từ path parameter
        this.user_ID = this.props.match.params.id;

        //xử lý token
        this.token = sessionStorage.getItem('token');

        //Kiểm tra có phải Admin hay không?

        fetch('/api/v1/users/' + this.user_ID, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })
            .then(response =>
                response.json()
            )
            .then(response => {
                this.setState({
                    userInfo: response,
                    isLoadDone: true
                });
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
                this.canUpdatePass = false;
            }
            else {
                this.canUpdatePass = true;
            }
        }
        else {
            this.notifyContent = "New password and confirmation password must be the same!";
            this.canUpdatePass = false;
        }
    }

    checkPasswordEmptyField = () => {
        if (this.newPassword_ === null || this.newPassword_ === ""
            || this.currentPassword === null || this.currentPassword === ""
            || this.newPassword_Confirm === null || this.newPassword_Confirm === "") {
            this.canClickUpdatePass = false;
        }
        else {
            this.canClickUpdatePass = true;
        }
    }

    checkDisplayNameEmptyField = (e) => {
        if (this.newDisplayName === "" || this.newDisplayName === null) {
            this.canUpdateInfo = false;
        }
        else {
            this.canUpdateInfo = true;
        }
    }

    updateInfo = (e) => {
        e.preventDefault();

        fetch('/api/v1/users/' + this.user_ID, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            },
            body: JSON.stringify(this.state.userInfo_PatchDTO)
        })
            .then(response => {
                console.log(response);
                if (response.status === 200 || response.status === 204) {
                    this.closeUpdateUserInfoConfirmationPopupHandler();
                    this.notifyContent = "Update info success!";
                    this.openNotifyPopupHandler();
                }
                else {
                    this.closeUpdateUserInfoConfirmationPopupHandler();
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

        if (!this.canUpdatePass) {
            this.openNormalNotifyPopupHandler();
        }
        else {
            e.preventDefault();
            fetch('/api/v1/users/' + this.user_ID, {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${this.token}`
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

    //for reminder => bug api
    fetchReminderInfo = () => {
        this.canClickUpdateRemindSetting = false;
        fetch('/api/v1/users/' + this.user_ID + "/reminders", {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })
            .then(response => {
                console.log(response);
                response.json();
            })
            .then((response) => {
                console.log(response);
                // this.setState({ remindSetting_PutDTO: response });
            })
            .catch(error => {
                console.log(error);
            })
    }

    activateRemindSelection = (remind_option_ID) => {
        this.canClickUpdateRemindSetting = true;
        this.setState({
            remindSetting_PutDTO: {
                days: remind_option_ID
            }
        })
    }

    updateRemindSetting = (e) => {
        e.preventDefault();

        fetch('/api/v1/users/' + this.user_ID + "/reminders", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            },
            body: JSON.stringify(this.state.remindSetting_PutDTO)
        })
            .then(response => {
                console.log(response);
                if (response.status === 200 || response.status === 204) {
                    this.closeUpdateRemindConfirmationPopupHandler();
                    this.notifyContent = "You have change your remind setting!";
                    this.openNotifyPopupHandler();
                }
                else {
                    this.closeUpdateRemindConfirmationPopupHandler();
                    this.notifyContent = "Error!";
                    this.openNotifyPopupHandler();
                }
            }
            )
            .catch(error => {
                console.log(error);
            })
    }

    handleBanUser = (e) => {
        e.preventDefault();
        this.notifyContent = "Do you want to ban this user!";
        this.openBanUserConfirmationPopupHandler();
    }

    banUser = (e) => {

        console.log("Đã ban user!");

        //call api ở đây.   

        this.notifyContent = "This user have banned!";
        this.closeBanUserConfirmationPopupHandler();
        this.openNotifyPopupHandler();
    }

    render() {
        let view;

        let remindOptionsList = this.state.remindOptionsList.map(remindOption =>
            <div className="Custom_Checkbox" key={remindOption.id} onClick={() => this.activateRemindSelection(remindOption.id)}>
                {remindOption.id === this.state.remindSetting_PutDTO.days ?
                    <img alt="o" src={activated_checkbox} className="Custom_Checkbox_Image" />
                    :
                    <img alt="o" src={deactivated_checkbox} className="Custom_Checkbox_Image" />
                }
                <div className="Custom_Checkbox_Label">
                    {remindOption.value}
                </div>
            </div>
        )

        if (this.state.isUpdateInfo) {
            view = <div className="User_Show_Info_Port">
                <div className="User_Show_Info_Sub_Port">
                    <div >
                        <div className="Label">Display name:</div>
                        <input className="Changable_Input" type="text" defaultValue={this.state.userInfo.displayName} onChange={this.changeDisplayNameHandler}></input>
                    </div>
                    <div >
                        <div className="Label">Username:</div>
                        <input className="Unchangable_Input" type="text" defaultValue={this.state.userInfo.userName} readOnly></input>
                    </div>
                    <div>
                        <div className="Label">Email:</div>
                        <input className="Unchangable_Input" type="text" defaultValue={this.state.userInfo.email} readOnly></input>
                    </div>
                    <div >
                        <div className="Label">Passwords:</div>
                        <input className="Unchangable_Input" type="text" defaultValue={this.generateHiddenPass()} readOnly></input>
                    </div>
                    <div className="Save_Change_Info_Btn_Port" >
                        <button className="Blue_Button" disabled={!this.canUpdateInfo} onClick={() => { this.notifyContent = "Do you want to update your information?"; this.openUpdateUserInfoConfirmationPopupHandler() }}>Save changes</button>
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
                                <button className="Blue_Button" disabled={!this.canClickUpdatePass} onClick={this.updatePassword}>Save password</button>
                            </div>
                        </div>
                    </div>;
            }
            else
                view =
                    view =
                    <div className="User_Show_Info_Port">
                        <div className="User_Show_Info_Sub_Port">
                            <div className="Remind_Port">
                                Choose a time step and we will announce you via mail.
                        </div>
                            {remindOptionsList}
                            <div className="Save_Change_Remind_Btn_Port">
                                <button className="Blue_Button" disabled={!this.canClickUpdateRemindSetting} onClick={() => { this.notifyContent = "Do you want to change your remind setting?"; this.openUpdateRemindConfirmationPopupHandler() }}>Save setting</button>
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
                                        <img alt="avatar" className="Avatar" src={this.state.avatar_URL} />
                                    </div>
                                    <div className="User_Name_Gmail_Port">
                                        <div className="User_Name">
                                            {this.state.userInfo.displayName}
                                        </div>
                                        <div className="Gmail">
                                            {this.state.userInfo.email}
                                        </div>
                                        <div className="Ban_Btn_Port">
                                            <button className="Red_Button" onClick={this.handleBanUser}>Ban</button>
                                        </div>
                                    </div>

                                </div>
                                {/* User Menu*/}
                                <div className="User_Menu_Port" hidden={!this.state.isLoadDone} >
                                    <div className="Menu_Item" onClick={this.handleUpdate}>
                                        <img alt="*" className="Btn_Element" src={btn_element}></img>
                                        <div> Update infomation</div>
                                    </div>

                                    <div className="Menu_Item" onClick={this.handleChangePass}>
                                        <img alt="*" className="Btn_Element" src={btn_element}></img>
                                        <div>Change password</div>
                                    </div>
                                    <div className="Menu_Item" onClick={this.handleChangeRemind} >
                                        <img alt="*" className="Btn_Element" src={btn_element}></img>
                                        <div > Remind Setting</div>
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

                {/* Confirm update user info Popup*/}
                <Popup modal
                    open={this.state.isUpdateUserInfoConfirmationPopupOpen}
                    onOpen={this.openUpdateUserInfoConfirmationPopupHandler}
                    closeOnDocumentClick={false}
                >
                    <React.Fragment>
                        <div className="Align_Center">
                            <div className="Height_30px"></div>
                            <div className="Simple_Label">{this.notifyContent}</div>
                            <div className="Height_30px"></div>
                            <div className="Justify_Content_Space_Between">
                                <button className="Blue_Button" onClick={(e) => this.updateInfo(e)}>
                                    Verify
                                </button>
                                <button className="Red_Button" onClick={this.closeUpdateUserInfoConfirmationPopupHandler}>
                                    Cancel
                                </button>
                            </div>
                            <div className="Height_10px"></div>
                        </div>
                    </React.Fragment>
                </Popup>

                {/* Confirm ban user Popup*/}
                <Popup modal
                    open={this.state.isBanUserConfirmationPopupOpen}
                    onOpen={this.openBanUserConfirmationPopupHandler}
                    closeOnDocumentClick={false}
                >
                    <React.Fragment>
                        <div className="Align_Center">
                            <div className="Height_30px"></div>
                            <div className="Simple_Label">{this.notifyContent}</div>
                            <div className="Height_30px"></div>
                            <div className="Justify_Content_Space_Between">
                                <button className="Blue_Button" onClick={(e) => this.banUser(e)}>
                                    Verify
                                </button>
                                <button className="Red_Button" onClick={this.closeUpdateUserInfoConfirmationPopupHandler}>
                                    Cancel
                                </button>
                            </div>
                            <div className="Height_10px"></div>
                        </div>
                    </React.Fragment>
                </Popup>

                {/* Update remind popup */}
                <Popup modal
                    open={this.state.isUpdateRemindConfirmationPopupOpen}
                    onOpen={this.openUpdateRemindConfirmationPopupHandler}
                    closeOnDocumentClick={false}
                >
                    <React.Fragment>
                        <div className="Align_Center">
                            <div className="Height_30px"></div>
                            <div className="Simple_Label">{this.notifyContent}</div>
                            <div className="Height_30px"></div>
                            <div className="Justify_Content_Space_Between">
                                <button className="Blue_Button" onClick={(e) => this.updateRemindSetting(e)}>
                                    Verify
                                </button>
                                <button className="Red_Button" onClick={this.closeUpdateRemindConfirmationPopupHandler}>
                                    Cancel
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
        this.fetchReminderInfo();
        this.setState({
            "isUpdateInfo": false,
            "isChangePass": false,
            "isChangeRemind ": true,
        })
    }

    //handle change info
    changeDisplayNameHandler = (e) => {
        this.state.userInfo_PatchDTO.displayName = e.target.value;
        this.newDisplayName = e.target.value;
        this.checkDisplayNameEmptyField();
        this.setState(this.state);
    }

    //handle popup:
    openNotifyPopupHandler = () => {
        this.setState({ isNotifyPopupOpen: true });
    }

    openNormalNotifyPopupHandler = () => {
        this.setState({ isNormalNotifyPopupOpen: true });
    }

    closeNormalNotifyPopupHandler = () => {
        this.setState({ isNormalNotifyPopupOpen: false });
    }

    closeNotifyPopupHandlerAndReload = () => {
        this.setState({ isNotifyPopupOpen: false });
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

    openUpdateUserInfoConfirmationPopupHandler = () => {
        this.setState({ isUpdateUserInfoConfirmationPopupOpen: true });
    }

    closeUpdateUserInfoConfirmationPopupHandler = () => {
        this.setState({ isUpdateUserInfoConfirmationPopupOpen: false });
    }

    openBanUserConfirmationPopupHandler = () => {
        this.setState({ isBanUserConfirmationPopupOpen: true });
    }

    closeBanUserConfirmationPopupHandler = () => {
        this.setState({ isBanUserConfirmationPopupOpen: false });
    }

    openUpdateRemindConfirmationPopupHandler = () => {
        this.setState({ isUpdateRemindConfirmationPopupOpen: true });
    }

    closeUpdateRemindConfirmationPopupHandler = () => {
        this.setState({ isUpdateRemindConfirmationPopupOpen: false });
    }

}

export default Admin_UserDetailManagement;
