import React, { Component } from 'react';
import "./Admin_GrammarCategoryItem.css"
// import Admin_AddGrammarCategoryListItem from "./Admin_AddGrammarCategoryListitem.js"
class Admin_AddGrammarCategoryItem extends Component {

    constructor(listOfGrammarItem) {
        super();
        this.state = {
           
        }
    }

    render() {
      
        return (
            <div className="Admin_Add_Grammar_Category_Item">
                <div className="decoration_above_line"></div>
                {/* <div className="Item_Name">{this.props.item.name}</div> */}
                +
                <div className="decoration_below_border"></div>
                <div className="decoration_below_line"></div>
            </div>
        );
    }

}

export default Admin_AddGrammarCategoryItem;