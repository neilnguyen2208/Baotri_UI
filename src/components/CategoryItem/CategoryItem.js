import React, {Component} from 'react'
import './CategoryItem.css'
import vocabularyIcon from '../../resources/vocabulary_icon.png'

class CategoryItem extends Component{
    constructor(props){
        super(props);
    }

    render() {
        const {item} = this.props;
        return (
            <div className = "CategoryItem">
                <a className="Link" href = {item.src}>
                    <i className = "Icon">
                        <img className="Icon_Image" src={vocabularyIcon}></img>
                    </i>
                    <h4 className="Title">{item.name ? item.name : "Home"}</h4>
                </a>
                <p className="Description">
                    {item.description ? item.description : "Description"}
                </p>
            </div>
        );
    }
}

export default CategoryItem;