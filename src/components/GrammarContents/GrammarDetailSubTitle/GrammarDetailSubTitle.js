import React, { Component } from 'react';
import "./GrammarDetailSubTitle.css"
class GrammarDetailSubTitle extends Component {

    render() {

        return (
            <div className="Grammar_Detail_Sub_Title">
                <div className="decoration_above_line"></div>
                <div className="Title">{this.props.name}</div>
                
                {/* <div className="decoration_below_border"></div> */}
                {/* <div className="decoration_below_line"></div> */}
            </div>
        );
    }

}

export default GrammarDetailSubTitle;