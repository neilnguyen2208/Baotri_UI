import React, { Component } from 'react'
import './Admin_GrammarDetailManagement.css'
import Header from "../../../components/Header/Header.js";
import Footer from "../../../components/Footer/Footer.js";
import PageTitle from "../../../components/PageTitle/PageTitle.js"
import Admin_Menu from '../../../components/AdminMenu/AdminMenu';
import Admin_GrammarDescription from '../Admin_GrammarManagementComponents/Admin_GrammarDescription'
class Admin_GrammarDetailManagement extends Component {
    constructor(props) {
        super();
        this.state = {
            "description": "The superlative is used to say what thing, person, or idea has the most of a particular quality within a group or of its kind. Superlative adjectives normally come before any other adjectives."
        }
    }

    render() {

        return (
            <div className="Admin_Grammar_Detail_Management">

                {/* Header Area */}
                <div className="Admin_Grammar_Detail_Management_Header">
                    <Header></Header>
                </div>

                <div className="Admin_Grammar_Detail_Management_Dock_Notification">
                    One of the most effective ways to improve your English Explorer a bit to find out what we do.
                </div>

                {/* Body Area */}
                <div className="Admin_Grammar_Detail_Management_Main_Port">

                    {/* Page Title */}
                    <PageTitle prevTitle="Manage" mainTitle="Your page"></PageTitle>
                    <div className="Admin_Grammar_Detail_Management_Horizontal_Menu_Bar_Main_Management_Port">
                        <Admin_Menu />

                        {/* Menu_Main_Show_Port */}
                        <div className="Admin_Grammar_Detail_Management_Port">
                            <Admin_GrammarDescription content={this.state.description} />
                        </div>
                    </div>
                </div>
                <div className="Admin_Grammar_Detail_Management_Footer">
                    <Footer ></Footer>
                </div>
            </div>

        );
    }

}

export default Admin_GrammarDetailManagement;