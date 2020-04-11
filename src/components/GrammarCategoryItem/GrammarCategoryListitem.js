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
        // let { path, url } = useRouteMatch();
        return (
            <div>
                <a className="grammar_category_list_item" href="/grammar/grammar_detail">
                    {/* <Link className="grammar_category_list_item"  to="/grammar/grammar_detail"> */}
                    <div className="decoration_headline"></div>
                    <div className="decoration_left_right_border"></div>
                    <div className="decoration_line"></div>
                    <div class="grammar_category_list_item_name">{this.props.item.name}</div>
                    {/* </Link> */}
                </a>
                {/* <Switch>
                    {/* <Route exact path="{path}">
                        <Grammar/>
                    </Route> */}
                {/* <Switch>
                    {/* <Router path={`/grammar`}>
                        <Grammar />
                    </Router> */}
                {/* <Route path={`/grammar/grammar_detail`}>
                        <GrammarDetail />
                    </Route> */}
                {/* </Switch> */}
            </div>
        )
    }
}

export default GrammarListCategoryItem;