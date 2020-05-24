import React, { Component } from 'react'
import "./PageTitle.css"
class PageTitle extends Component {
    render() {
        return (
            <div className="Page_Title">
                <div className="Page_Prev_Title">
                    {this.props.prevTitle}
                </div>
                <div className="Page_Main_Title">
                    {this.props.mainTitle}
                </div>
            </div>
        )
    }
}
export default PageTitle;

//<span><b>{this.props.prevTitle}</b>{this.props.mainTitle}</span>
