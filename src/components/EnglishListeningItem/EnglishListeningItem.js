import React, {Component} from 'react'
import './EnglishListeningItem.css'
import { BrowserRouter as Router, Redirect, withRouter } from "react-router-dom";
import history from '../history.js'

class EnglishListeningItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const {title} = this.props.item;
        return (
            <button className = "EnglishListeningItem" onClick={this.handleClick}>                
                {title}
            </button>
        );
    }

    handleClick (event, category){
        let toPath = "/listening/" + this.props.item.id;
        console.log(toPath);
        this.props.history.push(toPath, {title: this.props.item.title});
    }
    
}

export default withRouter(EnglishListeningItem);