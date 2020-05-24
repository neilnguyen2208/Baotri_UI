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
        this.state = {
            GrammarExamples_PutDTO: [
                {
                    "id": "",
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
            "isUpdateGrammarExamplePopupOpen": false,
            "isVerifyDeleteGrammarExamplePopupOpen": false,
            "isAddGrammarNotePopupOpen": false,
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
        console.log(this.state.GrammarNotes_PutDTO === this.props.note_list);
        console.log(this.state.GrammarExamples_PutDTO);
        let requestFormID = this.props.form_ID;
        //get token to request to server
        let token = localStorage.token;

        fetch('/api/v1/grammarForms/' + requestFormID + '/examples',
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(this.state.GrammarExample_PutDTO)
            }
        ).then(response => {
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

        this.closeAddGrammarExamplePopupHandler();
        window.location.reload();
    }

    addGrammarNote = e => {
        //push note to the list
        e.preventDefault();
        this.state.GrammarNotes_PutDTO.push(this.state.GrammarNote_CreateDTO);
        this.setState(this.state);
        let requestFormID = this.props.form_ID;
        //get token to request to server
        let token = localStorage.token;

        fetch('/api/v1/grammarForms/' + requestFormID + '/notes',
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(this.state.GrammarNote_PutDTO)
            }
        ).then(response => {
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

        this.closeAddGrammarNotePopupHandler();
        window.location.reload();
    }

    updateGrammarExample = (e, id) => {

        //push note to the list
        e.preventDefault();
        this.setState(this.state);
        let requestFormID = this.props.form_ID;
        //get token to request to server
        let token = localStorage.token;

        //Update current item in PutDTO:
        // this.state.GrammarExamples_PutDTO[id].content = this.state.GrammarExample_UpdateDTO.content;
        // this.state.GrammarExamples_PutDTO[id].imageURL = this.state.GrammarExample_UpdateDTO.imageURL;

        fetch('/api/v1/grammarForms/' + requestFormID + '/examples',
            {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(this.state.GrammarExamples_PutDTO)
            }
        ).then(response => {
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

        this.closeUpdateGrammarExamplePopupHandler();
        // window.location.reload();
    }

    render() {
        //for rendering example list:
        // let grammarLog = this.props.example_list.map(t => console.log(t.id));

        let grammarDetailExampleList = this.props.example_list.map(example_item =>
            <div className="Admin_Grammar_Form_Example" key={example_item.id}>
                <div className="Admin_Grammar_Form_Example_Show_Port">
                    <div className="admin_decoration_example_text">For example:</div>
                    <div className="Admin_Grammar_Example_Image_Port">
                        <img className="Admin_Grammar_Example_Image" src={example_item.imageURL} />
                    </div>
                    <div className="Admin_Grammar_Example_Sentences">
                        <div dangerouslySetInnerHTML={{ __html: example_item.content }} />
                    </div>
                </div>
                <div className="Edit_Delete_Btn_Group" >

                    <Popup modal trigger={
                        <img className="Edit_Btn" src={edit_btn} />
                    }
                        open={this.state.isUpdateGrammarExamplePopupOpen}
                        onOpen={() => this.openUpdateGrammarExamplePopupHandler(example_item.id)}
                        closeOnDocumentClick={false}>
                        <React.Fragment>
                            <div className="Customize_Popup">
                                <div className="Popup_Title_Bar">
                                    <div className="Popup_Title">UPDATE EXAMPLE:</div>
                                    <img className="Delete_Btn" src={delete_btn} onClick={this.closeUpdateGrammarExamplePopupHandler} />
                                </div>
                            </div>
                            <form className="Popup_Form_Max_Size" onSubmit={(e) => this.updateGrammarExample(e, example_item.id)} >
                                <div className="Simple_Label">Example content:</div>
                                <input className="Simple_Changable_Text_Input" type="text" defaultValue={example_item.content} onChange={e => this.changeUpdateGrammarExampleContentHandler(e, example_item.id)} />
                                <div className="Simple_Label">Example image url:</div>
                                <input className="Simple_Changable_Text_Input" type="text" defaultValue={example_item.imageURL} onChange={e => this.changeUpdateGrammarExampleImageURLHandler(e, example_item.id)} />
                                <div className="Height_10px" ></div>
                                <div className="Align_Center">
                                    <input className="Blue_Button" type="submit" value="Save"></input>
                                </div>
                                <div className="Height_10px" />
                            </form>
                        </React.Fragment>
                    </Popup>
                    <img className="Delete_Btn" src={delete_btn} />
                </div>
            </div>
        );

        let grammarDetailNoteList = this.props.note_list.map((note_item) =>
            <Admin_GrammarFormNote key={note_item.id} noteContent={note_item.content}></Admin_GrammarFormNote>
        );

        return (
            <div>
                <div className="Admin_Grammar_Form_Detail">
                    <Admin_GrammarForm form_ID={this.props.form_ID} formTitle={this.props.title} useCase={this.props.useCase} usage={this.props.usage} how={this.props.how} ></Admin_GrammarForm>
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

}

export default Admin_GrammarFormDetail;