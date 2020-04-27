import React, {Component} from 'react'
import './VocabularyManagementItem.css'
import { BrowserRouter as Router, Redirect, withRouter } from "react-router-dom";

class VocabularyManagementItem extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        const {title} = this.props.item;
        return (
            <div className = "ManagementItem">
                <div className="LeftSide">
                    <button className = "_Item" onClick={this.handleClick}>                
                        {title}
                    </button>
                </div>
                <div className="RightSide">
                    <button className="Edit"></button>
                    <button className="Delete"></button>
                </div>
            </div>
        );
    }

    handleClick (event, category){
        let toPath = "/admin/vocabulary/" + this.props.item.id;
        console.log(toPath);
        this.props.history.push(toPath, {title: this.props.item.title});
    }
    
}

export default withRouter(VocabularyManagementItem);