import React, { Component } from 'react';
import "./Admin_AddGrammarCategoryItem.css"
// import Admin_AddGrammarCategoryListItem from "./Admin_AddGrammarCategoryListitem.js"
class Admin_AddGrammarCategoryItem extends Component {

    constructor(listOfGrammarItem) {
        super();

    }

    render() {

        return (
            <div className="Admin_Add_Grammar_Category_Item">
                <div className="decoration_above_line"></div>
                <div className="Add_Grammar_Category_Item_Port">
                    <div className="Add_Grammar_Category_Item_Name">+ Add Grammar Category</div>
                </div>
                <div className="decoration_below_border"></div>
                <div className="decoration_below_line"></div>
            </div>
        );
    }

}

export default Admin_AddGrammarCategoryItem;