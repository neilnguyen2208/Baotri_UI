import React, { Component } from 'react'
import "./GrammarDetailTitle.css"
class GrammarDetailTitle extends Component {
    render() {
        return (
            <div className="page_title_bg">
                <div className="page_prev_title">{this.props.prevTitle}</div>
                <div className="page_title_rectangle"></div>
                <div className="page_main_title">{this.props.mainTitle}</div>
            </div>
            )
    }
}
export default GrammarDetailTitle;

//<span><b>{this.props.prevTitle}</b>{this.props.mainTitle}</span>
