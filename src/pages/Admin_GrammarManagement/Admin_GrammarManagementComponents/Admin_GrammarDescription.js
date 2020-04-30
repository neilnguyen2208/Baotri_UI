import React, { Component } from 'react';
import "./Admin_GrammarDescription.css"
import "../../../components/EditDeleteBtnGroup/EditDeleteBtnGroup"
import EditDeleteBtnGroup from '../../../components/EditDeleteBtnGroup/EditDeleteBtnGroup';
class Admin_GrammarDescription extends React.Component {

    render() {
        return (
            // Không đặt là Description để các className khác không bị trùng.
            <div className="Description_Content" >
                {this.props.content}
                <EditDeleteBtnGroup />
            </div>
        );

    }
}

export default Admin_GrammarDescription;