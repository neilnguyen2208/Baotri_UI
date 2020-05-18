import React, { Component } from 'react';
import "./Admin_GrammarCategoryListItem.css"
import edit_btn from "../../../resources/edit_btn.png"
import delete_btn from "../../../resources/delete_btn.png"
import Popup from 'reactjs-popup'

class Admin_GrammarCategoryListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            GrammarDetail_UpdateDTO: { //for PATCH => only need title and description:
                "title": "",
                "description": ""
            },
            "isUpdateGrammarDetailPopupOpen": false,
            "isDeleteGrammarDetailPopupOpen": false,
        }
    }

    //initiate value of DTO by props:
    componentDidMount() {
        this.state.GrammarDetail_UpdateDTO.title = this.props.item.grammarTitle;
        this.state.GrammarDetail_UpdateDTO.description = this.props.item.grammarDescription;
        this.setState(this.state);
    }

    //open and close popup handler
    openUpdateGrammarDetailPopupHandler = () => {
        this.state.isUpdateGrammarDetailPopupOpen = true;
        this.setState(this.state);
    }

    closeUpdateGrammarDetailPopupHandler = () => {
        this.state.isUpdateGrammarDetailPopupOpen = false;
        this.setState(this.state);
    }

    openDeleteGrammarDetailPopupHandler = () => {
        this.state.isDeleteGrammarDetailPopupOpen = true;
        this.setState(this.state);
    }

    closeDeleteGrammarDetailPopupHandler = () => {
        this.state.isDeleteGrammarDetailPopupOpen = false;
        this.setState(this.state);
    }

    //change content of input handler
    changeUpdateGrammarDetailTitleHandler = e => {
        this.state.GrammarDetail_UpdateDTO.title = e.target.value;
    }
    changeUpdateGrammarDetailDescriptionHandler = e => {
        this.state.GrammarDetail_UpdateDTO.description = e.target.value;
    }

    //PATCH Grammar Detail: => update grammar content summary
    updateGrammarDetail = e => {
        e.preventDefault();
        // console.log(this.props.item.id);
        let token = localStorage.token;
        fetch('api/v1/grammar/' + this.props.item.grammarID, {
            method: "PATCH",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: this.GrammarDetail_UpdateDTO
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })

        this.closeUpdateGrammarDetailPopupHandler();
    }
    //DELETE Grammar Detail
    deleteGrammarDetail = e => {
        e.preventDefault();
        let token = localStorage.token;
        fetch('api/v1/grammar/' + this.props.item.grammarID, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        })
            .then(response => {
                console.log(response)
            })
            .catch(error => {
                console.log(error);
            })

        this.closeDeleteGrammarDetailPopupHandler();
    }


    render() {
        let detailUrl = "/admin/grammar/" + this.props.item.grammarID;
        let title = this.state.GrammarDetail_UpdateDTO.title;
        let description = this.state.GrammarDetail_UpdateDTO.description;
        console.log(title);
        return (
            <div className="Admin_Grammar_Category_List_Item" >
                <a class="Admin_Grammar_Category_List_Item_Name" href={detailUrl}>{this.props.item.grammarTitle}</a>
                <div className="Edit_Delete_Btn_Group">
                    {/* Update Grammar Content Summary Popup */}
                    <div className="Edit_Port">
                        <Popup modal trigger={
                            <img className="Edit_Btn" src={edit_btn} />}
                            open={this.state.isUpdateGrammarDetailPopupOpen}
                            onOpen={this.openUpdateGrammarDetailPopupHandler}
                            closeOnDocumentClick={false}
                        >
                            <div className="Customize_Popup">
                                <div className="Popup_Title_Bar">
                                    <div className="Popup_Title">UPDATE GRAMMAR LESSION:</div>
                                    <img className="Delete_Btn" src={delete_btn} onClick={this.closeUpdateGrammarDetailPopupHandler} />
                                </div>
                            </div>
                            <form className="Update_Grammar_Content_Summary_Form" onSubmit={this.updateGrammarDetail} >
                                <div className="Simple_Label">Title:</div>
                                <input className="Simple_Changable_Text_Input" defaultValue={title} name={title} type="text" onChange={this.changeUpdateGrammarDetailTitleHandler} />
                                <div className="Simple_Label">Description:</div>
                                <textarea className="Simple_Text_Area" defaultValue={description} name={description} onChange={this.changeUpdateGrammarDetailDescriptionHandler} />
                                <div className="Align_Center">
                                    <input className="Blue_Button" type="submit" value="Update"></input>
                                </div>
                            </form>
                        </Popup>
                    </div>

                    {/* Delete Grammar Content Summary Popup */}
                    <div className="Delete_Port">
                        <Popup modal trigger={
                            <img className="Delete_Btn" src={delete_btn} />}
                            open={this.state.isDeleteGrammarDetailPopupOpen}
                            onOpen={this.openDeleteGrammarDetailPopupHandler}
                            closeOnDocumentClick={false}
                        >
                            <div className="Align_Center">
                                <div className="Align_Right">
                                    <img className="Delete_Btn" src={delete_btn} onClick={this.closeDeleteGrammarDetailPopupHandler} />
                                </div>
                                <div className="Height_30px"></div>
                                <div className="Simple_Label">  Do you want to delete this grammar lession?</div>
                                <div className="Height_30px"></div>
                                <div className="Justify_Content_Space_Between">
                                    <button className="Blue_Button" onClick={this.deleteGrammarDetail}>
                                        Verify
                                    </button>
                                    <button className="Red_Button" onClick={this.closeDeleteGrammarDetailPopupHandler}>
                                        Cancel
                                    </button>
                                </div>
                                <div className="Height_10px"></div>
                            </div>
                        </Popup>
                    </div>

                </div>
            </div >
        )
    }
}

export default Admin_GrammarCategoryListItem;