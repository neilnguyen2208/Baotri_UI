import React, { Component } from 'react';
import "./GrammarFormExample.css"
class GrammarFormExample extends Component {
    render() {
        return (
            <div>
                <div className="Grammar_Form_Example">
                    <div className="decoration_example_text">For example:</div>
                    {/* <div className="Grammar_Example_Image_Port"> */}
                        <div className="Grammar_Example_Image">
                            <img  className="Grammar_Example_Image" src={this.props.example_image_url} />
                        </div>
                    {/* </div> */}
                    <div className="Grammar_Example_Sentences">
                        <div dangerouslySetInnerHTML={ {__html: this.props.example_content} } />
                    </div>
                </div>
            </div>
        )
    }
}

export default GrammarFormExample;