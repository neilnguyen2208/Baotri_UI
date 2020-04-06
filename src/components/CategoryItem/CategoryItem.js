import React, {Component} from 'react'
import './CategoryItem.css'

class CategoryItem extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div class = "categoryitem">
                <a href = "./">
                    <i class = "fas fa-book-open"></i>
                    <h4 class="title">{this.props.item.name ? this.props.item.name : "Home"}</h4>
                </a>
                <p>
                    {this.props.item.description ? this.props.item.description : "Description"}
                </p>
            </div>
        );
    }
}

export default CategoryItem;