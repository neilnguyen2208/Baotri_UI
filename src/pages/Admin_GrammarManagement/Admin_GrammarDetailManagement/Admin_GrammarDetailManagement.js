import React, { Component } from 'react'
import delete_btn from '../../../resources/delete_btn.png'
import './Admin_GrammarDetailManagement.css'
import Header from "../../../components/Header/Header.js";
import Footer from "../../../components/Footer/Footer.js";
import PageTitle from "../../../components/PageTitle/PageTitle.js"
import Admin_Menu from '../../../components/AdminMenu/AdminMenu';
import Admin_GrammarDescription from '../Admin_GrammarManagementComponents/Admin_GrammarDescription'
import Admin_GrammarDetailSubTitle from "../Admin_GrammarManagementComponents/Admin_GrammarDetailSubTitle"
import Admin_GrammarDetailTitle from "../Admin_GrammarManagementComponents/Admin_GrammarDetailTitle"
import Admin_GrammarFormDetail from "../Admin_GrammarManagementComponents/Admin_GrammarFormDetail"
import Popup from 'reactjs-popup'
class Admin_GrammarDetailManagement extends Component {
    constructor(props) {
        super(props);
        this.state = {
            grammarDetails: {
                "id": "",
                "title": "",
                "description": "",
                "categoryID": "",
                "forms": [
                    {
                        "id": "",
                        "title": "",
                        "usage": "",
                        "useCase": "",
                        "how": "",
                        "examples": [
                            {
                                "id": "",
                                "content": "",
                                "imageURL": ""
                            }
                        ],
                        "notes": [
                            {
                                "id": "",
                                "content": ""
                            }
                        ]
                    }
                ]
            },
            "isAddGrammarFormPopupOpen": false,
        }
    }

    fetchGrammarDetail() {
        let requestDetailId = this.props.match.params.id;
        fetch('/api/v1/grammar/' + requestDetailId)
            .then(response => response.json())
            .then((data) => {
                this.setState({ grammarDetails: data })
            })
            .catch(console.log);
    }

    componentDidMount() {
        this.fetchGrammarDetail();
    }

    // handle open/close popups:
    openUpdateGrammarCategoryPopupHandler = () => {
        this.state.isUpdateGrammarCategoryPopupOpen = true;
        this.setState(this.state);
    }

    closeUpdateGrammarCategoryPopupHandler = () => {
        this.state.isUpdateGrammarCategoryPopupOpen = false;
        this.setState(this.state);
    }

    render() {
        let adminGrammarFormDetails = this.state.grammarDetails.forms.map((formDetail) =>
            <Admin_GrammarFormDetail
                example_list={formDetail.examples}
                note_list={formDetail.notes}
                title={formDetail.title}
                usage={formDetail.usage}
                useCase={formDetail.useCase}
                how={formDetail.how}
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
                            <Admin_GrammarDetailTitle name={this.state.grammarDetails.title}></Admin_GrammarDetailTitle>
                            <Admin_GrammarDescription content={this.state.grammarDetails.description} />
                            <Admin_GrammarDetailSubTitle name={this.state.grammarDetails.title}></Admin_GrammarDetailSubTitle>

                            <div className="Admin_Grammar_Form_Detail_List_Management_Port">
                                {adminGrammarFormDetails}
                            </div>


                            <div className="Admin_Add_Grammar_Form_Port">
                                {/* Popup to fill info of new Grammar category: title, description */}
                                <Popup modal trigger={
                                    <div className="Admin_Add_Grammar_Form_Button">
                                        + Add Grammar A Form
                                    </div>
                                   
                                }
                                    open={this.state.isAddGrammarFormPopupOpen}
                                    onOpen={this.openAddGrammarFormPopupHandler}
                                    closeOnDocumentClick = {false}
                                >
                                    <div className="Customize_Popup">
                                        <div className="Popup_Title_Bar">
                                            <div className="Popup_Title">ADD GRAMMAR FORM:</div>
                                            <img className="Delete_Btn" src={delete_btn} onClick={this.closeAddGrammarFormPopupHandler} />
                                        </div>
                                    </div>
                                    <form className="Add_Grammar_Category_Form" onSubmit={this.addGrammarFormHandler} >
                                        <div className="Simple_Label">Form title:</div>
                                        <input className="Simple_Changable_Text_Input" name='title' type="text" onChange={this.changeGrammarFormTitleHandler} />
                                        <div className="Simple_Label">Usage:</div>
                                        <input className="Simple_Changable_Text_Input" type="text" name='description' onChange={this.changeGrammarFormDescriptionHandler} />
                                        <div className="Simple_Label">Use case:</div>
                                        <input className="Simple_Changable_Text_Input" type="text" name='description' onChange={this.changeGrammarFormDescriptionHandler} />
                                        <div className="Simple_Label">How to use:</div>
                                        <input className="Simple_Changable_Text_Input" type="text" name='description' onChange={this.changeGrammarFormDescriptionHandler} />

                                        <div className="Height_10px" />
                                        <div className="Justify_Content_Space_Between">
                                            <input className="White_Button" type="button" value="+ Example"></input>
                                            <input className="White_Button" type="button" value="+ Note"></input>
                                        </div>
                                        <div className="Height_10px" />
                                        <input className="Blue_Button" type="submit" value="Save"></input>
                                    </form>
                                </Popup>
                            </div>


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