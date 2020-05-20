import React, {Component} from 'react';
import './LessonDetailManagementItem.css';
import { withRouter } from 'react-router-dom';

class LessonDetailManagementItem extends Component {
    constructor(props) {
        super(props);
        this.url = this.props.item.spellingAudioURL;
        this.audio = this.props.audio;
        this.isPlayingAudio = false;
        this.handlePlaySound = this.handlePlaySound.bind(this);
    }

    render() {
        const item = this.props.item;
        return (
            <div className="LessonDetailManagementItem">
                <div className="LeftSide">
                    <div className="Name">
                        {item.content}
                    </div>
                    <div className="Pronunciation_Sound">
                        <div className="Pronunciation">
                            {item.spelling}
                        </div>
                        <button className="Sound" onClick={this.handlePlaySound}>
                        </button>
                    </div>
                </div>
                <div className="RightSide">
                    <div className="Meaning">{item.description}</div>
                    <div className="Control">
                        <button className="Edit" onClick = {this.props.handleEdit(this,this.props.item)}></button>
                        <button className="Delete" onClick={this.props.handleDelete(this.props.item)}></button>
                    </div>
                </div>
            </div>
        )
    }
    handlePlaySound =()=>{
        this.audio.pause();
        if(this.audio.src == this.props.item.spellingAudioURL){
            if(this.audio.currentTime==0){
                this.audio.play();
            }
            else {
                this.audio.pause();
                this.audio.currentTime=0;
            }
            return;
        }
        this.audio.currentTime = 0;
        this.audio.src = this.url;
        this.audio.load();
        this.audio.play();
        this.isPlayingAudio = true;
    }

}

export default withRouter(LessonDetailManagementItem);