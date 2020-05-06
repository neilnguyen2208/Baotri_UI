import React, { Component } from 'react';
import "./Admin_GrammarDescription.css"
import edit_btn from "../../../resources/edit_btn.png"
import delete_btn from "../../../resources/delete_btn.png"

class Admin_GrammarDescription extends React.Component {

    render() {
        return (
            // Không đặt là Description để các className khác không bị trùng.
            <div className="Admin_Description_Content" >
                {this.props.content}
                <div className="Edit_Delete_Btn_Group">
                    <img className="Edit_Btn" src={edit_btn} />
                    <img className="Delete_Btn" src={delete_btn} />
                </div>
            </div>
        );

    }
}

export default Admin_GrammarDescription;