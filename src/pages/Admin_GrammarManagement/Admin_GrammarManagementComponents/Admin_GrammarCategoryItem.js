import React, { Component } from 'react';
import "./Admin_GrammarCategoryItem.css"
import Admin_GrammarCategoryListItem from "./Admin_GrammarCategoryListItem.js"
import Admin_AddGrammarCategoryListItem from "./Admin_AddGrammarCategoryListItem.js"
import edit_btn from "../../../resources/edit_btn.png"
import delete_btn from "../../../resources/delete_btn.png"
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
        let grammarItemLists = this.state.items.map((item) => {
            return (
                <div className="Item">
                    <Admin_GrammarCategoryListItem item={item}></Admin_GrammarCategoryListItem>
                </div>
            );
        })
        return (
            <div className="Admin_Grammar_Category_Item">
                <div className="Admin_Grammar_Category_Item_Name_Manage_Port">
                    <div className="Admin_Grammar_Category_Item_Name">{this.props.item.name}</div>
                    <div className="Edit_Delete_Btn_Group">
                        <img className="Edit_Btn" src={edit_btn} />
                        <img className="Delete_Btn" src={delete_btn} />
                    </div>
                </div>
                {grammarItemLists}
                <Admin_AddGrammarCategoryListItem></Admin_AddGrammarCategoryListItem>
            </div>
        );
    }

}

export default Admin_GrammarCategoryItem;