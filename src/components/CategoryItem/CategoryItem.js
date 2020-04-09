import React, {Component} from 'react'
import './CategoryItem.css'
import vocabularyIcon from '../../resources/vocabulary_icon.png'

class CategoryItem extends Component{
    constructor(props){
        super(props);
    }

    render() {
        return (
            <div className = "CategoryItem">
                <a className="Link" href = "./">
                    <i className = "Icon">
                        <img className="Icon_Image" src={vocabularyIcon}></img>
                    </i>
                    <h4 className="Title">{this.props.item.name ? this.props.item.name : "Home"}</h4>
                </a>
                <p className="Description">
                    {this.props.item.description ? this.props.item.description : "Description"}
                </p>
            </div>
        );
    }
}

export default CategoryItem;