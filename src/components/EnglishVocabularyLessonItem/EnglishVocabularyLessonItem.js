import React, {Component} from 'react';
import './EnglishVocabularyLessonItem.css';
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import history from '../history.js';
import logo from '../../resources/logo.png';

class EnglishVocabularyLessonItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const {title} = this.props.item;
        return (
            <button className = "EnglishVocabularyLessonItem" onClick={this.handleClick}>   
                <img src={logo}></img>             
                {title}
            </button>
        );
    }

    handleClick (event, category){
        // let toPath = "/vocabulary/" + this.props.item.id + "/"+ this.props.item.title;
        let toPath="/vocabulary/id/id";
        this.props.history.push(toPath);
    }
    
}

export default withRouter(EnglishVocabularyLessonItem);