import React, {Component} from 'react';
import './EnglishWordItem.css';
import { withRouter } from 'react-router-dom';
import speaker from '../../resources/speaker.svg';

class EnglishWordItem extends Component {
    constructor(props) {
        super(props);
        this.url = this.props.item.spellingAudioURL;
        this.audio = this.props.audio;
        this.isPlayingAudio = false;
    }

    render() {
        const item = this.props.item;
        return (
            <div className="EnglishWordItem">
                <div className="LeftSide">
                    <div className="Name">
                        {item.content}
                    </div>
                    <div className="Pronunciation_Sound">
                        <div className="Pronunciation">
                            {item.spelling}
                        </div>
                        <button className="Sound" onClick={this.handlePlaySound.bind(this)}>
                        </button>
                    </div>
                </div>
                <div className="RightSide">
                    {item.description}
                </div>
            </div>
        )
    }
    handlePlaySound(){
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

export default withRouter(EnglishWordItem);