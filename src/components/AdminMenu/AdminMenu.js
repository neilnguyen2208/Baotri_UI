import React, { Component } from 'react';
import './AdminMenu.css';

class AdminMenu extends Component {
    constructor(props) {
        super();

        this.state = {
            info: {
                "avatarUrl": "https://i.imgur.com/q54xYo3.png",
                "displayName": "Nguyen Van Dong",
                "userName": "tesla",
                "gmail": "dongnv.since1999@gmail.com",
                "password_length": 10
            }
        }
    }
    render() {
        return (
            <div className="Admin_Menu">
                <div className="Admin_Info_Port">
                    <div className="Admin_Avatar_Port">
                        <img className="Admin_Avatar" src={this.state.info.avatarUrl} />
                    </div>
                    <div className="Admin_User_Name_Gmail_Port">
                        <div className="Admin_User_Name">{this.state.info.displayName}</div>
                        <div className="Admin_Gmail">{this.state.info.gmail}</div>
                        <button className="Admin_Logout_Btn">Logout</button>
                    </div>
                </div>
                <div className="Admin_Horizontal_Menu_Bar">
                    <div >
                        <a href="./" className="Admin_Horizontal_Menu_Item">Account Center</a>
                    </div>
                    <div >
                        <a href='/admin/grammar' className="Admin_Horizontal_Menu_Item">Grammar Manager</a>
                    </div>
                    <div >
                        <a href='/admin/vocabulary' className="Admin_Horizontal_Menu_Item">Vocabulary Manager</a>
                    </div>
                    <div >
                        <a className="Admin_Horizontal_Menu_Item">Listening Manager</a>
                    </div>
                    <div className="Admin_Horizontal_Menu_Item">
                        <a className="Admin_Horizontal_Menu_Item">User Manager</a>
                    </div>
                    <div className="Admin_Horizontal_Menu_Item">
                        Chat Manager
                </div>
                </div>
            </div>
        )
    }
}

export default AdminMenu;