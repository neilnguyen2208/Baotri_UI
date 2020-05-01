import React, { Component } from 'react'
import "./Admin_GrammarDetailTitle.css"
class Admin_GrammarDetailTitle extends Component {
    render() {
        return (
            <div className="Grammar_Detail_Title">
                <div className="Title">{this.props.name}</div>
                <div className="grammar_detail_title_background"></div>
            </div>
        )
    }
}
export default Admin_GrammarDetailTitle;
