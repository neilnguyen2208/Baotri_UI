import React, { Component } from 'react';
import "./Admin_AddGrammarCategoryListItem.css"
import Popup from "reactjs-popup";
import CustomizePopup from "../../../components/CustomizePopup/CustomizePopup"
class Admin_AddGrammarCategoryListItem extends Component {
    render() {

        return (
            <div className="Admin_Add_Grammar_Category_List_Item" >
                <Popup modal trigger={
                    <div className="Admin_Add_Grammar_Category_List_Item_Port">
                        <div className="Admin_Add_Grammar_Category_List_Item_Name">
                            + Add sub category
                     </div>
                    </div>
                }>
                    <CustomizePopup title="ADD GRAMMAR SUB CATEGORY"></CustomizePopup>
                    <form className="Add_Grammar_Category_Form" onSubmit={this.handleSubmitUpdate} >
                        <div className="Simple_Label">Title:</div>
                        <input className="Simple_Changable_Text_Input" type="text" onchange={this.handleChangeDisplayName} />
                        <div className="Simple_Label">Description:</div>
                        <textarea className="Simple_Text_Area" rows="4" column="50" ></textarea>
                        <div>
                            <input className="Blue_Button" type="submit" value="Save changes"></input></div>
                    </form>

                </Popup>
            </div >
        )
    }
}

export default Admin_AddGrammarCategoryListItem;