import React, {Component} from 'react';
import './NewVocabularyClass.css';
import delete_btn from '../../../../resources/delete_btn.png';
class NewVocabularyClass extends Component {
    constructor(props) {
        super(props);        
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleImageURLChange = this.handleImageURLChange.bind(this);
        this.state = {
            item: {
                id: this.props.newClass ? this.props.newClass.id : 1,
                title: this.props.newClass ? this.props.newClass.title : "",
                imageURL: this.props.newClass ? this.props.newClass.imageURL : "" 
            }
        }
    }
    render() {
        let newClass = this.props.newClass;
        return(
            <div className="NewVocabularyClass">
                <div className="NewVocabularyClassInner">
                <div className="Popup_Title_Bar">
                        <div className="Popup_Title">{newClass? "EDIT VOCABULARY CLASS" :"ADD NEW VOCABULARY CLASS"}</div>
                        <img className="Delete_Btn" src={delete_btn} onClick={this.props.closePopup} />
                    </div>
                    <input className="Name" type="text" onChange={this.handleNameChange} placeholder="Name " defaultValue={newClass ? newClass.title : ""}></input>
                    <input className="ImageURL" type="text" onChange={this.handleImageURLChange} placeholder="Image URL" defaultValue={newClass ? newClass.imageURL : ""}></input>
                    <button className="Save" onClick={ newClass ? ()=>this.props.handleEdit(this.state.item) : () =>this.props.handleSave(this.state.item)}>Save</button>
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
