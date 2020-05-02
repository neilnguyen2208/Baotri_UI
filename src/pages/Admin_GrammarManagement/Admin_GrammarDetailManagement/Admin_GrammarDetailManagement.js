import React, { Component } from 'react'
import './Admin_GrammarDetailManagement.css'
import Header from "../../../components/Header/Header.js";
import Footer from "../../../components/Footer/Footer.js";
import PageTitle from "../../../components/PageTitle/PageTitle.js"
import Admin_Menu from '../../../components/AdminMenu/AdminMenu';
import Admin_GrammarDescription from '../Admin_GrammarManagementComponents/Admin_GrammarDescription'
import Admin_GrammarDetailSubTitle from "../Admin_GrammarManagementComponents/Admin_GrammarDetailSubTitle"
import Admin_GrammarDetailTitle from "../Admin_GrammarManagementComponents/Admin_GrammarDetailTitle"
import Admin_GrammarFormDetail from "../Admin_GrammarManagementComponents/Admin_GrammarFormDetail"
import Admin_AddGrammarFormDetail from "../Admin_GrammarManagementComponents/Admin_AddGrammarFormDetail"
import Admin_AddGrammarCategoryItem from '../Admin_GrammarManagementComponents/Admin_AddGrammarCategoryItem';
class Admin_GrammarDetailManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "id": 19,
            "title": "Comparative",
            "description": "When we compare things, people or even ideas we look at what makes them different from each other",
            "categoryID": 1,
            "forms": [
                {
                    "examples": [
                        {
                            "id": 15,
                            "content": "The man on the left is taller than the man on the right \n The man on the right is shorter than the man on the left",
                            "imageURL": "https://i.imgur.com/NqXb5vv.gif"
                        },
                        {
                            "id": 85,
                            "content": "The man on the left is taller than the man on the right \n The man on the right is shorter than the man on the left",
                            "imageURL": "https://i.imgur.com/NqXb5vv.gif"
                        }
                    ],
                    "notes": [
                        {
                            "id": 47,
                            "content": "Have you noticed that when we are comparing two things like this we put than between the adjective and the thing being compared"
                        },
                        {
                            "id": 67,
                            "content": "Have you noticed that when we are comparing two things like this we put than between the adjective and the thing being compared"
                        }
                    ],
                    "forms": [
                        {
                            "id": 98,
                            "title": "FORM OF COMPARATIVE:",
                            "usecase": "Words of one syllable",
                            "usage": "Add -r to the end of the word",
                            "how": "wide - wider"
                        },
                        {
                            "id": 76,
                            "title": "FORM OF COMPARATIVE:",
                            "usecase": "Words of one syllable",
                            "usage": "Add -a to the end of the word",
                            "how": "wide - wider"
                        }
                    ],
                    "id": 79,
                    "title": "Forming the comparative",
                    "how": "wide-wider"
                },
                {
                    "examples": [
                        {
                            "id": 79,
                            "content": "The man on the left is taller than the man on the right \n The man on the right is shorter than the man on the left",
                            "imageURL": "https://i.imgur.com/NqXb5vv.gif"
                        },
                        {
                            "id": 55,
                            "content": "The man on the left is taller than the man on the right \n The man on the right is shorter than the man on the left",
                            "imageURL": "https://i.imgur.com/NqXb5vv.gif"
                        }
                    ],
                    "notes": [
                        {
                            "id": 76,
                            "content": "Have you noticed that when we are comparing two things like this we put than between the adjective and the thing being compared"
                        },
                        {
                            "id": 98,
                            "content": "Have you noticed that when we are comparing two things like this we put than between the adjective and the thing being compared"
                        }
                    ],
                    "forms": [
                        {
                            "id": 98,
                            "title": "FORM OF COMPARATIVE:",
                            "usecase": "Words of one syllable",
                            "usage": "Add -r to the end of the word",
                            "how": "wide - wider"
                        },
                        {
                            "id": 76,
                            "title": "FORM OF COMPARATIVE:",
                            "usecase": "Words of one syllable",
                            "usage": "Add -a to the end of the word",
                            "how": "wide - wider"
                        }
                    ],
                    "id": 58,
                    "title": "Forming the comparative"
                }
            ]
        }
    }
    render() {
        let adminGrammarFormDetailList = this.state.forms.map((form) =>
            <Admin_GrammarFormDetail
                example_list={form.examples}
                note_list={form.notes}
                form_list={form.forms}
            ></Admin_GrammarFormDetail>
        );
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
                            <Admin_GrammarDetailTitle name={this.state.title}></Admin_GrammarDetailTitle>
                            <Admin_GrammarDescription content={this.state.description} />
                            <Admin_GrammarDetailSubTitle name={this.state.title}></Admin_GrammarDetailSubTitle>

                            <div className="Admin_Grammar_Form_Detail_List_Management_Port">
                                {adminGrammarFormDetailList}
                            </div>
                            <Admin_AddGrammarFormDetail></Admin_AddGrammarFormDetail>
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