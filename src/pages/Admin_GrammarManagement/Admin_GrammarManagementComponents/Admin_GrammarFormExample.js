import React, { Component } from 'react';
import "./Admin_GrammarFormExample.css"
import Popup from 'reactjs-popup'
import edit_btn from "../../../resources/edit_btn.png"
import delete_btn from "../../../resources/delete_btn.png"

class Admin_GrammarFormExample extends Component {

    constructor(props) {
        super(props);
        this.notifyContent = "";
        this.state = {
            GrammarExamples_PutDTO: this.props.example_PutDTO,
            GrammarExample_UpdateDTO: {
                "id": null,
                "content": "",
                "imageURL": ""
            },
            "isUpdateGrammarExamplePopupOpen": false,
            "isVerifyDeleteGrammarExamplePopupOpen": false,
            // "isUpdateGrammarNotePopupOpen": false,
            // "isVerifyDeleteNotePopupOpen": false
            "isNotifyPopupOpen": false
        }
    }

    componentDidMount() {
        this.state.GrammarExample_UpdateDTO.id = this.props.example_id;
        this.state.GrammarExample_UpdateDTO.content = this.props.example_content;
        this.state.GrammarExample_UpdateDTO.imageURL = this.props.example_image_url;
    }

    //update grammar example
    updateGrammarExample = (e) => {
        e.preventDefault();
        let token = sessionStorage.getItem('token');
        console.log(JSON.stringify(this.state.GrammarExamples_PutDTO))
        fetch('/api/v1/grammarForms/' + this.props.example_form_ID + '/examples', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(this.state.GrammarExamples_PutDTO)
        })
            .then(response => {
                console.log("Success: ");
                console.log(response);
                if (response.status === 200 || response.status === 204) {
                    this.notifyContent = "Update grammar example success!";
                    this.openNotifyPopupHandler();
                }
                else {
                    this.notifyContent = "Update grammar example failed!";
                    this.openNotifyPopupHandler();
                } // window.location.reload();
            })
            .catch(error => {

                console.log("Error:" + error);
            })
    }

    deleteGrammarExample = (e) => {
        e.preventDefault();
        let token = sessionStorage.getItem('token');

        console.log(JSON.stringify(this.state.GrammarExamples_PutDTO));
        for (var i = 0; i < this.state.GrammarExamples_PutDTO.length; i++) {
            if (this.state.GrammarExamples_PutDTO[i].id === this.props.example_id)
                this.state.GrammarExamples_PutDTO.splice(i, 1);
        }

        console.log(JSON.stringify(this.state.GrammarExamples_PutDTO));
        fetch('/api/v1/grammarForms/' + this.props.example_form_ID + '/examples', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },

            body: JSON.stringify(this.state.GrammarExamples_PutDTO)
        })
            .then(response => {
                console.log("Success: ");
                console.log(response);
                if (response.status === 200 || response.status === 204) {
                    this.notifyContent = "Delete grammar example success!";
                    this.openNotifyPopupHandler();
                }
                else {
                    this.notifyContent = "Delete grammar example failed!";
                    this.openNotifyPopupHandler();
                } // window.location.reload();
            })
            .catch(error => {
                console.log("Error:" + error);
            })
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
                                <input className="Simple_Changable_Text_Input" type="text" defaultValue={this.props.example_content} onChange={this.changeUpdateGrammarExampleContentHandler} />
                                <div className="Simple_Label">Example image url:</div>
                                <input className="Simple_Changable_Text_Input" type="text" defaultValue={this.props.example_image_url} onChange={this.changeUpdateGrammarExampleImageURLHandler} />
                                <div className="Height_10px" ></div>
                                <div className="Align_Center">
                                    <input className="Blue_Button" type="submit" value="Save"></input>
                                </div>
                                <div className="Height_10px" />
                            </form>
                        </React.Fragment>
                    </Popup>

                    {/* Popup for delete grammar example:*/}
                    <div className="Delete_Port">
                        <Popup modal trigger={
                            <img className="Delete_Btn" src={delete_btn} />}
                            open={this.state.isVerifyDeleteGrammarExamplePopupOpen}
                            onOpen={this.openVerifyDeleteGrammarExamplePopupHandler}
                            closeOnDocumentClick={false}
                        >
                            <React.Fragment>
                                <div className="Align_Center">
                                    <div className="Align_Right">
                                        <img className="Delete_Btn" src={delete_btn} onClick={this.closeVerifyDeleteGrammarCategoryPopup} />
                                    </div>
                                    <div className="Height_30px"></div>
                                    <div className="Simple_Label">  Do you want to delete this grammar example?</div>
                                    <div className="Height_30px"></div>
                                    <div className="Justify_Content_Space_Between">
                                        <button className="Blue_Button" onClick={this.deleteGrammarExample}>
                                            Verify
                                    </button>
                                        <button className="Red_Button" onClick={this.closeVerifyDeleteGrammarExamplePopupHandler}>
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

    //Handler for input change:
    changeUpdateGrammarExampleContentHandler = e => {
        this.state.GrammarExample_UpdateDTO.content = e.target.value;
        for (var i = 0; i < this.state.GrammarExamples_PutDTO.length; i++) {
            if (this.state.GrammarExamples_PutDTO[i].id === this.props.example_id) {
                this.state.GrammarExamples_PutDTO[i] = this.state.GrammarExample_UpdateDTO;
            }
        }
        // this.state.GrammarExample_CreateDTO.content = e.target.value;
    }
    changeUpdateGrammarExampleImageURLHandler = e => {
        // this.state.GrammarExample_CreateDTO.imageURL = e.target.value;
        this.state.GrammarExample_UpdateDTO.imageURL = e.target.value;
        for (var i = 0; i < this.state.GrammarExamples_PutDTO.length; i++) {
            if (this.state.GrammarExamples_PutDTO[i].id === this.props.example_id) {
                this.state.GrammarExamples_PutDTO[i] = this.state.GrammarExample_UpdateDTO;
            }
        }
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

export default Admin_GrammarFormExample;