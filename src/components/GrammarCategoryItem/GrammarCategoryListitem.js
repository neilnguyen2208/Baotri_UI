import React, { Component } from 'react';
import "./GrammarCategoryListItem.css"
class GrammarListCategoryItem extends Component {
    render() {
        return (
            <div>
                <a className="grammar_category_list_item" href="./#">
                    <div className="decoration_headline"></div>
                    <div className="decoration_left_right_border"></div>
                    <div className="decoration_line"></div>
                    <div class="grammar_category_list_item_name">{this.props.item.name}</div>
                    
                </a>
            </div>
        )
    }
}

export default GrammarListCategoryItem;