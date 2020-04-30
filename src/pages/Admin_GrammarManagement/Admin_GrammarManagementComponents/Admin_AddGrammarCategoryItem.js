import React, { Component } from 'react';
import "./Admin_AddGrammarCategoryItem.css"

class Admin_AddGrammarCategoryItem extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <div className="Admin_Add_Grammar_Category_Item">
                <div className="Admin_Add_Grammar_Category_Item_Name">+ Add Grammar Category</div>
            </div>
        );
    }

}

export default Admin_AddGrammarCategoryItem;