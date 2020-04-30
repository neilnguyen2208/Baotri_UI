import React, { Component } from 'react';
import "./Admin_GrammarCategoryListItem.css"
import EditDeleteBtnGroup from '../../../components/EditDeleteBtnGroup/EditDeleteBtnGroup'

class Admin_GrammarCategoryListItem extends Component {
    render() {

        return (
            <div className="Admin_Grammar_Category_List_Item" >
                <a class="Admin_Grammar_Category_List_Item_Name" href="admin/grammar/:id">{this.props.item.name}</a>
                <div className="Admin_Grammar_Category_List_Item_Edit_Delete_Port">
                    <EditDeleteBtnGroup ></EditDeleteBtnGroup>
                </div>
            </div >
        )
    }
}

export default Admin_GrammarCategoryListItem;