import React, { Component } from 'react'
import './Admin_GrammarManagement.css'
import Header from "../../../components/Header/Header.js";
import Footer from "../../../components/Footer/Footer.js";
import PageTitle from "../../../components/PageTitle/PageTitle.js"
import Admin_Menu from '../../../components/AdminMenu/AdminMenu';
import Admin_AddGrammarCategoryItem from '../Admin_GrammarManagementComponents/Admin_AddGrammarCategoryItem';
import Admin_GrammarCategoryItem from '../Admin_GrammarManagementComponents/Admin_GrammarCategoryItem'

class Admin_GrammarManagement extends Component {
    constructor(props) {
        super();
        this.state = {
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
            <div className="Admin_Grammar_Management">

                {/* Header Area */}
                <div className="Admin_Grammar_Management_Header">
                    <Header></Header>
                </div>

                <div className="Admin_Grammar_Management_Dock_Notification">
                    One of the most effective ways to improve your English Explorer a bit to find out what we do.
                </div>

                {/* Body Area */}
                <div className="Admin_Grammar_Management_Main_Port">

                    {/* Page Title */}
                    <PageTitle prevTitle="Manage" mainTitle="Your page"></PageTitle>
                    <div className="Admin_Grammar_Management_Horizontal_Menu_Bar_Main_Management_Port">
                        <Admin_Menu />

                        {/* Menu_Main_Show_Port */}
                        <div className="Admin_Grammar_Management_Port">
                            <Admin_AddGrammarCategoryItem></Admin_AddGrammarCategoryItem>
                            {items}
                        </div>
                    </div>
                </div>
                <div className="Admin_Grammar_Management_Footer">
                    <Footer ></Footer>
                </div>
            </div>

        );
    }

}

export default Admin_GrammarManagement;