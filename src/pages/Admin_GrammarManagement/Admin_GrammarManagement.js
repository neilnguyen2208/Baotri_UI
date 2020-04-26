import React, { Component } from 'react'
import Admin_GrammarCategoryItem from '../../components/Admin_GrammarCategoryItem/Admin_GrammarCategoryItem.js';
import Header from "../../components/Header/Header.js";
import './Admin_GrammarManagement.css'
import Footer from "../../components/Footer/Footer.js";
import PageTitle from "../../components/PageTitle/PageTitle.js"
import btn_element from "../../resources/btn_element.png"
import Admin_AddGrammarCategoryItem from '../../components/Admin_GrammarCategoryItem/Admin_AddGrammarCategoryItem.js';

class Admin_GrammarManagement extends Component {
    constructor(props) {
        super();

        this.state = {
            "avatarUrl": "https://i.imgur.com/q54xYo3.png",
            "displayName": "Nguyen Van Dong",
            "userName": "tesla",
            "gmail": "dongnv.since1999@gmail.com",
            "password_length": 10,
            isUpdateInfo: true,
            isChangePass: false,
            isChangeRemind: false,
            isAccountManager: true,
            isGrammarManager: false,
            items: [{
                name: "ADJECTIVE",
            },
            {
                name: "VERB",
            },
            {
                name: "VERB",
            }]
        }
    }

    render() {
        let items;

        items = this.state.items.map((item) => {
            return (
                <Admin_GrammarCategoryItem item={item}></Admin_GrammarCategoryItem>
            );
        })

        return (
            <div className="Admin_GrammarManagement">

                {/* Header Area */}
                <div className="Admin_GrammarManagement_Header">
                    <Header></Header>
                </div>

                <div className="Dock_Notification">
                    One of the most effective ways to improve your English Explorer a bit to find out what we do.
                </div>

                {/* Body Area */}
                <div className="Admin_GrammarManagement_Main_Port">

                    {/* Page Title */}
                    <PageTitle prevTitle="Manage" mainTitle="Your page"></PageTitle>

                    {/* User Info and Menu*/}
                    <div className="User_Info_Port">
                        <div className="Avatar_Port">
                            <img className="Avatar" src={this.state.avatarUrl} />
                        </div>
                        <div className="User_Name_Gmail_Port">
                            <div className="Display_Name">
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

                    {/* Menu Main Port to show what will be manage*/}
                    <div className="Menu_Main_Port">

                        {/* Menu bar */}
                        <div className="Menu_Bar">
                            <div className="First_Menu_Item">
                                Account Center
                            </div>
                            <div className="Menu_Item">
                                Grammar Manager
                            </div>
                            <div className="Menu_Item">
                                Vocabulary Manager
                            </div>
                            <div className="Menu_Item">
                                Listening Manager
                            </div>
                            <div className="Menu_Item">
                                User Manager
                            </div>
                            <div className="Menu_Item">
                                Chat Manager
                            </div>
                        </div>

                        {/* Menu_Main_Show_Port */}

                        <div className="Menu_Main_Show_Port">
                            <div className="Admin_Grammar_Category_Port">
                                <Admin_AddGrammarCategoryItem></Admin_AddGrammarCategoryItem>
                                {items}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Admin_GrammarManagement_Footer">
                    <Footer ></Footer>
                </div>
            </div>
        );
    }

}

export default Admin_GrammarManagement;