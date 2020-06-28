import React, { Component } from 'react'
import './UserItem.css'
import edit_btn from "../../../../resources/edit_btn.png"
import delete_btn from "../../../../resources/delete_btn.png"
import banned_icon from "../../../../resources/banned_icon.png"
import unban_btn from "../../../../resources/unban_btn.png"
import Popup from 'reactjs-popup'

class UserItem extends Component {
    constructor(props) {
        super();

        this.notifyContent = "";

        this.state = {
            isVerifyBannedPopupOpen: false,
            isVerifyUnbannedPopupOpen: false,
            isNotifyPopupOpen: false, //popup that reload when close.
            isNormalNotifyPopupOpen: false //popup that not reload when close.

        }
    }

    handleEditUser = (e) => {
        e.stopPropagation();
        document.location.href = "/admin/user_management/" + this.props.id;
    }

    handleBanUser = (e) => {
        e.preventDefault();
        let token = sessionStorage.getItem('token');
        if (!token || token.length < 10)
            return;

        fetch('/api/v1/users/' + this.props.id + "/ban?status=1", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                response.json();
                console.log(response);

                //bug 403 but OK
                this.notifyContent = "Ban user success!";
                this.closeVerifyBannedPopupHandler();
                this.openNotifyPopupHandler();
            })
        // .then(response => {
        //     // console.log(response);
        //     // if (response.currentPassword === null) {
        //     //     this.notifyContent = "Your current password is wrong!";
        //     //     this.openNormalNotifyPopupHandler();
        //     // }
        //     // else {
        //     //     this.notifyContent = "Update password success!";
        //     //     this.openNotifyPopupHandler();
        //     // }
        // })


        console.log('You have banned user have id' + this.props.id);

    }


    handleUnbanUser = (e) => {
        e.stopPropagation();
        e.preventDefault();

        let token = sessionStorage.getItem('token');
        if (!token || token.length < 10)
            return;

        fetch('/api/v1/users/' + this.props.id + "/ban?status=0", {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                response.json();
                console.log(response);

                //bug 403 but OK
                this.notifyContent = "Unban user success!";
                this.closeVerifyUnbannedPopupHandler();
                this.openNotifyPopupHandler();
            })
        // .then(response => {
        //     // if (response.currentPassword === null) {
        //     //     this.notifyContent = "Your current password is wrong!";
        //     //     this.openNormalNotifyPopupHandler();
        //     // }
        //     // else {
        //     //     this.notifyContent = "Update password success!";
        //     //     this.openNotifyPopupHandler();
        //     // }
        // })


        console.log('You have banned user have id' + this.props.id);
    }

    render() {

        return (
            <div className="User_Item">
                <div hidden={this.props.isAccountEnabled} style={{ position: "absolute", zIndex: 1 }}>
                    <img className="Banned_Icon" alt="ban" src={banned_icon} />
                </div>

                <div className="User_Item_Left_Port">

                    <div className="User_Item_Avatar_Port">
                        <img alt="avatar" className="User_Item_Avatar" src={this.props.avatar_url}></img>
                    </div>

                    <div className="User_Item_User_Name_Gmail_Port">
                        <div className="User_Item_Display_User_Name">
                            <div className="User_Item_Display_Name">
                                {this.props.display_name}
                            </div>
                            <div className="User_Item_User_Name">
                                ({this.props.user_name})
                            </div>
                        </div>
                        <div className="User_Item_Gmail">
                            {this.props.gmail}
                        </div>
                    </div>
                </div>
                <div className="Edit_Delete_Btn_Group">
                    <img alt="Edit" className="Edit_Btn" src={edit_btn} onClick={this.handleEditUser} />
                    {this.props.isAccountEnabled ?
                        < img alt="Ban" className="Delete_Btn" src={delete_btn} onClick={this.openVerifyBannedPopupHandler} />
                        :
                        < img alt="Unban" className="Delete_Btn" src={unban_btn} onClick={this.openVerifyUnbannedPopupHandler} />
                    }
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

                {/* Confirm Banned info Popup*/}
                <Popup modal
                    open={this.state.isVerifyBannedPopupOpen}
                    onOpen={this.openVerifyBannedPopupHandler}
                    closeOnDocumentClick={false}
                >
                    <React.Fragment>
                        <div className="Align_Center">
                            <div className="Height_30px"></div>
                            <div className="Simple_Label">{this.notifyContent}</div>
                            <div className="Height_30px"></div>
                            <div className="Justify_Content_Space_Between">
                                <button className="Blue_Button" onClick={(e) => this.handleBanUser(e)}>
                                    Verify
                                </button>
                                <button className="Red_Button" onClick={this.closeVerifyBannedPopupHandler}>
                                    Cancel
                                </button>
                            </div>
                            <div className="Height_10px"></div>
                        </div>
                    </React.Fragment>
                </Popup>

                {/* Confirm Unban info Popup*/}
                <Popup modal
                    open={this.state.isVerifyUnbannedPopupOpen}
                    onOpen={this.openVerifyUnbanPopupHandler}
                    closeOnDocumentClick={false}
                >
                    <React.Fragment>
                        <div className="Align_Center">
                            <div className="Height_30px"></div>
                            <div className="Simple_Label">{this.notifyContent}</div>
                            <div className="Height_30px"></div>
                            <div className="Justify_Content_Space_Between">
                                <button className="Blue_Button" onClick={(e) => this.handleUnbanUser(e)}>
                                    Verify
                                </button>
                                <button className="Red_Button" onClick={this.closeVerifyUnbannedPopupHandler}>
                                    Cancel
                                </button>
                            </div>
                            <div className="Height_10px"></div>
                        </div>
                    </React.Fragment>
                </Popup>

            </div>
        );
    }

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

    //verify popup:
    openVerifyBannedPopupHandler = () => {
        this.notifyContent = "Do you want to ban this user?";
        this.state.isVerifyBannedPopupOpen = true;
        this.setState(this.state);
    }

    closeVerifyBannedPopupHandler = () => {
        this.state.isVerifyBannedPopupOpen = false;
        this.setState(this.state);
    }

    openVerifyUnbannedPopupHandler = () => {
        this.notifyContent = "Do you want to UNBAN this user?";
        this.state.isVerifyUnbannedPopupOpen = true;
        this.setState(this.state);
    }

    closeVerifyUnbannedPopupHandler = () => {
        this.state.isVerifyUnbannedPopupOpen = false;
        this.setState(this.state);
    }

}

export default UserItem;

