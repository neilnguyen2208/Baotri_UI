import React, {Component} from 'react'
import './VocabularyManagementItem.css'
import { BrowserRouter as Router, Redirect, withRouter } from "react-router-dom";
import history from '../history.js'

class VocabularyManagementItem extends Component{
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
        let toPath = "/vocabulary/" + this.props.item.id;
        console.log(toPath);
        this.props.history.push(toPath, {title: this.props.item.title});
    }
    
}

export default withRouter(VocabularyManagementItem);