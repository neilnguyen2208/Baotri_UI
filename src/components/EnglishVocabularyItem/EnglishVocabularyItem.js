import React, {Component} from 'react'
import './EnglishVocabularyItem.css'
import { BrowserRouter as Router, Link, Switch, Route, Redirect, useHistory } from "react-router-dom";
import history from '../history.js'

class EnglishVocabularyItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const {name} = this.props.item;
        return (
            <button className = "EnglishVocabularyItem" onClick={this.handleClick}>                
                {name}
            </button>
        );
    }

    handleClick (event, category){
        history.push("/home");
        window.location.reload();
        console.log(this.props);
    }
    
}

export default EnglishVocabularyItem;