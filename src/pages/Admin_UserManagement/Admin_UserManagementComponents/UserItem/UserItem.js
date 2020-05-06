import React, { Component, history } from 'react'
import './UserItem.css'
import edit_btn from "../../../../resources/edit_btn.png"
import delete_btn from "../../../../resources/delete_btn.png"

class UserItem extends Component {
    constructor(props) {
        super();
        this.state = {

        }
    }

    handleEditUser = (e) => {
        e.stopPropagation();
        document.location.href = "/admin/user/id";
    }

    handleBanUser = (e) => {
        e.stopPropagation();
        console.log('delete');
    }

    handleClickUserItem = (e) => {
        document.location.href = "/admin/user/id";
    }

    render() {

        return (
            <div className="User_Item" onClick={this.handleClickUserItem}>
                <div className="User_Item_Left_Port">
                    <div className="User_Item_Avatar_Port">
                        <img className="User_Item_Avatar" src={this.props.avatar_url}></img>
                    </div>
                    <div className="User_Item_User_Name_Gmail_Port">
                        <div className="User_Item_Display_User_Name">
                            <div className="User_Item_Display_Name">
                                {this.props.display_name}
                            </div>
                            <div className="User_Item_User_Name">
                                ({this.props.user_name})
                            </div>
                        </div>
                        <div className="User_Item_Gmail">
                            {this.props.gmail}
                        </div>
                    </div>
                </div>
                <div className="Edit_Delete_Btn_Group">
                    <img className="Edit_Btn" src={edit_btn} onClick={this.handleEditUser} />
                    <img className="Delete_Btn" src={delete_btn} onClick={this.handleBanUser} />
                </div>
            </div>
        );
    }
}

export default UserItem;

