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

//Thuc hien thao them mot category:
class Admin_GrammarManagement extends Component {
    constructor(props) {
        super();
        this.notifyContent = "";
        this.state = {
            "grammarCategories":
                [
                ],
            GrammarCategory_CreateDTO: {
                "id": null,
                "title": "",
                "description": "",
                "docGrammarContentSummary":
                    null

            },
            "isAddGrammarCategoryPopupOpen": false,
            "isNotifyPopupOpen": false
        }
    }

    //GET data from Server: Get all grammar category
    componentDidMount() {
        //Lấy thông tin các danh mục ngữ pháp để hiển thị
        this.fetchGrammarCategoryList();
    }

    //hàm lấy danh sách grammar.
    fetchGrammarCategoryList() {
        fetch('/api/v1/grammarCategories', {
            method: "GET"
        })
            .then(response => response.json())
            .then(response => {
                this.state.grammarCategories = response;
                this.setState(this.state);
            }
            );
    }

    //hàm xử lý sự kiện thêm một grammar category
    addGrammarCategory = e => {
        e.preventDefault();

        //lấy token từ localStorage:
        let token = localStorage.token;

        //POST yêu cầu server thêm danh mục ngữ pháp.

        fetch('/api/v1/grammarCategories',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    //     'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(this.state.GrammarCategory_CreateDTO)
            }
        )
            .then(response => {
                console.log(response);
                if (response.status === 200) {
                    this.notifyContent = "Add grammar category success!";
                    this.openNotifyPopupHandler();
                }
                else {
                    this.notifyContent = "Add grammar category fail!";
                    this.openNotifyPopupHandler();
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {

        //bind data to post
        let title = this.state.GrammarCategory_CreateDTO.title;
        let description = this.state.GrammarCategory_CreateDTO.description;

        //list of grammar category item
        let items = this.state.grammarCategories.map(item =>
            <Admin_GrammarCategoryItem key={item.id} item={item}></Admin_GrammarCategoryItem>
        );

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
                                    open={this.state.isAddGrammarCategoryPopupOpen}
                                    onOpen={this.openAddGrammarCategoryPopupHandler}
                                    closeOnDocumentClick={false}
                                >
                                    <React.Fragment>
                                        <div className="Customize_Popup">
                                            <div className="Popup_Title_Bar">
                                                <div className="Popup_Title">ADD GRAMMAR CATEGORY:</div>
                                                <img className="Delete_Btn" src={delete_btn} onClick={this.closeAddGrammarCategoryPopupHandler} />
                                            </div>
                                        </div>
                                        <form className="Add_Grammar_Category_Form" onSubmit={this.addGrammarCategory} >
                                            <div className="Simple_Label">Title:</div>
                                            <input className="Simple_Changable_Text_Input" name='title' type="text" onChange={this.changeTitleHandler} />
                                            <div className="Simple_Label">Description:</div>
                                            <textarea className="Simple_Text_Area" name='description' onChange={this.changeDescriptionHandler} />
                                            <input className="Blue_Button" type="submit" value="Save"></input>
                                        </form>
                                    </React.Fragment>
                                </Popup>

                            </div>

                            {/* UI for show all categories */}
                            {items}

                        </div>
                    </div>
                </div>
                {/*Notify Popup */}
                <Popup modal
                    open={this.state.isNotifyPopupOpen}
                    onOpen={this.openNotifyPopupHandler}
                    closeOnDocumentClick={false}
                >
                    <React.Fragment>
                        <div className="Align_Center">
                            <div className="Height_30px"></div>
                            <div className="Simple_Label">{this.notifyContent}</div>
                            <div className="Height_30px"></div>
                            <div className="Justify_Content_Space_Between">
                                <button className="Blue_Button" onClick={this.closeNotifyPopupHandlerAndReload}>
                                    OK
                                </button>
                            </div>
                            <div className="Height_10px"></div>
                        </div>
                    </React.Fragment>
                </Popup>
                <div className="Admin_Grammar_Management_Footer">
                    <Footer ></Footer>
                </div>
            </div>

        );
    }

    // POST data to server: create an grammar category
    changeTitleHandler = e => {
        this.state.GrammarCategory_CreateDTO.title = e.target.value;
    }

    changeDescriptionHandler = e => {
        this.state.GrammarCategory_CreateDTO.description = e.target.value;
    }

    //handle close and open close add Grammar Category Popup:
    openAddGrammarCategoryPopupHandler = () => {
        this.state.isAddGrammarCategoryPopupOpen = true;
        this.setState(this.state);
    }

    closeAddGrammarCategoryPopupHandler = () => {
        this.state.isAddGrammarCategoryPopupOpen = false;
        this.setState(this.state);
    }

    openNotifyPopupHandler = () => {
        this.state.isNotifyPopupOpen = true;
        this.setState(this.state);
    }

    closeNotifyPopupHandler = () => {
        this.state.isNotifyPopupOpen = false;
        this.setState(this.state);
    }

    closeNotifyPopupHandlerAndReload = () => {
        this.state.isNotifyPopupOpen = false;
        this.setState(this.state);
        window.location.reload();
    }
}

export default Admin_GrammarManagement;