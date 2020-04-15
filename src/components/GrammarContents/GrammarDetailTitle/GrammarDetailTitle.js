import React, { Component } from 'react'
import "./GrammarDetailTitle.css"
class GrammarDetailTitle extends Component {
    render() {
        return (
            <div className="Grammar_Detail_Title">
                <div className="Title">{this.props.name}</div>
                <div className="grammar_detail_title_background"></div>
            </div>
        )
    }
}
export default GrammarDetailTitle;

//<span><b>{this.props.prevTitle}</b>{this.props.mainTitle}</span>
