/* eslint-disable react/jsx-pascal-case */
import React, { Component } from 'react'
import './Admin_UserManagement.css'
import Header from "../../components/Header/Header.js";
import Footer from "../../components/Footer/Footer.js";
import PageTitle from "../../components/PageTitle/PageTitle.js"
import Admin_Menu from '../../components/AdminMenu/AdminMenu';
// import Pagination from "../../components/Pagination/Pagination"
import '../../components/CustomCombobox.css'

import { ClickAwayListener } from '@material-ui/core';
import UserItem from './Admin_UserManagementComponents/UserItem/UserItem';
import dropdown_btn from '../../resources/dropdown_icon.png'
import white_dropdown_btn from '../../resources/white_dropdown_icon.png'


class Admin_UserManagement extends Component {
    constructor(props) {
        super();

        this.token = "";

        //for filtet users
        this.curFilterID = 0;
        // this.allUsersCount = 0;
        // this.allUsersList = [];

        this.state = {
            "allUsersList": [
                {
                    "userID": 2,
                    "userName": "committedmember",
                    "roles": ["ROLE_USER"],
                    "isAccountEnabled": true,
                    "email": "committedmember@gmail.com",
                    "displayName": "Lưu Biêu Nghị",
                    "passwordLength": 60,
                    "reminder": 0
                }
            ],
            "currentInteractList": [
                {
                    "userID": 2,
                    "userName": "committedmember",
                    "roles": ["ROLE_USER"],
                    "isAccountEnabled": true,
                    "email": "committedmember@gmail.com",
                    "displayName": "Lưu Biêu Nghị",
                    "passwordLength": 60,
                    "reminder": 0
                }
            ],
            filterStatus:
                [
                    {
                        filterID: 0,
                        value: "All",
                    },
                    {
                        filterID: 1,
                        value: "Active"
                    },
                    {
                        filterID: 2,
                        value: "Banned"
                    }
                ]
        }
    }

    componentDidMount() {
        this.fetchAllUserInfo();
    }

