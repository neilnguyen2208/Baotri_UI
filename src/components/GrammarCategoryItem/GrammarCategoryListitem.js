import React, { Component } from 'react';
import "./GrammarCategoryListItem.css"

class   GrammarListCategoryItem extends Component {

    render() {
        let detailUrl = "/grammar/" + this.props.item.grammarID;
        return (
            <div className="Grammar_Category_List_Item" onClick={(e) => {
                // e.stopPropagation();              
                document.location.href = detailUrl;
            }}>
                <div class="Grammar_Category_List_Item_Name">{this.props.item.grammarTitle}</div>
                {/* hint: his.props.item.grammarDescription */}
            </div >
        )
    }
}

export default GrammarListCategoryItem;