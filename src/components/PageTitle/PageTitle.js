import React, { Component } from 'react'
import "./PageTitle.css"
class PageTitle extends Component {
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
export default PageTitle;

//<span><b>{this.props.prevTitle}</b>{this.props.mainTitle}</span>
