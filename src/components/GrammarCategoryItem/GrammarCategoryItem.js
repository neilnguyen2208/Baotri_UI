import React, { Component } from 'react';
import "./GrammarCategoryItem.css"
import GrammarCategoryListItem from "./GrammarCategoryListitem.js"
class GrammarCategoryItem extends Component {

    constructor(listOfGrammarItem) {
        super();
        this.state = {
            items: [{
                name: "Comparative",
                link_to: "grammar_detail"
            },
            {
                name: "Superative",
                link_to: "grammar_detail"
            },
            {
                name: "Order",
                link_to: "grammar_detail"
            }
            ]
        }
    }

    render() {
        let cards = this.state.items.map((item) => {
            return (
                <div className="Item">
                    <GrammarCategoryListItem item={item}></GrammarCategoryListItem>
                </div>
            );
        })
        return (
            <div className="category_item">
                <div className="decoration_above_line"></div>
                <div className="category_item_name">{this.props.item.name}</div>
                <div className="category_item_sub_item">{cards}</div>
                <div className="decoration_below_border"></div>
                <div className="decoration_below_line"></div>
            </div>
        );
    }

}

export default GrammarCategoryItem;