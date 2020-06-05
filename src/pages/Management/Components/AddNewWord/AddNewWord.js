import React, {Component} from 'react';
import './AddNewWord.css';
class AddNewWord extends Component {
    constructor(props) {
        super(props);
        this.handleContentChange = this.handleContentChange.bind(this);
        this.handleSpellingChange = this.handleSpellingChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleAudioURLChange = this.handleAudioURLChange.bind(this);
        this.state = {
            item: {
                id: 1,
                content: "",
                spelling: "",
                spellingAudioURL: "",
                description: "",
            }
        }
    }
    render() {
        let word = this.props.word;
        return(
            <div className="AddNewWord">
                <div className="AddNewWordInner">
                    {word?<label>Edit Word</label> : <label>Add New Word</label>}
                    <input className="Name" type="text" onChange={this.handleContentChange} placeholder="Word Name" defaultValue={word ? word.content:""}></input>
                    <input className="Pronounce" placeholder="Spelling" onChange={this.handleSpellingChange} defaultValue={word ? word.spelling:""}></input>
                    <input className="Soundfile" type="text" placeholder="Audio url" onChange={this.handleAudioURLChange} defaultValue ={word ? word.spellingAudioURL:""}></input>
                    <input className="Meaning" type="text" placeholder="Meaning" onChange={this.handleDescriptionChange} defaultValue={word ? word.description:""}></input>
                    <button className="Save" onClick={word ? ()=>this.props.handleEdit(this.state.item) : () =>this.props.handleSave(this.state.item)}>Save</button>
                    <button className="Close" onClick={this.props.closePopup}>Close</button>
                </div>
            </div>
        )
    }

    handleContentChange(e) {
        this.setState(
            {
                item: { id: this.state.item.id, content: e.target.value,
                    spelling: this.state.item.spelling,
                    spellingAudioURL: this.state.item.spellingAudioURL,
                    description: this.state.item.description
                }
            }
        )
    }

    handleSpellingChange (e) {
        this.setState(
            {
                item: { id: this.state.item.id, content: e.target.value,
                    spelling: this.state.item.spelling,
                    spellingAudioURL: this.state.item.spellingAudioURL,
                    description: this.state.item.description
                }
            }
        )
    }

    handleAudioURLChange (e) {
        this.setState(
            {
                item: { id: this.state.item.id, content: this.state.item.content,
                    spelling: this.state.item.spelling,
                    spellingAudioURL: e.target.value,
                    description: this.state.item.description
                }
            }
        )
    }

    handleDescriptionChange (e) {
        this.setState(
            { 
                item: { id: this.state.item.id, content: this.state.item.content,
                    spelling: this.state.item.spelling,
                    spellingAudioURL: this.state.item.spellingAudioURL,
                    description: e.target.value
                }
            }
        )
    }
}

export default AddNewWord;