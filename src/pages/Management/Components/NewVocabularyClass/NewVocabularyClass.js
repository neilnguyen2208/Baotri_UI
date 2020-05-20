import React, {Component} from 'react';
import './NewVocabularyClass.css';
class NewVocabularyClass extends Component {
    constructor(props) {
        super(props);        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleImageURLChange = this.handleImageURLChange.bind(this);
        this.state = {
            item: {
                id: 1,
                title: "",
                imageURL: ""
            }
        }
    }
    render() {
        let newClass = this.props.newClass;
        return(
            <div className="NewVocabularyClass">
                <div className="NewVocabularyClassInner">
                    <label>Add New Class</label>
                    <input className="Name" type="text" onChange={this.handleNameChange} placeholder="Name " defaultValue={newClass ? newClass.title : ""}></input>
                    <input className="ImageURL" type="text" onChange={this.handleImageURLChange} placeholder="Image URL" defaultValue={newClass ? newClass.imageURL : ""}></input>
                    <button className="Save" onClick={ newClass ? ()=>this.props.handleEdit(this.state.item) : () =>this.props.handleSave(this.state.item)}>Save</button>
                    <button className="Close" onClick={this.props.closePopup}>Close</button>
                </div>
            </div>
        )
    }

    handleNameChange(e) {
        this.setState(
            {
                item: { id: this.state.item.id,
                title: e.target.value, 
                imageURL: this.state.item.imageURL}
            }
        )
    }

    handleImageURLChange(e) {
        this.setState(
            {
                item: { id: this.state.item.id, 
                title: this.state.item.title, 
                imageURL: e.target.value}
            }
        )
    }
    
}

export default NewVocabularyClass;
