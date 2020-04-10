import React, {Component} from 'react'
import './EnglishVocabularyItem.css'

class EnglishVocabularyItem extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <button className = "EnglishVocabularyItem">
                {this.props.item.name}
            </button>
        );
    }
}

export default EnglishVocabularyItem;