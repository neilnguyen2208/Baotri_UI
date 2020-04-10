import React, { Component } from 'react';
import "./GrammarCategoryListItem.css"
class GrammarListCategoryItem extends Component {
    render() {
        return (
            <div class="GrammarCategoryListItem">
                <a className="Link" href="./">
                    <div></div>
                    <h4 class="Title">{this.props.item.name ? this.props.item.name : "Home"}</h4>
                </a>
            </div>
        )
    }
}

export default GrammarListCategoryItem;