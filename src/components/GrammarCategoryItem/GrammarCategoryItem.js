import React, { Component } from 'react';
import "./GrammarCategoryItem.css"
import GrammarCategoryListItem from "./GrammarCategoryListitem.js"
class GrammarCategoryItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            item: {
                "id": "",
                "title": "",
                "description": "",
                "docGrammarContentSummary": [    
                    {

                    }             
                ]
            }
        }
    }

    componentDidMount() {
        this.state.item = this.props.item;
        this.setState(this.state);
    }

    render() {
        let cards = this.state.item.docGrammarContentSummary.map((contentSummary) => {
            return (
                <GrammarCategoryListItem item={contentSummary}></GrammarCategoryListItem>
            );
        })
        return (
            <div className="Grammar_Category_Item">
                <div className="Grammar_Category_Item_Name">{this.props.item.title}</div>
                <div className="Grammar_Category_Item_Sub_Items">{cards}</div>
            </div>
        );
    }

}

export default GrammarCategoryItem;