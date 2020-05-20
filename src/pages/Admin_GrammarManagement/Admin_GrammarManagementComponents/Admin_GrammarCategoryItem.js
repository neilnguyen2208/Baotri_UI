import React, { Component } from 'react';
import "./Admin_GrammarCategoryItem.css"
import Admin_GrammarCategoryListItem from "./Admin_GrammarCategoryListItem.js"
import edit_btn from "../../../resources/edit_btn.png"
import delete_btn from "../../../resources/delete_btn.png"
import CustomizePopup from "../../../components/CustomizePopup/CustomizePopup"
import Popup from 'reactjs-popup'
import axios from 'axios'

class Admin_GrammarCategoryItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            GrammarCategory_UpdateDTO: {
                "id": "",
                "title": "",
                "description": "",
                "docGrammarContentSummary": [
                    {}
                ]
            },
            GrammarContentSummary_CreateDTO: {
                "id": "",
                "title": "",
                "description": "",
                "forms": []
            },
            "isUpdateGrammarCategoryPopupOpen": false,
            "isVerifyDeleteGrammarCategoryPopupOpen": false,
            "isAddGrammarContentSummaryPopupOpen": false,
        }
    }

    //set data from parent
    componentDidMount() {
        this.state.GrammarCategory_UpdateDTO = this.props.item;
        this.setState(this.state);
    }

    // PUT data to server: create an grammar category
    changeUpdateGrammarCategoryTitleHandler = e => {
        this.state.GrammarCategory_UpdateDTO.title = e.target.value;
        console.log(this.state.GrammarCategory_UpdateDTO);
    }

    changeUpdateGrammarCategoryDescriptionHandler = e => {
        this.state.GrammarCategory_UpdateDTO.description = e.target.value;
        console.log(this.state.GrammarCategory_UpdateDTO);
    }

    //PUT Grammar Category Item
    submitUpdateGrammarCategory = e => {
        e.preventDefault();
        let token = localStorage.token;
        console.log(this.state.GrammarCategory_UpdateDTO);
        fetch('/api/v1/grammarCategories/' + this.state.GrammarCategory_UpdateDTO.id,
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(this.state.GrammarCategory_UpdateDTO)
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

    //DELETE the post
    deleteGrammarCategoryHandler = e => {
        e.preventDefault();
        // console.log(this.props.item.id);
        let token = localStorage.token;
        fetch('api/v1/grammarCategories/' + this.state.GrammarCategory_UpdateDTO.id, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })

        this.closeVerifyDeleteGrammarCategoryPopup();
        //delete xong có làm gì không thì không biết, đằng nào cũng delete xong đâu :D
    }

    //POST Grammar Content Summary
    changeAddGrammarContentSummaryTitleHandler = e => {
        this.state.GrammarContentSummary_CreateDTO.title = e.target.value;
        console.log(this.state.GrammarContentSummary_CreateDTO);
    }

    changeAddGrammarContentSummaryDescriptionHandler = e => {
        this.state.GrammarContentSummary_CreateDTO.description = e.target.value;
        console.log(this.state.GrammarContentSummary_CreateDTO);
    }

    postGrammarContentSummaryHandler = e => {
        e.preventDefault();
        // console.log(this.props.item.id);
        let token = localStorage.token;
        fetch('api/v1/grammarCategories/' + this.props.item.id + '/grammar', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: this.GrammarContentSummary_CreateDTO
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })

        this.closeAddGrammarContentSummaryPopup();
    }

    //handler open close popup
    //handle close and open close add Grammar Category Popup:
    openUpdateGrammarCategoryPopupHandler = () => {
        this.state.isUpdateGrammarCategoryPopupOpen = true;
        this.setState(this.state);
    }

    closeUpdateGrammarCategoryPopupHandler = () => {
        this.state.isUpdateGrammarCategoryPopupOpen = false;
        this.setState(this.state);
    }

    //handle close and open close verify popup
    openVerifyDeleteGrammarCategoryPopup = () => {
        this.state.isVerifyDeleteGrammarCategoryPopupOpen = true;
        this.setState(this.state);
    }
    closeVerifyDeleteGrammarCategoryPopup = () => {
        this.state.isVerifyDeleteGrammarCategoryPopupOpen = false;
        this.setState(this.state);
    }

    //handle close and open add grammar lession popup:
    openAddGrammarContentSummaryPopup = () => {
        this.state.isAddGrammarContentSummaryPopupOpen = true;
        this.setState(this.state);
    }
    closeAddGrammarContentSummaryPopup = () => {
        this.state.isAddGrammarContentSummaryPopupOpen = false;
        this.setState(this.state);
    }

    render() {
        //
        let title = this.state.GrammarCategory_UpdateDTO.title;
        let description = this.state.GrammarCategory_UpdateDTO.description;

        //render grammar summary contents
        let grammarItemLists = this.state.GrammarCategory_UpdateDTO.docGrammarContentSummary.map((contentSummary) => {
            return (            
                    <Admin_GrammarCategoryListItem parent_ID = {this.state.GrammarCategory_UpdateDTO.id} item={contentSummary}></Admin_GrammarCategoryListItem>              
            );
        })

        return (
            <div className="Admin_Grammar_Category_Item">
                <div className="Admin_Grammar_Category_Item_Name_Manage_Port">
                    <div className="Admin_Grammar_Category_Item_Name">
                        {this.props.item.title}
                        <div className="Description_Tooltip_Text">{this.props.item.description}</div>
                    </div>
                    <div className="Edit_Delete_Btn_Group">

                        {/* Popup for Updating Grammar Category */}
                        <div className="Edit_Port">
                            <Popup modal trigger={
                                <img className="Edit_Btn" src={edit_btn} />}
                                open={this.state.isUpdateGrammarCategoryPopupOpen}
                                onOpen={this.openUpdateGrammarCategoryPopupHandler}
                                closeOnDocumentClick = {false}
                            >
                                <div className="Customize_Popup">
                                    <div className="Popup_Title_Bar">
                                        <div className="Popup_Title">UPDATE GRAMMAR CATEGORY:</div>
                                        <img className="Delete_Btn" src={delete_btn} onClick={this.closeUpdateGrammarCategoryPopupHandler} />
                                    </div>
                                </div>
                                <form className="Add_Grammar_Category_Form" onSubmit={this.submitUpdateGrammarCategory} >

                                    <div className="Simple_Label">Title:</div>
                                    <input className="Simple_Changable_Text_Input" defaultValue={title} name={title} type="text" onChange={this.changeUpdateGrammarCategoryTitleHandler} />
                                    <div className="Simple_Label">Description:</div>
                                    <textarea className="Simple_Text_Area" defaultValue={description} name={description} onChange={this.changeUpdateGrammarCategoryDescriptionHandler} />
                                    <div className="Align_Center">
                                        <input className="Blue_Button" type="submit" value="Update"></input>
                                    </div>
                                </form>
                            </Popup>
                        </div>

                        {/* Popup for Deleting Grammar Category  */}
                        <div className="Delete_Port">
                            <Popup modal trigger={
                                <img className="Delete_Btn" src={delete_btn} />}
                                open={this.state.isVerifyDeleteGrammarCategoryPopupOpen}
                                onOpen={this.openVerifyDeleteGrammarCategoryPopup}
                                closeOnDocumentClick = {false}
                            >
                                <div className="Align_Center">
                                    <div className="Align_Right">
                                        <img className="Delete_Btn" src={delete_btn} onClick={this.closeVerifyDeleteGrammarCategoryPopup} />
                                    </div>
                                    <div className="Height_30px"></div>
                                    <div className="Simple_Label">  Do you want to delete this grammar category?</div>
                                    <div className="Height_30px"></div>
                                    <div className="Justify_Content_Space_Between">
                                        <button className="Blue_Button" onClick={this.deleteGrammarCategoryHandler}>
                                            Verify
                                    </button>
                                        <button className="Red_Button" onClick={this.closeVerifyDeleteGrammarCategoryPopup}>
                                            Cancel
                                    </button>
                                    </div>
                                    <div className="Height_10px"></div>
                                </div>
                            </Popup>
                        </div>
                    </div>
                </div >

                {/* for showing all Grammar Content Summary */}
                {grammarItemLists}

                {/* for Adding Grammar Content Summary*/}
                <div className="Admin_Add_Grammar_Category_List_Item">

                    {/* Popup to fill info of new Grammar category: title, description */}
                    <Popup modal trigger={
                        <div className="Admin_Add_Grammar_Category_List_Item_Name">+ Add Grammar Lession</div>
                    }
                        open={this.state.isAddGrammarContentSummaryPopupOpen}
                        onOpen={this.openAddGrammarContentSummaryPopup}
                        closeOnDocumentClick = {false}
                    >
                        <div className="Customize_Popup">
                            <div className="Popup_Title_Bar">
                                <div className="Popup_Title">ADD A GRAMMAR LESSION:</div>
                                <img className="Delete_Btn" src={delete_btn} onClick={this.closeAddGrammarContentSummaryPopup} />
                            </div>
                        </div>
                        <form className="Add_Grammar_Category_Content_Summary_Form" onSubmit={this.postGrammarContentSummaryHandler} >
                            <div className="Simple_Label">Title:</div>
                            <input className="Simple_Changable_Text_Input" name='title' type="text" onChange={this.changeAddGrammarContentSummaryTitleHandler} />
                            <div className="Simple_Label">Description:</div>
                            <textarea className="Simple_Text_Area" name='description' onChange={this.changeAddGrammarContentSummaryDescriptionHandler} />
                            <div className="Align_Center">
                                <input className="Blue_Button" type="submit" value="Save"></input>
                            </div>
                        </form>
                    </Popup>
                </div>
            </div >
        );
    }

}

export default Admin_GrammarCategoryItem;