    fetchAllUserInfo = () => {
        this.token = sessionStorage.getItem('token');
        fetch('/api/v1/users/', {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${this.token}`
            }
        })
            .then(response =>
                response.json()
            )
            .then(response => {
                // this.allUsersCount = response.length;
                // this.allUsersList = response;



                //not show admin account:
                this.state.currentInteractList = [];

                for (let i = 0; i < response.length; i++) {
                    console.log(response[i]['roles'].length === 2);
                    if (response[i]['roles'].length === 2)
                        continue;
                    this.state.currentInteractList.push(response[i]);
                }
                this.setState({
                    allUsersList: response,
                    // currentInteractList: response
                });
            })
            .catch(error => {
                console.log(error);
            })
    }

    deleteUser = (id) => {

    }

    render() {
        let userItemList;
        userItemList = this.state.currentInteractList.map((item) => {
            return (
                <UserItem
                key = {item.userID}
                    id={item.userID}
                    avatar_url="https://i.imgur.com/q54xYo3.png"
                    display_name={item.displayName}
                    user_name={item.userName}
                    gmail={item.email}
                    isAccountEnabled={item.isAccountEnabled}
                ></UserItem>
            );
        });

        let filter_Combobox = this.state.filterStatus.map(filter =>
            this.curFilterID === filter.filterID ?
                <div className="Activated_Dropdown_Combobox_Sub_Item" id={"user-role-dropdown-combobox-sub-item-" + filter.filterID} value={filter.value} key={filter.filterID}>{filter.value}</div> :
                <div className="Dropdown_Combobox_Sub_Item" id={"user-role-dropdown-combobox-sub-item-" + filter.filterID} value={filter.value} key={filter.filterID}
                    onClick={() => this.handleDropDownMenuItemClick(filter.filterID)}> {filter.value}
                </div>

        )
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

                        <div style={{
                            width: "100%",
                            boxSizing: "border-box",
                            borderLeft: "1px solid #c4c4c4",
                            borderRight: "1px solid #c4c4c4",
                            padding: "20px",
                        }} >
                            <div style={{
                                width: "60%",
                                // height: "50px",
                                display: "flex",
                                margin: "auto",
                                justifyContent: "flex-end",

                            }}>
                                <div style={{ display: "flex" }}>
                                    <div className="Simple_Label" style={{ height: "25px" }}>
                                        Filter:
                                    </div>
                                    <div style={{ width: "10px" }} ></div>
                                    <ClickAwayListener onClickAway={() => { this.closeAllChangeRoleDropdownCombobox() }}>
                                        <div style={{ position: "relative", display: "flex", width: "100%", zIndex: 1 }}>
                                            <div style={{ position: "relative", display: "flex", justifyContent: "flex-end", width: "100%" }}>
                                                <div style={{ width: "140px" }}>
                                                    <div className="Parent_Dropdown_Combobox" id={"user-role-parent-dropdown-combobox-"}
                                                        onClick={(e) => this.handleDropDownMenuClick(e, "user-role-parent-dropdown-combobox-", "user-role-parent-dropdown-combobox-text-", "user-role-dropdown-btn-element-", "user-role-dropdown-combobox-container-")}>
                                                        <div style={{ display: "flex" }}>
                                                            <div className="Vertical_Menu_Item_Text" id={"user-role-parent-dropdown-combobox-text-"}>
                                                                {this.state.filterStatus[this.curFilterID].value}
                                                            </div>
                                                        </div>
                                                        <img alt="v" className="Dropdown_Btn_Element" src={dropdown_btn} id={"user-role-dropdown-btn-element-"} />
                                                    </div>

                                                    {this.isAnyChangeRoleDropdownComboboxOpen ? (
                                                        <div className="Dropdown_Combobox_Container" style={{ position: "absolute" }} id={"user-role-dropdown-combobox-container-"}>
                                                            {filter_Combobox}
                                                            <div style={{ marginBottom: "10px" }} />
                                                        </div>
                                                    ) : <div id={"user-role-dropdown-combobox-container-"}></div>}

                                                </div>
                                            </div>
                                        </div>
                                    </ClickAwayListener>
                                </div>
                            </div>
                        </div>
                        {/* Menu_Main_Show_Port */}
                        <div className="Admin_User_Management_Port">
                            {userItemList}

                            {/* <Pagination></Pagination> */}
                        </div>

                    </div>
                </div>
                <div className="Admin_User_Management_Footer">
                    <Footer ></Footer>
                </div>
            </div >

        );
    }


    handleDropDownMenuClick = (e, parent_id, show_text_id, dropdown_element_id, container_id) => {
        e.preventDefault();

        let parent_menu_item = document.getElementById(parent_id);
        let dropdown_element = document.getElementById(dropdown_element_id);
        let show_text = document.getElementById(show_text_id);
        let dropdown_container = document.getElementById(container_id);

        if (dropdown_container.style.display === "block") {
            dropdown_container.style.display = "none";
            parent_menu_item.style.background = "white";
            parent_menu_item.style.paddingLeft = "0px";
            show_text.style.color = "#363636";
            dropdown_element.src = dropdown_btn;
        }
        else {
            parent_menu_item.style.background = "#5279DB"
            dropdown_container.style.display = "block";
            parent_menu_item.style.paddingLeft = "10px";
            show_text.style.color = "white";
            dropdown_element.src = white_dropdown_btn;
        }

        this.isAnyChangeRoleDropdownComboboxOpen = true;
        this.setState({});
    }

    handleDropDownMenuItemClick = (filterID) => {
        //change current UI
        let item_id = "user-role-dropdown-combobox-sub-item-" + filterID;
        let sub_dropdown_item = document.getElementById(item_id);

        for (let i = 0; i < this.state.filterStatus.length; i++) {
            let sub_dropdown_item_index_id = "user-role-dropdown-combobox-sub-item-" + i;
            let sub_dropdown_item_index = document.getElementById(sub_dropdown_item_index_id);
            sub_dropdown_item_index.className = "Dropdown_Combobox_Sub_Item";
        }

        sub_dropdown_item.className = "Activated_Dropdown_Combobox_Sub_Item";
        this.curFilterID = filterID;

        //close combobox
        let parent_id = "user-role-parent-dropdown-combobox-";
        let show_text_id = "user-role-parent-dropdown-combobox-text-";
        let dropdown_element_id = "user-role-dropdown-btn-element-";
        let container_id = "user-role-dropdown-combobox-container-";

        let parent_menu_item = document.getElementById(parent_id);
        let dropdown_element = document.getElementById(dropdown_element_id);
        let show_text = document.getElementById(show_text_id);
        let dropdown_container = document.getElementById(container_id);

        if (dropdown_container.style.display === "block") {
            dropdown_container.style.display = "none";
            parent_menu_item.style.background = "white";
            parent_menu_item.style.paddingLeft = "0px";
            show_text.style.color = "#363636";
            dropdown_element.src = dropdown_btn;
        }
        this.handlerChangeUserStatusFilter(filterID);
    }

    handlerChangeUserStatusFilter = (filterID) => {

        this.state.currentInteractList = [];
        if (filterID === 1) {
            console.log("Active");
            console.log(this.state.allUsersList.length);
            for (let i = 0; i < this.state.allUsersList.length; i++) {
                console.log(this.state.allUsersList[i]);
                if (this.state.allUsersList[i]['isAccountEnabled'] === true && this.state.allUsersList[i]['roles'].length === 1)
                    this.state.currentInteractList.push(this.state.allUsersList[i]);
            }
            this.setState({});
            return;
        }

        if (filterID === 2) {
            console.log("Banned");
            console.log(this.state.allUsersList.length);
            for (let i = 0; i < this.state.allUsersList.length; i++) {
                console.log(this.state.allUsersList[i]);
                if (this.state.allUsersList[i]['isAccountEnabled'] === false && this.state.allUsersList[i]['roles'].length === 1)
                    this.state.currentInteractList.push(this.state.allUsersList[i]);
            }
            this.setState({});
            return;
        }

        for (let i = 0; i < this.state.allUsersList.length; i++) {
            console.log(this.state.allUsersList[i]);
            if (this.state.allUsersList[i]['roles'].length === 1)
                this.state.currentInteractList.push(this.state.allUsersList[i]);
        }
        this.setState({});

    }

    closeAllChangeRoleDropdownCombobox = () => {
        let parent_id = "user-role-parent-dropdown-combobox-";
        let show_text_id = "user-role-parent-dropdown-combobox-text-";
        let dropdown_element_id = "user-role-dropdown-btn-element-";
        let container_id = "user-role-dropdown-combobox-container-";

        let parent_menu_item = document.getElementById(parent_id);
        let dropdown_element = document.getElementById(dropdown_element_id);
        let show_text = document.getElementById(show_text_id);
        let dropdown_container = document.getElementById(container_id);

        if (dropdown_container.style.display === "block") {
            dropdown_container.style.display = "none";
            parent_menu_item.style.background = "white";
            parent_menu_item.style.paddingLeft = "0px";
            show_text.style.color = "#363636";
            dropdown_element.src = dropdown_btn;
        }

        this.setState({})
    }

}

export default Admin_UserManagement;

