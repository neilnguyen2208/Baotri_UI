import React, {Component} from 'react';
import './AdminMenu.css';

class AdminMenu extends Component {
    render() {
        return (
            <div className="Menu">
                <div className="MenuItem">
                    <a href="./">Account Center</a>
                </div>
                <div className="MenuItem">
                    <a href='/admin/grammar'>Grammar Manager</a>
                </div>
                <div className="MenuItem">
                    <a href='/admin/vocabulary'>Vocabulary Manager</a>
                </div>
                <div className="MenuItem">
                    <a>Listening Manager</a>
                </div>
                <div className="MenuItem">
                    <a>User Manager</a>
                </div>
                <div className="MenuItem">
                    Chat Manager
                </div>
            </div>
    )
    }
}

export default AdminMenu;