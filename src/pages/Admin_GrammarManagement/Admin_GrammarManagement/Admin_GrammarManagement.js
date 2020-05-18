import React, { Component } from 'react'
import './Admin_GrammarManagement.css'
import Header from "../../../components/Header/Header.js";
import Footer from "../../../components/Footer/Footer.js";
import PageTitle from "../../../components/PageTitle/PageTitle.js"
import Admin_Menu from '../../../components/AdminMenu/AdminMenu';
// import Admin_AddGrammarCategoryItem from '../Admin_GrammarManagementComponents/Admin_AddGrammarCategoryItem';
import Admin_GrammarCategoryItem from '../Admin_GrammarManagementComponents/Admin_GrammarCategoryItem'
import CustomizePopup from "../../../components/CustomizePopup/CustomizePopup"
import Popup from 'reactjs-popup'
import delete_btn from '../../../resources/delete_btn.png'
//import axios from 'axios'

class Admin_GrammarManagement extends Component {
    constructor(props) {
        super();

        this.state = {
            "grammarCategories":
                [
                    // {
                    //     "id": "",
                    //     "title": "",
                    //     "description": "",
                    //     "docGrammarContentSummary":
                    //         [

                    //         ]
                    // }
                ],
            GrammarCategory_CreateDTO: {
                "id": "",
                "title": "",
                "description": "",
                "docGrammarContentSummary":
                    [
                    ]
            },
            "isPopupOpen": false,
        }
    }

    //GET data from Server: Get all grammar category
    componentDidMount() {
        //Lấy thông tin các danh mục ngữ pháp để hiển thị
        this.fetchGrammarCategoryList();
    }

    //hàm lấy danh sách grammar.
    fetchGrammarCategoryList() {
        fetch('/api/v1/grammarCategories',{
            method: "GET"
        })
            .then(response => response.json())
            .then(response =>
                this.setState({
                    grammarCategories: response
                })
            );
    }

    // POST data to server: create an grammar category
    changeTitleHandler = e => {
        this.state.GrammarCategory_CreateDTO.title = e.target.value;
        console.log(this.state.GrammarCategory_CreateDTO);

    }

    changeDescriptionHandler = e => {
        this.state.GrammarCategory_CreateDTO.description = e.target.value;
        console.log(this.state.GrammarCategory_CreateDTO);
    }

    submitHandler = e => {
        e.preventDefault();

        //lấy token từ localStorage:
        let token = localStorage.token;

        //POST yêu cầu server thêm danh mục ngữ pháp.
        console.log(JSON.stringify(this.state.GrammarCategory_CreateDTO));
        fetch('/api/v1/grammarCategories',
            {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(this.state.GrammarCategory_CreateDTO)
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

    //handle close and open close add Grammar Category Popup:
    openHandler = () => {
        this.state.isPopupOpen = true;
        this.setState(this.state);
    }

    closeHandler = () => {
        this.state.isPopupOpen = false;
        this.setState(this.state);
    }

    render() {

        //bind data to post
        let title = this.state.GrammarCategory_CreateDTO.title;
        let description = this.state.GrammarCategory_CreateDTO.description;

        //list of grammar category item
        let items;
        items = this.state.grammarCategories.map((item) => {
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

                            {/* UI for add Grammar */}
                            <div className="Admin_Add_Grammar_Category_Item">

                                {/* Popup to fill info of new Grammar category: title, description */}
                                <Popup modal trigger={
                                    <div className="Admin_Add_Grammar_Category_Item_Name">+ Add Grammar Category</div>
                                }
                                    open={this.state.isPopupOpen}
                                    onOpen={this.openHandler}
                                    closeOnDocumentClick = {false}
                                >
                                    <div className="Customize_Popup">
                                        <div className="Popup_Title_Bar">
                                            <div className="Popup_Title">ADD GRAMMAR CATEGORY:</div>
                                            <img className="Delete_Btn" src={delete_btn} onClick={this.closeHandler} />
                                        </div>
                                    </div>
                                    <form className="Add_Grammar_Category_Form" onSubmit={this.submitHandler} >
                                        <div className="Simple_Label">Title:</div>
                                        <input className="Simple_Changable_Text_Input" name='title' type="text" onChange={this.changeTitleHandler} />
                                        <div className="Simple_Label">Description:</div>
                                        <textarea className="Simple_Text_Area" name='description' onChange={this.changeDescriptionHandler} />
                                        <input className="Blue_Button" type="submit" value="Save"></input>
                                    </form>

                                </Popup>

                            </div>

                            {/* UI for show all categories */}
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