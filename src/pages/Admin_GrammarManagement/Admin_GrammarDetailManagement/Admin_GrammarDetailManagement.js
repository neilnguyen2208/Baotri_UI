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
            GrammarForm_CreateDTO: {
                "id": "",
                "title": "",
                "usage": "",
                "useCase": "",
                "how": "",
                "examples": [
                ],
                "notes": [
                ]
            },
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

                        ],
                        "notes": [

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
                this.state.grammarDetails = data;
                this.setState(this.state);
            })
            .catch(console.log);
    }

    componentDidMount() {
        this.fetchGrammarDetail();
    }

    //POST new grammar form to serve
    addGrammarFormHandler = e => {
        e.preventDefault();
        //lấy token từ localStorage:
        let token = localStorage.token;

        var requestFormID = this.props.match.id;
        //POST yêu cầu server thêm form ngữ pháp"

        console.log(JSON.stringify(this.state.GrammarForm_CreateDTO));
        fetch('/api/v1/grammar/' + requestFormID + '/forms',
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(this.state.GrammarForm_CreateDTO)
            }
        )
            .then(response => {
                console.log(response)
                response.json();
            })
            .then(data => {
                if (data) { }
                else {
                    //check điều kiện đó mà
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        let adminGrammarFormDetails = this.state.grammarDetails.forms.map((formDetail) => {
            return (
                <Admin_GrammarFormDetail
                    key={formDetail.id}
                    form_ID={formDetail.id}
                    example_list={formDetail.examples}
                    note_list={formDetail.notes}
                    title={formDetail.title}
                    usage={formDetail.usage}
                    useCase={formDetail.useCase}
                    how={formDetail.how}
                ></Admin_GrammarFormDetail>);
        }
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
                                        + Add a grammar form
                                    </div>

                                }
                                    open={this.state.isAddGrammarFormPopupOpen}
                                    onOpen={this.openAddGrammarFormPopupHandler}
                                    closeOnDocumentClick={false}
                                >
                                    <React.Fragment>
                                        <div className="Customize_Popup">
                                            <div className="Popup_Title_Bar">
                                                <div className="Popup_Title">ADD GRAMMAR FORM:</div>
                                                <img className="Delete_Btn" src={delete_btn} onClick={this.closeAddGrammarFormPopupHandler} />
                                            </div>
                                        </div>
                                        <form className="Popup_Form_Max_Size" onSubmit={this.addGrammarFormHandler} >
                                            <div className="Simple_Label">Form title:</div>
                                            <input className="Simple_Changable_Text_Input" name='title' type="text" onChange={this.changeAddGrammarFormTitleHandler} />
                                            <div className="Simple_Label">Usage:</div>
                                            <input className="Simple_Changable_Text_Input" type="text" onChange={this.changeAddGrammarFormUsageHandler} />
                                            <div className="Simple_Label">Use case:</div>
                                            <input className="Simple_Changable_Text_Input" type="text" onChange={this.changeAddGrammarFormUsecaseHandler} />
                                            <div className="Simple_Label">How to use:</div>
                                            <input className="Simple_Changable_Text_Input" type="text" onChange={this.changeAddGrammarFormHowHandler} />

                                            <div className="Height_10px" />
                                            <input className="Blue_Button" type="submit" value="Save"></input>
                                        </form>
                                    </React.Fragment>
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

    openAddGrammarFormPopupHandler = () => {
        this.state.isAddGrammarFormPopupOpen = true;
        this.setState(this.state);
    }

    closeAddGrammarFormPopupHandler = () => {
        this.state.isAddGrammarFormPopupOpen = false;
        this.setState(this.state);
    }

    //Handler change popup input
    changeAddGrammarFormTitleHandler = e => {
        this.state.GrammarForm_CreateDTO.title = e.target.value;
        console.log(this.state.GrammarForm_CreateDTO.title);
    }
    changeAddGrammarFormUsageHandler = e => {
        this.state.GrammarForm_CreateDTO.usage = e.target.value;
        console.log(this.state.GrammarForm_CreateDTO.usage);
    }
    changeAddGrammarFormUsecaseHandler = e => {
        this.state.GrammarForm_CreateDTO.useCase = e.target.value;
        console.log(this.state.GrammarForm_CreateDTO.useCase);
    }
    changeAddGrammarFormHowHandler = e => {
        this.state.GrammarForm_CreateDTO.how = e.target.value;
        console.log(this.state.GrammarForm_CreateDTO.how);
    }
}

export default Admin_GrammarDetailManagement;