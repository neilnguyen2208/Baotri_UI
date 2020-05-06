import React, {Component} from 'react';
import './LessonManagementItem.css';
import { BrowserRouter as Router, withRouter, Redirect } from "react-router-dom";
import logo from '../../../../resources/logo.png';

class LessonManagementItem extends Component{
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
            <button className = "LessonManagementItem" onClick={this.handleClick}>
                <div className="Top_Control">
                    <button className="Edit"></button>
                    <button className="Delete"></button>
                </div>
                <img src= {this.props.item.imageURL}></img>             
                {title}
            </button>
        );
    }

    handleClick (event, category){
        let title = this.props.item.title.split(' ').join('');
        let toPath = decodeURI("/admin/vocabLessons/" + this.props.item.id);
        // const toPath="/vocabulary/id/id";
        this.props.history.push(toPath, {title: this.props.item.title});
    }
    
}

export default withRouter(LessonManagementItem);