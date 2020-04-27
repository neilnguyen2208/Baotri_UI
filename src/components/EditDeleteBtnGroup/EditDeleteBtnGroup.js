import React, { Component } from 'react'
import "./EditDeleteBtnGroup.css"
import edit_btn from "../../resources/edit_btn.png"
import delete_btn from "../../resources/delete_btn.png"
class EditDeleteBtnGroup extends Component {
    render() {
        return (
            <div className="Root_Edit_Delete_Btn_Group">
                <img className="Root_Edit_Btn" src = {edit_btn}/>
                <img className="Root_Delete_Btn" src = {delete_btn} />
            </div>
        );
    }
}
export default EditDeleteBtnGroup;