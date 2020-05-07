import React, { Component } from 'react';
import "./GrammarFormDetail.css"
import GrammarForm from "../GrammarForm/GrammarForm"
import GrammarFormExample from "../GrammarFormExample/GrammarFormExample"
import GrammarFormNote from "../GrammarFormNote/GrammarFormNote"
class GrammarFormDetail extends Component {
    render() {
        let grammarDetailExampleList = this.props.example_list.map((example_item) =>
            <GrammarFormExample example_image_url={example_item.imageURL} example_content={
                example_item.content}></GrammarFormExample>
        );
        let grammarDetailNoteList = this.props.note_list.map((note_item) =>
            <GrammarFormNote noteContent={note_item.content}></GrammarFormNote>
        );
        return (
            <div >
                <div className="Grammar_Form_Detail">
                    {grammarDetailExampleList}
                    {grammarDetailNoteList}

                    <GrammarForm formTitle={this.props.title} useCase={this.props.useCase} usage={this.props.usage} how={this.props.how} />
                </div>
            </div>
        )
    }
}

export default GrammarFormDetail;