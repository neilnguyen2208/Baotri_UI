import React, { Component } from 'react';
import './AdminMenu.css';
import jwt_decode from 'jwt-decode'
class AdminMenu extends Component {
    constructor(props) {
        super();

        this.state = {
            adminInfo_PatchDTO:
            {
                "displayName": "",
                "userName": "",
                "email": "",
                "currentPassword": null,
                "newPassword": null
            },
            avatarUrl: "https://i.imgur.com/q54xYo3.png"
        }
    }

    componentDidMount() {
        this.fetchInfo();
    }

    fetchInfo() {
        let token = sessionStorage.getItem('token');
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
                // console.log(this.state.adminInfo_PatchDTO);
                this.setState({ adminInfo_PatchDTO: response });
            })
            .catch(error => {
                console.log(error);
            })
    }

    handleLogOut = () => {
        sessionStorage.removeItem('token');
        console.log('logout');
        this.setState({});
        window.location.href = '/';
    }

    render() {
        return (
            <div className="Admin_Menu">
                <div className="Admin_Info_Port">
                    <div className="Admin_Avatar_Port">
                        <img alt="avatar" className="Admin_Avatar" src={this.state.avatarUrl} />
                    </div>
                    <div className="Admin_User_Name_Gmail_Port">
                        <div className="Admin_User_Name">{this.state.adminInfo_PatchDTO.displayName}</div>
                        <div className="Admin_Gmail">{this.state.adminInfo_PatchDTO.email}</div>
                        <button className="Blue_Button" onClick={this.handleLogOut} >Logout</button>
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
                        <a href='/admin/vocabCategories' className="Admin_Horizontal_Menu_Item">Vocabulary Manager</a>
                    </div>
                    <div >
                        <a className="Admin_Horizontal_Menu_Item">Listening Manager</a>
                    </div>
                    <div className="Admin_Horizontal_Menu_Item" >
                        <a href='/admin/user_management' className="Admin_Horizontal_Menu_Item">User Manager</a>
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