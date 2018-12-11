import React, { Component } from 'react';
import './IconPage.css';

export class Icon extends Component {
    render() {
        return (
            <button
                onClick={this.props.setIcon}
                id={this.props.category}
                type="button"
                class="btn btn-default iconButton" >

                <i class={"fas fa-" + this.props.iconimage + " fa-3x"}></i>
            </button>
        );
    }
}

export default Icon;