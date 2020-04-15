import React, {Component} from 'react'
import './EnglishVocabularyItem.css'
import { BrowserRouter as Router, Link, Switch, Route, Redirect, useHistory, withRouter } from "react-router-dom";
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
        this.props.history.push("/home");
    }
    
}

export default withRouter(EnglishVocabularyItem);