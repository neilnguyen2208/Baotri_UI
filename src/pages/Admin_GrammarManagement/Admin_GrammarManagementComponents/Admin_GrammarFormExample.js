import React, { Component } from 'react';
import "./Admin_GrammarFormExample.css"
import Popup from 'reactjs-popup'
import edit_btn from "../../../resources/edit_btn.png"
import delete_btn from "../../../resources/delete_btn.png"

class Admin_GrammarFormExample extends Component {

    constructor(props) {
        super(props);
        this.state = {
            GrammarExamples_PutDTO: this.props.example_PutDTO,
            GrammarExamples_UpdateDTO: [],
            // GrammarNotes_PutDTO: [],
            "isUpdateGrammarExamplePopupOpen": false,
            "isVerifyDeleteGrammarExamplePopupOpen": false,
            // "isUpdateGrammarNotePopupOpen": false,
            // "isVerifyDeleteNotePopupOpen": false
        }
    }

    render() {
        return (
            <div className="Admin_Grammar_Form_Example">
                <div className="Admin_Grammar_Form_Example_Show_Port">
                    <div className="admin_decoration_example_text">For example:</div>

                    <div className="Admin_Grammar_Example_Image_Port">
                        <img className="Admin_Grammar_Example_Image" src={this.props.example_image_url} />
                    </div>

                    <div className="Admin_Grammar_Example_Sentences">
                        <div dangerouslySetInnerHTML={{ __html: this.props.example_content }} />
                    </div>
                </div>

                <div className="Edit_Delete_Btn_Group">

                    {/* Popup for update grammar example:*/}
                    <Popup modal trigger={
                        <img className="Edit_Btn" src={edit_btn} />
                    }
                        open={this.state.isUpdateGrammarExamplePopupOpen}
                        onOpen={this.openUpdateGrammarExamplePopupHandler}
                        closeOnDocumentClick={false}
                    >
                        <React.Fragment>
                            <div className="Customize_Popup">
                                <div className="Popup_Title_Bar">
                                    <div className="Popup_Title">UPDATE EXAMPLE:</div>
                                    <img className="Delete_Btn" src={delete_btn} onClick={this.closeUpdateGrammarExamplePopupHandler} />
                                </div>
                            </div>
                            <form className="Popup_Form_Max_Size" onSubmit={this.updateGrammarExample} >
                                <div className="Simple_Label">Example content:</div>
                                <input className="Simple_Changable_Text_Input" type="text" onChange={this.changeUpdateGrammarExampleContentHandler} />
                                <div className="Simple_Label">Example image url:</div>
                                <input className="Simple_Changable_Text_Input" type="text" onChange={this.changeUpdateGrammarExampleImageURLHandler} />
                                <div className="Height_10px" ></div>
                                <div className="Align_Center">
                                    <input className="Blue_Button" type="submit" value="Add Example"></input>
                                </div>
                                <div className="Height_10px" />
                            </form>
                        </React.Fragment>
                    </Popup>
                    <img className="Delete_Btn" src={delete_btn} />

                </div>
            </div>
        )
    }

    //Handler for input change:
    changeUpdateGrammarExampleContentHandler = e => {
        this.state.GrammarExample_CreateDTO.content = e.target.value;
    }
    changeUpdateGrammarExampleImageURLHandler = e => {
        this.state.GrammarExample_CreateDTO.imageURL = e.target.value;
    }

    //Popup for grammar example:
    openUpdateGrammarExamplePopupHandler = () => {
        this.state.isUpdateGrammarExamplePopupOpen = true;
        this.setState(this.state);
    }
    closeUpdateGrammarExamplePopupHandler = () => {
        this.state.isUpdateGrammarExamplePopupOpen = false;
        this.setState(this.state);
    }

    openVerifyDeleteGrammarExamplePopupHandler = () => {
        this.state.isVerifyDeleteGrammarExamplePopupOpen = true;
        this.setState(this.state);
    }
    closeVerifyDeleteGrammarExamplePopupHandler = () => {
        this.state.isVerifyDeleteGrammarExamplePopupOpen = false;
        this.setState(this.state);
    }

    //Popup for grammar note:
    openUpdateGrammarNotePopupHandler = () => {
        this.state.isUpdateGrammarNotePopupOpen = true;
        this.setState(this.state);
    }
    closeUpdateGrammarNotePopupHandler = () => {
        this.state.isUpdateGrammarNotePopupOpen = false;
        this.setState(this.state);
    }

    openVerifyDeleteGrammarNotePopupHandler = () => {
        this.state.isVerifyDeleteNotePopupOpen = true;
        this.setState(this.state);
    }
    closeVerifyDeleteGrammarNotePopupHandler = () => {
        this.state.isVerifyDeleteNotePopupOpen = false;
        this.setState(this.state);
    }

}

export default Admin_GrammarFormExample;