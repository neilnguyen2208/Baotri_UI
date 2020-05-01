import React, { Component } from 'react';
import "./Admin_GrammarFormExample.css"
import "../../../components/EditDeleteBtnGroup/EditDeleteBtnGroup"
import EditDeleteBtnGroup from '../../../components/EditDeleteBtnGroup/EditDeleteBtnGroup';
class Admin_GrammarFormExample extends Component {
    render() {
        return (
            <div className="Admin_Grammar_Form_Example">
                <div className="Admin_Grammar_Form_Example_Show_Port">
                    <div className="admin_decoration_example_text">For example:</div>
                    <div className="Admin_Grammar_Example_Image_Port">
                        <div className="Admin_Grammar_Example_Image">
                            <img src={this.props.example_image_url} />
                        </div>
                    </div>
                    <div className="Admin_Grammar_Example_Sentences">
                        {this.props.example_content}
                    </div>
                </div>
                <div className = "Admin_Grammar_Example_Btn_Group">
                    <EditDeleteBtnGroup></EditDeleteBtnGroup>
                </div>
            </div>
        )
    }
}

export default Admin_GrammarFormExample;