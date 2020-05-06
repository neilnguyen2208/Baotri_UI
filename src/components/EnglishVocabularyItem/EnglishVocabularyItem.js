import React, {Component} from 'react'
import './EnglishVocabularyItem.css'
import { BrowserRouter as Router, Redirect, withRouter } from "react-router-dom";
import history from '../history.js'

class EnglishVocabularyItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);        
    }

    render() {
        const {title} = this.props.item;
        return (
            <button className = "EnglishVocabularyItem" onClick={this.handleClick}>                
                {title}
            </button>
        );
    }

    handleClick (event, category){
        let toPath = "/vocabCategories/" + this.props.item.id;
        console.log(toPath);
        this.props.history.push(toPath, {title: this.props.item.title, id: this.props.item.id});
    }
}

export default withRouter(EnglishVocabularyItem);