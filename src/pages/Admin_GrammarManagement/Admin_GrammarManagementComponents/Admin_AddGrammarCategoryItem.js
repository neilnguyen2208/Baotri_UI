import React, { Component } from 'react';
import "./Admin_AddGrammarCategoryItem.css"
import CustomizePopup from "../../../components/CustomizePopup/CustomizePopup"
import Popup from "reactjs-popup";

class Admin_AddGrammarCategoryItem extends Component {
    render() {
        return (
            <div className="Admin_Add_Grammar_Category_Item">
                <Popup modal trigger={
                    <div className="Admin_Add_Grammar_Category_Item_Name">+ Add Grammar Category</div>
                }>
                    <CustomizePopup title="ADD GRAMMAR CATEGORY"></CustomizePopup>
                    <form className="Add_Grammar_Category_Form" onSubmit={this.handleSubmitUpdate} >
                        <div className="Simple_Label">Title:</div>
                        <input className="Simple_Changable_Text_Input" type="text" onchange={this.handleChangeDisplayName} />
                        <input className="Blue_Button" type="submit" value="Save changes"></input>
                    </form>

                </Popup>
            </div>
        );
    }
}

export default Admin_AddGrammarCategoryItem;