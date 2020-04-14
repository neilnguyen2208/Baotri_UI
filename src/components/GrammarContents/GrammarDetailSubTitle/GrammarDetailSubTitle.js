import React, { Component } from 'react';
import "./GrammarDetailSubTitle.css"
class GrammarDetailSubTitle extends Component {

    render() {

        return (
            <div className="category_item">
                <div className="decoration_above_line"></div>
                <div className="category_item_name">{this.props.name}</div>
                <div className="decoration_below_border"></div>
                <div className="decoration_below_line"></div>
            </div>
        );
    }

}

export default GrammarDetailSubTitle;