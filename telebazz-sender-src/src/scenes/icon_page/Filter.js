import React, { Component } from 'react';
import './IconPage.css';

export class Filter extends Component {
    render() {
        return (
            <div class="dropdown-item">
                <input
                    class="checkboxer"
                    onChange={this.props.filterCategory}
                    id={this.props.category}
                    type="checkbox"
                />
                <label for={this.props.category}>
                    {this.props.category}
                </label>
            </div>
        );
    }
}

export default Filter;