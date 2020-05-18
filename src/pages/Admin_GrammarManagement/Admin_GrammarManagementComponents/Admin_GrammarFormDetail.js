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


        return (
            <div >
                <div className="Admin_Grammar_Form_Detail">
                    {grammarDetailExampleList}
                    {grammarDetailNoteList}
                    <Admin_GrammarForm formTitle={this.props.title} useCase={this.props.useCase} usage={this.props.usage} how={this.props.how} ></Admin_GrammarForm>
                </div>
            </div>
        )
    }
}

export default Admin_GrammarFormDetail;