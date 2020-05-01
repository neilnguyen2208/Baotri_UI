import React, { Component } from 'react';
import "./GrammarFormNote.css"
class GrammarFormNote extends Component {
    render() {
        return (
            <div >
                <div className="grammar_note_headline_port">
                    <div className="grammar_note_decoration_headline"></div>
                </div>
                <div className="Grammar_Form_Note">
                    <div className="decoration_note_text">NOTE:</div>
                    <div className="Grammar_Note_Content">
                        {this.props.noteContent}
                    </div>
                </div>
            </div>
        )
    }
}

export default GrammarFormNote;