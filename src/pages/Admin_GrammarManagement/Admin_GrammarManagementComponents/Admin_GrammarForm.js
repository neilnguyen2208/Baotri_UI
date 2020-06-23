import React, { Component } from 'react';
import "./Admin_GrammarForm.css"
import Popup from 'reactjs-popup'
import edit_btn from "../../../resources/edit_btn.png"
import delete_btn from "../../../resources/delete_btn.png"

//show form and handler update, delete a form:
class Admin_GrammarForm extends Component {

    constructor(props) {
        super(props);
        this.notifyContent = "";
        this.state = {
            GrammarForm_UpdateDTO: {
                "id": null,
                "title": null,
                "usage": null,
                "useCase": null,
                "how": null,
                "examples": null,
                "notes": null
            },
            "isUpdateGrammarFormPopupOpen": false,
            "isVerifyDeleteGrammarFormPopupOpen": false,
            "isNotifyPopupOpen": false
        }
    }

    //initial value for grammar form:
    componentDidMount() {
        this.state.GrammarForm_UpdateDTO.id = this.props.form_ID;
        this.state.GrammarForm_UpdateDTO.title = this.props.formTitle;
        this.state.GrammarForm_UpdateDTO.useCase = this.props.useCase;
        this.state.GrammarForm_UpdateDTO.usage = this.props.usage;
        this.state.GrammarForm_UpdateDTO.how = this.props.how;
    }

    //PATCH grammar form to serve
    updateGrammarForm = e => {
        e.preventDefault();
        //lấy token từ sessionStorage:
        let token = sessionStorage.getItem('token');
        console.log(JSON.stringify(this.state.GrammarForm_UpdateDTO));
        fetch('/api/v1/grammarForms/' + this.props.form_ID,
            {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(this.state.GrammarForm_UpdateDTO)
            }
        )
            .then(response => {
                console.log(response);
                if (response.status === 200 || response.status === 204) {
                    this.notifyContent = "Update grammar form success!";
                    this.openNotifyPopupHandler();
                    return;
                }
                this.notifyContent = "Update grammar form failed!";
                this.openNotifyPopupHandler();
            })
            .catch(error => {
                console.log(error);
            })

    }

    //DELETE grammar form
    deleteGrammarForm = e => {
        e.preventDefault();
        //lấy token từ sessionStorage:
        let token = sessionStorage.getItem('token');

        fetch('/api/v1/grammarForms/' + this.props.form_ID,
            {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            }
        )
            .then(response => {
                console.log(response);
                if (response.status === 200 || response.status === 204) {
                    this.notifyContent = "Delete grammar form success!";
                    this.openNotifyPopupHandler();
                    return;
                }
                this.notifyContent = "Delete grammar form failed!";
                this.openNotifyPopupHandler();
            })
            .catch(error => {
                console.log(error);
            })
        // this.closeVerifyDeleteGrammarFormPopupHandler();

    }


