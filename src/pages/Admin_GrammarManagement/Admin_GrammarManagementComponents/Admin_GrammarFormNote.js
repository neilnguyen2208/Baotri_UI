import React, { Component } from 'react';
import "./Admin_GrammarFormNote.css"
import "../../../components/EditDeleteBtnGroup/EditDeleteBtnGroup"
import EditDeleteBtnGroup from '../../../components/EditDeleteBtnGroup/EditDeleteBtnGroup';
class Admin_GrammarFormNote extends Component {
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
                            {this.props.noteContent}
                        </div>
                    </div>
                </div>
                <div className = "Admin_Grammar_Form_Note_Btn_Group">
                    <EditDeleteBtnGroup></EditDeleteBtnGroup>
                </div>
            </div>
        )
    }
}

export default Admin_GrammarFormNote;