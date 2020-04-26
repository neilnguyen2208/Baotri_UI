import React, {Component} from 'react';
import './EnglishVocabularyLessonItem.css';
import { BrowserRouter as Router, withRouter, Redirect } from "react-router-dom";
import history from '../history.js';
import logo from '../../resources/logo.png';

class EnglishVocabularyLessonItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            isClicked: false
        }
    }

    async componentDidMount(){
        await fetch(window.location.pathname);

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
        let title = this.props.item.title.split(' ').join('');
        let toPath = decodeURI("/vocabulary/" + this.props.item.id + "/"+ title);
        // const toPath="/vocabulary/id/id";
        this.props.history.push(toPath, {title: this.props.item.title});
    }
    
}

export default withRouter(EnglishVocabularyLessonItem);