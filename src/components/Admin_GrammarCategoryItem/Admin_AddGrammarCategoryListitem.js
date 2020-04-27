import React, { Component } from 'react';
import "./Admin_AddGrammarCategoryListItem.css"
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
import EditDeleteBtnGroup from '../EditDeleteBtnGroup/EditDeleteBtnGroup.js'
class Admin_AddGrammarCategoryListItem extends Component {
    render() {

        return (
            <div className="Admin_Add_Grammar_Category_List_Item" >
                <div className="Admin_Add_Grammar_Category_List_Item_Port">
                    <div className="Admin_Add_Grammar_Category_List_Item_Name">
                        + Add sub category
                    </div>
                </div>
            </div >
        )
    }
}

export default Admin_AddGrammarCategoryListItem;