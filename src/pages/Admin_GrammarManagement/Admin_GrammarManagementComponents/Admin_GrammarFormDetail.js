import React, { Component, Fragment } from 'react';
import "./Admin_GrammarFormDetail.css"
import Admin_GrammarForm from "./Admin_GrammarForm"
import Admin_GrammarFormExample from "./Admin_GrammarFormExample"
import Admin_GrammarFormNote from "./Admin_GrammarFormNote"
import Popup from 'reactjs-popup'
import delete_btn from '../../../resources/delete_btn.png'
import edit_btn from '../../../resources/edit_btn.png'
//Chứa grammar form và note, example của form, thực hiện thao tác thêm note và example: 
//fatal: post lên rồi mới close.
class Admin_GrammarFormDetail extends Component {

    constructor(props) {
        super(props);
        this.notifyContent = "";
        this.state = {
            GrammarExamples_PutDTO: [
                {
                    "id": null,
                    "content": "",
                    "imageURL": ""
                }
            ],
            GrammarExample_CreateDTO: {
                "id": null,
                "content": "",
                "imageURL": ""
            },
            GrammarExample_UpdateDTO: {
                "content": "",
                "imageURL": ""
            },
            GrammarNotes_PutDTO: this.props.note_list,
            GrammarNote_CreateDTO: {
                "id": null,
                "content": ""
            },
            "isAddGrammarExamplePopupOpen": false,
            "isAddGrammarNotePopupOpen": false,
            "isNotifyPopUpOpen": false
        }
    }

    componentDidMount() {
        this.state.GrammarExamples_PutDTO = this.props.example_list;
        this.state.GrammarNotes_PutDTO = this.props.note_list;
        this.setState(this.state);
    }

    addGrammarExample = e => {
        //push example to the list
        e.preventDefault();
        this.state.GrammarExamples_PutDTO.push(this.state.GrammarExample_CreateDTO);
        console.log(JSON.stringify(this.state.GrammarExamples_PutDTO));
        let requestFormID = parseInt(this.props.form_ID, 10);
        console.log(requestFormID);
        //get token to request to server
        let token = localStorage.getItem('token');

        fetch('/api/v1/grammarForms/' + requestFormID + '/examples',
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(this.state.GrammarExamples_PutDTO)
            }
        )
            .then(response => {
                console.log(response);
                if (response.status === 200 || response.status === 204) {
                    this.notifyContent = "Add grammar example success!";
                    this.openNotifyPopupHandler();
                    return;
                }
                this.notifyContent = "Add grammar example failed!";
                this.openNotifyPopupHandler();
            })
            .catch(error => {
                console.log(error);
            })


