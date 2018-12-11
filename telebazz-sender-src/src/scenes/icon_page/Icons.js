import React, { Component } from 'react';
import './IconPage.css';
import iconsObj from './iconsObj';
import { Icon } from './Icon';

export class Icons extends Component {
    checkCategoryFilter() {
        if (this.props.categoryFilter.length === 0) {
            return (
                Object.keys(iconsObj).map(
                    (category) => iconsObj[category].map(
                        (icon) =>
                            <Icon
                                iconimage={icon}
                                category={category}
                                setIcon={() => this.props.setIcon(icon)}
                                savenewicon={() => this.props.savenewicon()}
                            />
                    )
                )
            );
        } else {
            return (
                this.props.categoryFilter.map(
                    (category) => iconsObj[category].map(
                        (icon) =>
                            <Icon
                                iconimage={icon}
                                category={category}
                                setIcon={() => this.props.setIcon(category.iconimage)}
                                savenewicon={() => this.props.savenewicon()}
                            />
                    )
                )
            );
        }
    }

    render() {
        return (
            <div>
                {this.checkCategoryFilter()}
            </div>
        );
    }
}

export default Icons;