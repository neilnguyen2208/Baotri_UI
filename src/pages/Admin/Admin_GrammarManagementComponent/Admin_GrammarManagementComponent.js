import React, { Component } from 'react'
import './Admin_GrammarManagementComponent.css'
import Admin_AddGrammarCategoryItem from '../../../components/Admin_GrammarCategoryItem/Admin_AddGrammarCategoryItem';
import Admin_GrammarCategoryItem from '../../../components/Admin_GrammarCategoryItem/Admin_GrammarCategoryItem'

class Admin_GrammarManagementComponent extends Component {
    constructor(props) {
        super();
        this.state = {
            items: [{
                name: "ADJECTIVE",
            },
            {
                name: "VERB",
            },
            {
                name: "VERB",
            }]
        }
    }

    render() {
        let items;
        items = this.state.items.map((item) => {
            return (
                <Admin_GrammarCategoryItem item={item}></Admin_GrammarCategoryItem>
            );
        })

        return (
            <div className="Admin_GrammarManagementComponent">
                <Admin_AddGrammarCategoryItem></Admin_AddGrammarCategoryItem>
                {items}
            </div>
        );
    }

}

export default Admin_GrammarManagementComponent;