        // window.location.reload();
    }

    addGrammarNote = e => {
        //push note to the list
        e.preventDefault();
        this.state.GrammarNotes_PutDTO.push(this.state.GrammarNote_CreateDTO);
        console.log(JSON.stringify(this.state.GrammarNotes_PutDTO));

        let requestFormID = parseInt(this.props.form_ID, 10);
        console.log(requestFormID);
        //get token to request to server
        let token = localStorage.getItem('token');

        fetch('/api/v1/grammarForms/' + requestFormID + '/notes/',
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(this.state.GrammarNotes_PutDTO)
            }
        )
            .then(response => {
                console.log(response);
                if (response.status === 200 || response.status === 204) {
                    this.notifyContent = "Add grammar note success!";
                    this.openNotifyPopupHandler();
                    return;
                }
                this.notifyContent = "Add grammar note failed!";
                this.openNotifyPopupHandler();
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        //for rendering example list:
        // let grammarLog = this.props.example_list.map(t => console.log(t.id));

        let grammarDetailExampleList = this.props.example_list.map(example_item =>
            <Admin_GrammarFormExample
                key={example_item.id}
                example_form_ID={this.props.form_ID}
                example_image_url={example_item.imageURL}
                example_content={example_item.content}
                example_id={example_item.id}
                example_PutDTO={this.props.example_list}
            ></Admin_GrammarFormExample>
        );

        let grammarDetailNoteList = this.props.note_list.map((note_item) =>
            <Admin_GrammarFormNote
                key={note_item.id}
                note_content={note_item.content}
                note_id={note_item.id}
                note_form_ID={this.props.form_ID}
                note_PutDTO={this.props.note_list}
            >
            </Admin_GrammarFormNote>
        );

        return (
            <div>
                <div className="Admin_Grammar_Form_Detail">

                    {/* Render các công thức của một form: */}
                    <Admin_GrammarForm form_ID={this.props.form_ID} formTitle={this.props.title} useCase={this.props.useCase} usage={this.props.usage} how={this.props.how} ></Admin_GrammarForm>

                    {/* render các example của một form */}
                    {grammarDetailExampleList}
                    <div className="Height_10px_Border" />
                    {/* Popup for adding grammar example: */}
                    <Popup modal trigger={
                        <div className="Justify_Content_Space_Between_Border">
                            <input className="White_Button" type="button" value="+ Example"></input>
                        </div>
                    }
                        open={this.state.isAddGrammarExamplePopupOpen}
                        onOpen={this.openAddGrammarExamplePopupHandler}
                        closeOnDocumentClick={false}
                    >
                        <React.Fragment>
                            <div className="Customize_Popup">
                                <div className="Popup_Title_Bar">
                                    <div className="Popup_Title">ADD GRAMMAR EXAMPLE:</div>
                                    <img className="Delete_Btn" src={delete_btn} onClick={this.closeAddGrammarExamplePopupHandler} />
                                </div>
                            </div>
                            <form className="Popup_Form_Max_Size" onSubmit={this.addGrammarExample} >
                                <div className="Simple_Label">Example content:</div>
                                <input className="Simple_Changable_Text_Input" type="text" onChange={this.changeAddGrammarExampleContentHandler} />
                                <div className="Simple_Label">Example image url:</div>
                                <input className="Simple_Changable_Text_Input" type="text" onChange={this.changeAddGrammarExampleImageURLHandler} />
                                <div className="Height_10px" ></div>
                                <div className="Align_Center">
                                    <input className="Blue_Button" type="submit" value="Add Example"></input>
                                </div>
                                <div className="Height_10px" />
                            </form>
                        </React.Fragment>
                    </Popup>

                    <div className="Height_10px_Border" />

                    {/* render các note của form */}
                    {grammarDetailNoteList}

                    <div className="Height_10px_Border" />
                    {/* Popup for adding grammar note: */}
                    <Popup modal trigger={
                        <div className="Justify_Content_Space_Between_Border">
                            <input className="White_Button" type="button" value="+ Note"></input>
                        </div>
                    }
                        open={this.state.isAddGrammarNotePopupOpen}
                        onOpen={this.openAddGrammarNotePopupHandler}
                        closeOnDocumentClick={false}
                    >
                        <React.Fragment>
                            <div className="Customize_Popup">
                                <div className="Popup_Title_Bar">
                                    <div className="Popup_Title">ADD GRAMMAR NOTE:</div>
                                    <img className="Delete_Btn" src={delete_btn} onClick={this.closeAddGrammarNotePopupHandler} />
                                </div>
                            </div>
                            <form className="Popup_Form_Max_Size" onSubmit={this.addGrammarNote} >
                                <div className="Simple_Label">Note content:</div>
                                <input className="Simple_Changable_Text_Input" type="text" onChange={this.changeAddGrammarNoteContentHandler} />
                                <div className="Align_Center">
                                    <input className="Blue_Button" type="submit" value="Add Note"></input>
                                </div>
                                <div className="Height_10px_Border" />
                            </form>
                        </React.Fragment>
                    </Popup>
                </div>
                <div className="Height_10px" />

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

    //Add example area:
    //Handler input change for add example:
    changeAddGrammarExampleContentHandler = e => {
        this.state.GrammarExample_CreateDTO.content = e.target.value;
    }
    changeAddGrammarExampleImageURLHandler = e => {
        this.state.GrammarExample_CreateDTO.imageURL = e.target.value;
    }
    //Popup for add Example:
    openAddGrammarExamplePopupHandler = () => {
        this.state.isAddGrammarExamplePopupOpen = true;
        this.setState(this.state);
    }
    closeAddGrammarExamplePopupHandler = () => {
        this.state.isAddGrammarExamplePopupOpen = false;
        this.setState(this.state);
    }

    //Update example area:
    //Handler for input change for update example:
    changeUpdateGrammarExampleContentHandler = (e, id) => {
        this.state.GrammarExample_UpdateDTO.content = e.target.value;
        console.log(id);
        // this.state.GrammarExample_UpdateDTO.imageURL = this.state.GrammarExamples_PutDTO[id].imageURL;
        // console.log(this.state.GrammarExample_UpdateDTO);
        this.setState(this.state);
    }
    changeUpdateGrammarExampleImageURLHandler = (e, id) => {
        this.state.GrammarExample_UpdateDTO.imageURL = e.target.value;
        // this.state.GrammarExample_UpdateDTO.content = this.state.GrammarExamples_PutDTO[id].content;
        console.log(this.state.GrammarExample_UpdateDTO);
        this.setState(this.state);
    }

    //Popup for grammar update example:
    openUpdateGrammarExamplePopupHandler = (id) => {
        this.state.isUpdateGrammarExamplePopupOpen = true;
        this.state.GrammarExample_UpdateDTO = {
            "content": "",
            "imageURL": ""
        };
        this.setState(this.state);
    }
    closeUpdateGrammarExamplePopupHandler = () => {
        this.state.isUpdateGrammarExamplePopupOpen = false;
        this.state.GrammarExample_UpdateDTO = {
            "content": "",
            "imageURL": ""
        };
        this.setState(this.state);
    }

    //Delete example area:
    //Popup for grammar delete example:
    openVerifyDeleteGrammarExamplePopupHandler = () => {
        this.state.isVerifyDeleteGrammarExamplePopupOpen = true;
        this.setState(this.state);
    }
    closeVerifyDeleteGrammarExamplePopupHandler = () => {
        this.state.isVerifyDeleteGrammarExamplePopupOpen = false;
        this.setState(this.state);
    }

    //Add note area:
    //Handler input change for add note:
    changeAddGrammarNoteContentHandler = e => {
        this.state.GrammarNote_CreateDTO.content = e.target.value;
    }
    //Popup for add Note:
    openAddGrammarNotePopupHandler = () => {
        this.state.isAddGrammarNotePopupOpen = true;
        this.setState(this.state);
    }
    closeAddGrammarNotePopupHandler = () => {
        this.state.isAddGrammarNotePopupOpen = false;
        this.setState(this.state);
    }

    //Update note area:
    //Popup for update grammar note:
    openUpdateGrammarNotePopupHandler = () => {
        this.state.isUpdateGrammarNotePopupOpen = true;
        this.setState(this.state);
    }
    closeUpdateGrammarNotePopupHandler = () => {
        this.state.isUpdateGrammarNotePopupOpen = false;
        this.setState(this.state);
    }

    //Delete note area:
    //Popup for delete grammar note:
    openVerifyDeleteGrammarNotePopupHandler = () => {
        this.state.isVerifyDeleteNotePopupOpen = true;
        this.setState(this.state);
    }
    closeVerifyDeleteGrammarNotePopupHandler = () => {
        this.state.isVerifyDeleteNotePopupOpen = false;
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

export default Admin_GrammarFormDetail;