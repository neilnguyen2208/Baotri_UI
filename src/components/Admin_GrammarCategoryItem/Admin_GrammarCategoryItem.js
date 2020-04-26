import React, { Component } from 'react';
import "./Admin_GrammarCategoryItem.css"
import Admin_GrammarCategoryListItem from "./Admin_GrammarCategoryListitem.js"
class Admin_GrammarCategoryItem extends Component {

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
                    <Admin_GrammarCategoryListItem item={item}></Admin_GrammarCategoryListItem>
                </div>
            );
        })
        return (
            <div className="Admin_Grammar_Category_Item">
                <div className="decoration_above_line"></div>
                <div className="Item_Name">{this.props.item.name}</div>
                <div className="Sub_Items">{cards}</div>
                <div className="decoration_below_border"></div>
                <div className="decoration_below_line"></div>
            </div>
        );
    }

}

export default Admin_GrammarCategoryItem;