import React, { Component } from 'react';
import "./GrammarCategoryItem.css"
import GrammarCategoryListItem from "./GrammarCategoryListitem.js"
class GrammarCategoryItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            listGrammars: [
                {
                    
                }
            ]

        }
    }

    componentDidMount() {
        this.fetchGrammarCategoryList();
    }

    fetchGrammarCategoryList() {
        fetch('https://private-anon-58bcdf7810-englishlearndevteam.apiary-mock.com/api/v1/grammar/categories/id')
            .then(listGrammars => listGrammars.json())
            .then((listGrammars) => {
                this.setState({ listGrammars: listGrammars })
            })
            .catch(console.log)
    }

    render() {
        let cards = this.state.listGrammars.map((subItem) => {
            return (
                <GrammarCategoryListItem item={subItem}></GrammarCategoryListItem>
            );
        })
        return (
            <div className="Grammar_Category_Item">
                <div className="Grammar_Category_Item_Name">{this.props.item.name}</div>
                <div className="Grammar_Category_Item_Sub_Items">{cards}</div>
            </div>
        );
    }

}

export default GrammarCategoryItem;