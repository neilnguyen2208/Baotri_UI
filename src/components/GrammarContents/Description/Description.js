import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import "./Description.css"
class Description extends React.Component {

    render() {
        return (
            <div className="content" >
                {this.props.content}
            </div>
        );

    }
}

export default Description;