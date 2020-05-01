import React, { Component } from 'react';
import "./Admin_GrammarForm.css"
import "../../../components/EditDeleteBtnGroup/EditDeleteBtnGroup"
import EditDeleteBtnGroup from '../../../components/EditDeleteBtnGroup/EditDeleteBtnGroup';
class Admin_GrammarForm extends Component {
    render() {
        return (
            <div className="Admin_Grammar_Form">
                <div className="Admin_Grammar_Form_Port">
                    <div className="Admin_Grammar_Form_Title">{this.props.formTitle}</div>
                    <div className="Admin_Grammar_Form_Content">
                        <table className="admin_grammar_form_layout">
                            <tr>
                                <th className="Admin_Grammar_Form_UseCase">
                                    {this.props.useCase}
                                </th>
                                <th className="Admin_Grammar_Form_Usage">
                                    {this.props.usage}
                                </th>
                                <th className="Admin_Grammar_Form_How">
                                    {this.props.how}
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
                <div className="Admin_Grammar_Form_Btn_Group">
                    <EditDeleteBtnGroup></EditDeleteBtnGroup>
                </div>
            </div>
        )
    }
}

export default Admin_GrammarForm;