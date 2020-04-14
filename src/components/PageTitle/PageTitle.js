import React, { Component } from 'react'
import "./PageTitle.css"
class PageTitle extends Component {
    render() {
        return (
            <div className="Page_Title">
                <tr className="page_title_layout">
                    <th>
                        <div className="Page_Prev_Title">
                            {this.props.prevTitle}
                        </div>
                    </th>
                    <th className="page_title_sub_layout">
                        <div className="Page_Main_Title">
                            {this.props.mainTitle}
                        </div>
                    </th>
                </tr>
            </div>
        )
    }
}
export default PageTitle;

//<span><b>{this.props.prevTitle}</b>{this.props.mainTitle}</span>
