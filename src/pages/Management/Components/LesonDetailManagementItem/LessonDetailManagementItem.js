import React, {Component} from 'react';
import './LessonDetailManagementItem.css';
import { withRouter } from 'react-router-dom';

class LessonDetailManagementItem extends Component {
    constructor(props) {
        super(props);
        this.url = this.props.item.sound;
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
                        {item.name}
                    </div>
                    <div className="Pronunciation_Sound">
                        <div className="Pronunciation">
                            {item.pronunciation}
                        </div>
                        <button className="Sound" onClick={this.handlePlaySound}>
                        </button>
                    </div>
                </div>
                <div className="RightSide">
                    {item.meaning}
                    <div className="Control">
                        <button className="Edit"></button>
                        <button className="Delete"></button>
                    </div>
                </div>
            </div>
        )
    }
    handlePlaySound =()=>{
        this.audio.pause();
        if(this.audio.src == this.props.item.sound){
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