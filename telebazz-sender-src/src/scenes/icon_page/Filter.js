import React, { Component } from 'react';
import './IconPage.css';

export class Filter extends Component {
    render() {
        return (
            <div className="custom-control custom-checkbox dropdown-item">
                <input
                    type="checkbox"
                    className="custom-control-input"
                    onChange={this.props.filterCategory}
                    id={this.props.category}
                />
                <label
                    className="custom-control-label pull-right"
                    for={this.props.category}>
                    <p className="icon-name" for={this.props.category}>
                        {this.props.category}
                    </p>
                </label>
            </div>
            
            // <div className="dropdown-item">
            //     <input
            //         className="checkboxer"
            //         onChange={this.props.filterCategory}
            //         id={this.props.category}
            //         type="checkbox"
            //     />
            //     <label for={this.props.category}>
            //         {this.props.category}
            //     </label>
            // </div>
        );
    }
}

export default Filter;