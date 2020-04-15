import React, { Component } from 'react';
import "./GrammarCategoryListItem.css"
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
class GrammarListCategoryItem extends Component {
    render() {

        return (
            <div>
                <a className="Grammar_Category_List_Item" href="/grammar/grammar_detail">
                    <div className="decoration_headline"></div>
                    <div className="decoration_left_right_border"></div>
                    <div className="decoration_line"></div>
                    <div class="Item_Name">{this.props.item.name}</div>

                </a>

            </div>
        )
    }
}

export default GrammarListCategoryItem;