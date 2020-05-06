import React, { Component } from 'react'
import './Admin_UserManagement.css'
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import PageTitle from "../../components/PageTitle/PageTitle.js"
import Admin_Menu from '../../components/AdminMenu/AdminMenu';
import Pagination from "../../components/Pagination/Pagination"
import UserItem from './Admin_UserManagementComponents/UserItem/UserItem';

class Admin_UserManagement extends Component {
    constructor(props) {
        super();
        this.state = {
            "users": [
                {
                    "userName": "committedmember",
                    "roles": "user",
                    "IsAccountEnabled": true,
                    "email": "committedmember@gmail.com",
                    "displayName": "Committed Member",
                    "passwordLength": 60,
                    "reminders": 95
                },
                {
                    "userName": "committedmember",
                    "roles": "user",
                    "IsAccountEnabled": true,
                    "email": "committedmember@gmail.com",
                    "displayName": "Committed Member",
                    "passwordLength": 60,
                    "reminders": 95
                },
                {
                    "userName": "committedmember",
                    "roles": "user",
                    "IsAccountEnabled": true,
                    "email": "committedmember@gmail.com",
                    "displayName": "Committed Member",
                    "passwordLength": 60,
                    "reminders": 95,

                }
            ]
        }


    }

    render() {
        let userItemList;
        userItemList = this.state.users.map((item) => {
            return (
                <UserItem
                    avatar_url="https://i.imgur.com/q54xYo3.png"
                    display_name={item.displayName}
                    user_name={item.userName}
                    gmail={item.email}
                ></UserItem>
            );
        })

        return (
            <div className="Admin_User_Management">

                {/* Header Area */}
                <div className="Admin_User_Management_Header">
                    <Header></Header>
                </div>

                <div className="Admin_User_Management_Dock_Notification">
                    One of the most effective ways to improve your English Explorer a bit to find out what we do.
            </div>

                {/* Body Area */}
                <div className="Admin_User_Management_Main_Port">

                    {/* Page Title */}
                    <PageTitle prevTitle="Manage" mainTitle="Your page"></PageTitle>
                    <div className="Admin_User_Management_Horizontal_Menu_Bar_Main_Management_Port">
                        <Admin_Menu />

                        {/* Menu_Main_Show_Port */}
                        <div className="Admin_User_Management_Port">
                            {userItemList}
                            <Pagination></Pagination>
                        </div>

                    </div>
                </div>
                <div className="Admin_User_Management_Footer">
                    <Footer ></Footer>
                </div>
            </div>

        );
    }
}

export default Admin_UserManagement;
