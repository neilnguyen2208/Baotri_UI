import React, { Component } from 'react';
import "./GrammarCategoryItem.css"
import GrammarCategoryListItem from "./GrammarCategoryListitem.js"
class GrammarCategoryItem extends Component {

    constructor(listOfGrammarItem) {
        super();

        this.state = {
            items: [{
                name: "Adjective",
            },
            {
               name: "Verb",
            }
            ]
        }

    }

    render() {
        let cards = this.state.items.map((item)=>{
            return(
               <div className="Item">
                   <GrammarCategoryListItem item={item}></GrammarCategoryListItem> 
            </div>
            );
        })
        return (
            <div className="category_item">
                {cards}
            </div>
        );
    }

}

export default GrammarCategoryItem;