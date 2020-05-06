import React, { Component } from 'react';
import "./Admin_GrammarCategoryListItem.css"
import edit_btn from "../../../resources/edit_btn.png"
import delete_btn from "../../../resources/delete_btn.png"

class Admin_GrammarCategoryListItem extends Component {
    render() {

        return (
            <div className="Admin_Grammar_Category_List_Item" >
                <a class="Admin_Grammar_Category_List_Item_Name" href="/admin/grammar/:id">{this.props.item.name}</a>
                <div className="Edit_Delete_Btn_Group">
                    <img className="Edit_Btn" src={edit_btn} />
                    <img className="Delete_Btn" src={delete_btn} />
                </div>
            </div >
        )
    }
}

export default Admin_GrammarCategoryListItem;