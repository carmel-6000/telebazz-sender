import React, { Component } from 'react';
import './IconPage.css';
import iconsObj from './iconsObj';
import { Icon } from './Icon';

export class Icons extends Component {
    checkCategoryFilter() {
        let showIcons =
            (category) => iconsObj[category].map(
                (icon, i) =>
                    <Icon
                        key={i} //each child in an array or iterator should have a unique key prop
                        iconimage={icon}
                        category={category}
                        setIcon={() => this.props.setIcon(icon)}
                        saveNewIcon={() => this.props.saveNewIcon()}
                    />
            );

        if (this.props.categoryFilter.length === 0) {
            return (Object.keys(iconsObj).map(showIcons));
        } else {
            return (this.props.categoryFilter.map(showIcons));
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