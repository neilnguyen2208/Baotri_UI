import React, { Component } from 'react'
import PropTypes from 'prop-types'
import "./Background.css"

class Background extends Component {
    render() {
        return (
            <div className="background_rectangle" height={this.props.height}>
                {this.props.height}
            </div>
        );
    }
}
export default Background;