    render() {

        // let
        return (
            <div className="Admin_Grammar_Form">
                <div className="Admin_Grammar_Form_Port">
                    <div className="Admin_Grammar_Form_Title">{this.state.GrammarForm_UpdateDTO.title}</div>
                    <div className="Admin_Grammar_Form_Content">
                        <div className="admin_grammar_form_layout">
                            <div className="Admin_Grammar_Form_UseCase">
                                {this.props.useCase}
                            </div>
                            <div className="Admin_Grammar_Form_Usage">
                                {this.props.usage}
                            </div>
                            <div className="Admin_Grammar_Form_How">
                                {this.props.how}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Edit_Delete_Btn_Group">
                    <Popup modal trigger={
                        <img className="Edit_Btn" src={edit_btn} />}
                        open={this.state.isUpdateGrammarFormPopupOpen}
                        onOpen={this.openUpdateGrammarFormPopupHandler}
                        closeOnDocumentClick={false}
                    >
                        <React.Fragment>
                            <div className="Customize_Popup">
                                <div className="Popup_Title_Bar">
                                    <div className="Popup_Title">UPDATE GRAMMAR FORM:</div>
                                    <img className="Delete_Btn" src={delete_btn} onClick={this.closeUpdateGrammarFormPopupHandler} />
                                </div>
                            </div>
                            <form className="Popup_Form_Max_Size" onSubmit={this.updateGrammarForm} >
                                <div className="Simple_Label">Form title:</div>
                                <input className="Simple_Changable_Text_Input" type="text" defaultValue={this.props.formTitle} onChange={this.changeUpdateGrammarFormTitleHandler} />
                                <div className="Simple_Label">Usage:</div>
                                <input className="Simple_Changable_Text_Input" type="text" defaultValue={this.props.usage} onChange={this.changeUpdateGrammarFormUsageHandler} />
                                <div className="Simple_Label">Use case:</div>
                                <input className="Simple_Changable_Text_Input" type="text" defaultValue={this.props.useCase} onChange={this.changeUpdateGrammarFormUsecaseHandler} />
                                <div className="Simple_Label">How to use:</div>
                                <input className="Simple_Changable_Text_Input" type="text" defaultValue={this.props.how} onChange={this.changeUpdateGrammarFormHowHandler} />

                                <div className="Height_10px" ></div>
                                <div className="Align_Center">
                                    <input className="Blue_Button" type="submit" value="Save"></input>
                                </div>
                                <div className="Height_10px" />
                            </form>
                        </React.Fragment>
                    </Popup>

                    <Popup modal trigger={
                        <img className="Delete_Btn" src={delete_btn} />}
                        open={this.state.isVerifyDeleteGrammarFormPopupOpen}
                        onOpen={this.openVerifyDeleteGrammarFormPopupHandler}
                        closeOnDocumentClick={false}
                    >
                        <div className="Align_Center">
                            <div className="Align_Right">
                                <img className="Delete_Btn" src={delete_btn} onClick={this.closeVerifyDeleteGrammarFormPopupHandler} />
                            </div>
                            <div className="Height_30px"></div>
                            <div className="Simple_Label">  Do you want to delete this form (include your notes and your examples)?</div>
                            <div className="Height_30px"></div>
                            <div className="Justify_Content_Space_Between">
                                <button className="Blue_Button" onClick={this.deleteGrammarForm}>
                                    Verify
                                    </button>
                                <button className="Red_Button" onClick={this.closeVerifyDeleteGrammarFormPopupHandler}>
                                    Cancel
                                    </button>
                            </div>
                            <div className="Height_10px"></div>
                        </div>
                    </Popup>
                </div>

                {/* Notify Popup */}
                <Popup modal
                    open={this.state.isNotifyPopupOpen}
                    onOpen={this.openNotifyPopup}
                    closeOnDocumentClick={false}
                >
                    <React.Fragment>
                        <Popup modal
                            open={this.state.isNotifyPopupOpen}
                            onOpen={this.openNotifyPopupHandler}
                            closeOnDocumentClick={false}
                        >
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
                        </Popup>
                    </React.Fragment>
                </Popup>
            </div>

        )
    }

    //handle for popup
    openUpdateGrammarFormPopupHandler = () => {
        this.state.isUpdateGrammarFormPopupOpen = true;
        this.setState(this.state);
    }

    closeUpdateGrammarFormPopupHandler = () => {
        this.state.isUpdateGrammarFormPopupOpen = false;
        this.setState(this.state);
    }

    openVerifyDeleteGrammarFormPopupHandler = () => {
        this.state.isVerifyDeleteGrammarFormPopupOpen = true;
        this.setState(this.state);
    }

    closeVerifyDeleteGrammarFormPopupHandler = () => {
        this.state.isVerifyDeleteGrammarFormPopupOpen = false;
        this.setState(this.state);
    }
    closeNotifyPopupHandler = () => {
        this.state.isNotifyPopupOpen = false;
        this.setState(this.state);
    }

    openNotifyPopupHandler = () => {
        this.state.isNotifyPopupOpen = true;
        this.setState(this.state);
    }

    closeNotifyPopupHandlerAndReload = () => {
        this.state.isNotifyPopupOpen = true;
        this.setState(this.state);
        window.location.reload();
    }

    //Handler for input change:
    changeUpdateGrammarFormTitleHandler = e => {
        this.state.GrammarForm_UpdateDTO.title = e.target.value;
        this.setState(this.state);
    }

    changeUpdateGrammarFormUsageHandler = e => {
        this.state.GrammarForm_UpdateDTO.usage = e.target.value;
        this.setState(this.state);
    }

    changeUpdateGrammarFormUsecaseHandler = e => {
        this.state.GrammarForm_UpdateDTO.useCase = e.target.value;
        this.setState(this.state);
    }

    changeUpdateGrammarFormHowHandler = e => {
        this.state.GrammarForm_UpdateDTO.how = e.target.value;
        this.setState(this.state);
    }

}

export default Admin_GrammarForm;