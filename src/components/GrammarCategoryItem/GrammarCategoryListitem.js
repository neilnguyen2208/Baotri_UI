import React, { Component } from 'react';
import "./GrammarCategoryListItem.css"

class GrammarListCategoryItem extends Component {
    render() {
        let detailUrl = "/grammar/" + this.props.item.id;
        return (
            <div className="Grammar_Category_List_Item" onClick={(e) => {
                e.stopPropagation();              
                document.location.href = detailUrl;
            }}>
                <div class="Grammar_Category_List_Item_Name">{this.props.item.title}</div>
            </div >
        )
    }
}

export default GrammarListCategoryItem;