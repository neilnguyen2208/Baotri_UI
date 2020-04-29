import React, { Component } from 'react'
import './Admin_AccountCenterComponent.css'
import btn_element from '../../../resources/btn_element.png'

class Admin_AccountCenterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isUpdateInfo: true,
            isChangePass: false,
            isChangeRemind: false,
            "avatarUrl": "https://i.imgur.com/q54xYo3.png",
            "displayName": "Nguyen Van Dong",
            "userName": "tesla",
            "gmail": "dongnv.since1999@gmail.com",
            "password_length": 10,

        }
    }

    handleLogout = () => {
        //logout
    }

    handleUpdateOption = () => {
        this.setState({
            "isUpdateInfo": true,
            "isChangePass": false,
        })
    }

    handleSubmitUpdate = () => {

    }

    handleChangePassOption = () => {
        this.setState({
            "isUpdateInfo": false,
            "isChangePass": true,
        })
    }

    generateHiddenPass = () => {
        var hidden_pass = "";
        for (let i = 0; i < this.state.password_length; i++) {
            hidden_pass += "*";
        }
        return hidden_pass;
    }


    render() {
        let view = <div></div>;

        if (this.state.isUpdateInfo) {
            view =
                <form className="Admin_Account_Center_Show_Info_Sub_Port" onSubmit={this.handleSubmitUpdate} >
                    {/* display name port */}
                    <div className="Admin_Account_Center_Label">Display name: </div>
                    <input className="Admin_Account_Center_Changable_Input" type="text" value={this.state.displayName} onchange={this.handleChangeDisplayName} />

                    {/* user name port */}
                    <div className="Admin_Account_Center_Label">Username:</div>
                    <input className="Admin_Account_Center_Unchangable_Input" type="text" value={this.state.userName} ></input>

                    {/*  gmail port*/}
                    <div className="Admin_Account_Center_Label">Gmail:</div>
                    <input className="Admin_Account_Center_Unchangable_Input" type="text" value={this.state.gmail} ></input>

                    {/* password port */}
                    <div className="Admin_Account_Center_Label">Passwords:</div>
                    <input className="Admin_Account_Center_Unchangable_Input" type="text" value={this.generateHiddenPass()}></input>

                    {/* save change port */}
                    <div className="Admin_Account_Center_Save_Change_Info_Btn_Port">
                        <input className="Admin_Account_Center_Save_Change_Info_Btn" type="submit" value="Save changes"></input>
                    </div>
                </form>
        }
        else {
            if (this.state.isChangePass) {
                view =
                    <div className="Admin_Account_Center_Show_Info_Sub_Port">
                        <div>
                            <div className="Admin_Account_Center_Label">Current passwords:</div>
                            <input className="Admin_Account_Center_Changable_Input" type="text" value=""></input>
                        </div>
                        <div>
                            <div className="Admin_Account_Center_Label">New passwords:</div>
                            <input className="Admin_Account_Center_Changable_Input" type="text" value="" ></input>
                        </div>
                        <div>
                            <div className="Admin_Account_Center_Label">Confirm new passwords:</div>
                            <input className="Admin_Account_Center_Changable_Input" type="text" value=""></input>
                        </div>
                        <div className="Admin_Account_Center_Save_Change_Info_Btn_Port">
                            <button className="Admin_Account_Center_Save_Change_Info_Btn">Save password</button>
                        </div>
                    </div>;
            }
        }

        return (
            <div className="Admin_Account_Center">
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

        );
    }
}

export default Admin_AccountCenterComponent;
