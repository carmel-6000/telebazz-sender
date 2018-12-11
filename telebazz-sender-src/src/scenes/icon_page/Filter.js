import React, { Component } from 'react';
import './IconPage.css';

export class Filter extends Component {
    render() {
        return (
            <button class="dropdown-item" type="button" >
                <input
                    class="checkboxer"
                    onChange={this.props.filterCategory}
                    id={this.props.category}
                    type="checkbox"
                />
                <label>
                    {this.props.category}
                </label>
            </button>
        );
    }
}

export default Filter;