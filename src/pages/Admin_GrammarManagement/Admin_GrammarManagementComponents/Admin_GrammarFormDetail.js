import React, { Component } from 'react';
import "./Admin_GrammarFormDetail.css"
import Admin_GrammarForm from "./Admin_GrammarForm"
import Admin_GrammarFormExample from "./Admin_GrammarFormExample"
import Admin_GrammarFormNote from "./Admin_GrammarFormNote"

class Admin_GrammarFormDetail extends Component {
    render() {
        let grammarDetailExampleList = this.props.example_list.map((example_item) =>
            <Admin_GrammarFormExample example_image_url={example_item.imageURL} example_content={
                example_item.content}></Admin_GrammarFormExample>
        );
        let grammarDetailNoteList = this.props.note_list.map((note_item) =>
            <Admin_GrammarFormNote noteContent={note_item.content}></Admin_GrammarFormNote>
        );

        let grammarDetailFormList = this.props.form_list.map((form_item) =>
            <Admin_GrammarForm formTitle={form_item.title} useCase={form_item.usecase} usage={form_item.usage} how={form_item.how} ></Admin_GrammarForm>
        );

        return (
            <div >
                <div className="Admin_Grammar_Form_Detail">
                    {grammarDetailExampleList}
                    {grammarDetailNoteList}
                    {grammarDetailFormList}
                </div>
            </div>
        )
    }
}

export default Admin_GrammarFormDetail;