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
class Admin_GrammarCategoryListItem extends Component {
    render() {

        return (
            <a className="Admin_Grammar_Category_List_Item" href="/grammar/grammar_detail">
                <div className="decoration_headline"></div>
                <div className="decoration_left_right_border"></div>
                <div className="decoration_line"></div>
                <div class="List_Item_Name">{this.props.item.name}</div>
            </a >


        )
    }
}

export default Admin_GrammarCategoryListItem;