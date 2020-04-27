import React, { Component } from 'react';
import "./Admin_GrammarCategoryListItem.css"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";
import GrammarDetail from '../../pages/GrammarDetail/GrammarDetail';
import Home from '../../pages/Home/Home';
import Grammar from '../../pages/Grammar/Grammar';
import EditDeleteBtnGroup from '../../components/EditDeleteBtnGroup/EditDeleteBtnGroup.js'
class Admin_GrammarCategoryListItem extends Component {
    render() {

        return (
            <div className="Admin_Grammar_Category_List_Item" >
                <a class="Admin_Grammar_Category_List_Item_Name" href="/grammar/a">{this.props.item.name}</a>
                <div className="Admin_Grammar_Category_List_Item_Edit_Delete_Port">
                    <EditDeleteBtnGroup ></EditDeleteBtnGroup>
                </div>
            </div >
        )
    }
}

export default Admin_GrammarCategoryListItem;