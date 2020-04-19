import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import './EnglishVocabularyLessonDetail.css';

class EnglishVocabularyLessonDetail extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="EnglishVocabularyLessonDetail">
                EnglishVocabularyLessonDetail
            </div>
        )
    }
}

export default withRouter(EnglishVocabularyLessonDetail);