import React, { Component } from 'react';
import "./Admin_GrammarForm.css"
import edit_btn from "../../../resources/edit_btn.png"
import delete_btn from "../../../resources/delete_btn.png"
class Admin_GrammarForm extends Component {
    render() {
        return (
            <div className="Admin_Grammar_Form">
                <div className="Admin_Grammar_Form_Port">
                    <div className="Admin_Grammar_Form_Title">{this.props.formTitle}</div>
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
                <div className="Admin_Grammar_Form_Btn_Group">
                    <img className="Admin_Grammar_Form_Edit_Btn" src={edit_btn} />
                    <img className="Admin_Grammar_Form_Delete_Btn" src={delete_btn} />
                </div>
            </div>
        )
    }
}

export default Admin_GrammarForm;