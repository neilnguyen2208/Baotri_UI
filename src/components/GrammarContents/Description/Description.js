import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import "./Description.css"
class Description extends React.Component {

    render() {
        return (
            // Không đặt là Description để các className khác không bị trùng.
            <div className="Description_Content" >            
                    {this.props.content}
            </div>
        );

    }
}

export default Description;