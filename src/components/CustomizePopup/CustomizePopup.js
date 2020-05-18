import React, { Component } from 'react'
import './CustomizePopup.css'
import delete_btn from '../../resources/delete_btn.png'

class CustomizePopup extends Component {

    render() {
        return (
            <div className="Customize_Popup">
                <div className="Popup_Title_Bar">
                    <div className="Popup_Title">{this.props.title} </div>
                    <img className="Delete_Btn" src={delete_btn} onClick={this.deleteHandler} />
                </div>
            </div>
        );
    }
}

export default CustomizePopup;