import React, { Component } from 'react';
import "./GrammarForm.css"
class GrammarForm extends Component {
    render() {
        return (
            <div >
                <div className="Grammar_Form">
                    <div className="Grammar_Form_Title">{this.props.formTitle}</div>
                    <div className="Grammar_Form_Content">
                        <table className = "grammar_form_layout">
                            <tr>
                                <th className = "Grammar_Form_UseCase">
                                    {this.props.useCase}
                                </th>
                                <th className = "Grammar_Form_Usage">
                                    {this.props.usage}
                                </th>
                                <th className = "Grammar_Form_How">
                                    {this.props.how}
                                </th>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
}

export default GrammarForm;