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

        let grammarDetailFormList = this.props.form_list.map((form_item) =>
            <GrammarForm formTitle={form_item.title} useCase={form_item.usecase} usage={form_item.usage} how={form_item.how} ></GrammarForm>
        );

        return (
            <div >
                <div className="Grammar_Form_Detail">
                    {grammarDetailExampleList}
                    {grammarDetailNoteList}
                    {grammarDetailFormList}
                </div>
            </div>
        )
    }
}

export default GrammarFormDetail;