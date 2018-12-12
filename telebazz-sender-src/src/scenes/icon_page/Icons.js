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
                                saveNewIcon={() => this.props.saveNewIcon()}
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
                                saveNewIcon={() => this.props.saveNewIcon()}
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