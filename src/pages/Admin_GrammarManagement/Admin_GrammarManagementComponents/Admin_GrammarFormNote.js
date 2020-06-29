import React, { Component } from 'react';
import "./Admin_GrammarFormNote.css"
import edit_btn from "../../../resources/edit_btn.png"
import delete_btn from "../../../resources/delete_btn.png"
import Popup from 'reactjs-popup'
class Admin_GrammarFormNote extends Component {

    constructor(props) {
        super(props);
        this.notifyContent = "";
        this.state = {
            GrammarNotes_PutDTO: this.props.note_PutDTO,
            GrammarNote_UpdateDTO: {
                "id": null,
                "content": "",
            },
            "isUpdateGrammarNotePopupOpen": false,
            "isVerifyDeleteGrammarNotePopupOpen": false,
            // "isUpdateGrammarNotePopupOpen": false,
            // "isVerifyDeleteNotePopupOpen": false
            "isNotifyPopupOpen": false
        }
    }

    componentDidMount() {
        this.state.GrammarNote_UpdateDTO.id = this.props.note_id;
        this.state.GrammarNote_UpdateDTO.content = this.props.note_content;
    }

    //update grammar note
    updateGrammarNote = (e) => {
        e.preventDefault();
        let token = sessionStorage.getItem('token');
        console.log(JSON.stringify(this.state.GrammarNotes_PutDTO))
        fetch('/api/v1/grammarForms/' + this.props.note_form_ID + '/notes', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(this.state.GrammarNotes_PutDTO)
        })
            .then(response => {
                console.log("Success: ");
                console.log(response);
                if (response.status === 200 || response.status === 204) {
                    this.notifyContent = "Update grammar note success!";
                    this.openNotifyPopupHandler();
                }
                else {
                    this.notifyContent = "Update grammar note failed!";
                    this.openNotifyPopupHandler();
                } // window.location.reload();
            })
            .catch(error => {

                console.log("Error:" + error);
            })
    }

    deleteGrammarNote = (e) => {
        e.preventDefault();
        let token = sessionStorage.getItem('token');
        console.log(JSON.stringify(this.state.GrammarNotes_PutDTO));
        for (var i = 0; i < this.state.GrammarNotes_PutDTO.length; i++) {
            if (this.state.GrammarNotes_PutDTO[i].id === this.props.note_id)
                this.state.GrammarNotes_PutDTO.splice(i, 1);
        }
        console.log(JSON.stringify(this.state.GrammarNotes_PutDTO));
        fetch('/api/v1/grammarForms/' + this.props.note_form_ID + '/notes', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(this.state.GrammarNotes_PutDTO)
        })
            .then(response => {
                console.log("Success: ");
                console.log(response);
                if (response.status === 200 || response.status === 204) {
                    this.notifyContent = "Delete grammar note success!";
                    this.openNotifyPopupHandler();
                }
                else {
                    this.notifyContent = "Delete grammar note failed!";
                    this.openNotifyPopupHandler();
                } // window.location.reload();
            })
            .catch(error => {

                console.log("Error:" + error);
            })
    }


    render() {
        return (
            <div className="Admin_Grammar_Form_Note" >
                <div>
                    <div className="admin_grammar_note_headline_port">
                        <div className="admin_grammar_note_decoration_headline"></div>
                    </div>
                    <div className="Admin_Grammar_Form_Note_Port">
                        <div className="admin_decoration_note_text">NOTE:</div>
                        <div className="Admin_Grammar_Note_Content">
                            {this.props.note_content}
                        </div>
                    </div>
                </div>
                <div className="Edit_Delete_Btn_Group">
                    {/* Popup for update grammar note:*/}
                    <Popup modal trigger={
                        <img className="Edit_Btn" src={edit_btn} />
                    }
                        open={this.state.isUpdateGrammarNotePopupOpen}
                        onOpen={this.openUpdateGrammarNotePopupHandler}
                        closeOnDocumentClick={false}
                    >
                        <React.Fragment>
                            <div className="Customize_Popup">
                                <div className="Popup_Title_Bar">
                                    <div className="Popup_Title">UPDATE NOTE:</div>
                                    <img className="Delete_Btn" src={delete_btn} onClick={this.closeUpdateGrammarNotePopupHandler} />
                                </div>
                            </div>
                            <form className="Popup_Form_Max_Size" onSubmit={this.updateGrammarNote} >
                                <div className="Simple_Label">Note content:</div>
                                <input className="Simple_Changable_Text_Input" type="text" defaultValue={this.props.note_content} onChange={this.changeUpdateGrammarNoteContentHandler} />
                                <div className="Height_10px" ></div>
                                <div className="Align_Center">
                                    <input className="Blue_Button" type="submit" value="Save"></input>
                                </div>
                                <div className="Height_10px" />
                            </form>
                        </React.Fragment>
                    </Popup>

                    {/* Popup for delete grammar note:*/}
                    <div className="Delete_Port">
                        <Popup modal trigger={
                            <img className="Delete_Btn" src={delete_btn} />}
                            open={this.state.isVerifyDeleteGrammarNotePopupOpen}
                            onOpen={this.openVerifyDeleteGrammarNotePopupHandler}
                            closeOnDocumentClick={false}
                        >
                            <React.Fragment>
                                <div className="Align_Center">
                                    <div className="Align_Right">
                                        <img className="Delete_Btn" src={delete_btn} onClick={this.closeVerifyDeleteGrammarCategoryPopup} />
                                    </div>
                                    <div className="Height_30px"></div>
                                    <div className="Simple_Label">  Do you want to delete this grammar note?</div>
                                    <div className="Height_30px"></div>
                                    <div className="Justify_Content_Space_Between">
                                        <button className="Blue_Button" onClick={this.deleteGrammarNote}>
                                            Verify
                                    </button>
                                        <button className="Red_Button" onClick={this.closeVerifyDeleteGrammarNotePopupHandler}>
                                            Cancel
                                    </button>
                                    </div>
                                    <div className="Height_10px"></div>
                                </div>
                            </React.Fragment>
                        </Popup>
                    </div>

                </div>
                {/* Notify Popup */}
                <Popup modal
                    open={this.state.isNotifyPopupOpen}
                    onOpen={this.openNotifyPopup}
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
            </div>
        )
    }

    changeUpdateGrammarNoteContentHandler = e => {
        this.state.GrammarNote_UpdateDTO.content = e.target.value;
        for (var i = 0; i < this.state.GrammarNotes_PutDTO.length; i++) {
            if (this.state.GrammarNotes_PutDTO[i].id === this.props.note_id) {
                this.state.GrammarNotes_PutDTO[i] = this.state.GrammarNote_UpdateDTO;
            }
        }
        // this.state.GrammarNote_CreateDTO.content = e.target.value;
    }

    openUpdateGrammarNotePopupHandler = () => {
        this.state.isUpdateGrammarNotePopupOpen = true;
        this.setState(this.state);
    }
    closeUpdateGrammarNotePopupHandler = () => {
        this.state.isUpdateGrammarNotePopupOpen = false;
        this.setState(this.state);
    }

    openVerifyDeleteGrammarNotePopupHandler = () => {
        this.state.isVerifyDeleteGrammarNotePopupOpen = true;
        this.setState(this.state);
    }
    closeVerifyDeleteGrammarNotePopupHandler = () => {
        this.state.isVerifyDeleteGrammarNotePopupOpen = false;
        this.setState(this.state);
    }

    ///Notify Popup
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

export default Admin_GrammarFormNote;