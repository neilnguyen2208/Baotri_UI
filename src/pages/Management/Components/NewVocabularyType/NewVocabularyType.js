import React, {Component} from 'react';
import './NewVocabularyType.css';
class NewVocabularyType extends Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.state = {
            item: {
                id: 1,
                title:""
            }
        }
    }
    render() {
        return(
            <div className="NewVocabularyType">
                <div className="NewVocabularyTypeInner">
                    {this.props.type ? <label>Edit Vocabulary Type</label> : <label>Add New Vocabulary Type</label>}
                    <input className="Name" type="text" onChange={this.handleNameChange} placeholder="Name of new Vocabulary Category" defaultValue = {this.props.type!=null ? this.props.type.title :""}></input>
                    <button className="Save" onClick={this.props.type != null ? ()=> this.props.handleEdit(this.state.item) : () =>this.props.handleSave(this.state.item)}>Save</button>
                    <button className="Close" onClick={this.props.closePopup}>Close</button>
                </div>
            </div>
        )
    }

    handleNameChange(e) {
        this.setState(
            {
                item: { id: this.props.type ? this.props.type.id : this.state.item.id, 
                    title: e.target.value}
            }
        )
    }
}

export default NewVocabularyType;