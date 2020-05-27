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

    render() {
        const {title} = this.props.item;
        return (
            <div className = "LessonManagementItem">
                <div className="Top_Control">
                        <button className="Edit" onClick = {() =>this.props.handleEdit(this.props.item)}></button>
                        <button className="Delete" onClick = {() => this.props.handleDelete(this.props.item)}></button>
                    </div>
                <button className = "Content" onClick={this.handleClick}>
                    <img src= {this.props.item.imageURL}></img>             
                    <div className = "Title">{title}</div>
                </button>
            </div>
        );
    }

    handleClick (event, category){
        let title = this.props.item.title.split(' ').join('');
        let toPath = "/admin/vocabLessons/" + this.props.item.id;
        // const toPath="/vocabulary/id/id";
        this.props.history.push(toPath, {title: this.props.item.title});
    }
    
}

export default withRouter(LessonManagementItem);