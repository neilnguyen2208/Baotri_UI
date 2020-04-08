import React, {Component} from 'react'
import './CategoryItem.css'
import '../../../node_modules/font-awesome/css/font-awesome.min.css'

class CategoryItem extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div class = "CategoryItem">
                <a className="Link" href = "./">
                    <i className = "fas fa-book-open Icon"></i>
                    <h4 class="Title">{this.props.item.name ? this.props.item.name : "Home"}</h4>
                </a>
                <p className="Description">
                    {this.props.item.description ? this.props.item.description : "Description"}
                </p>
            </div>
        );
    }
}

export default CategoryItem;