import React, { Component } from 'react';
import './IconPage.css';

//mobx 
import { observer } from 'mobx-react';

const languages = require('./../Languages.json');

@observer(['Settings'])
class Filter extends Component {
    
    filterCategory = (event) => {
        let checked = event.target.checked;
        let categoryID = event.target.id;
        let categoryFilter = this.props.categoryFilter;

        if (checked && !categoryFilter.includes(categoryID)) {
            this.props.updateCategoryFilter([...this.props.categoryFilter, categoryID]);
        } else {
            let currentIndex = categoryFilter.findIndex((element) => {
                return element === categoryID;
            });

            if (currentIndex < 0) {
                return;
            } else {
                let updatedCategoryFilter = this.props.categoryFilter;
                updatedCategoryFilter.splice(currentIndex, 1);
                this.props.updateCategoryFilter(updatedCategoryFilter);
            }
        }
        console.log("category: ", this.props.category);
    }

    checkedCategory = () => {
        if(this.props.categoryFilter.includes(this.props.category)){
            return true;
        } 
        return false;
    }

    render() {
        return (
            <div className="custom-control custom-checkbox dropdown-item">
                {this.checkedCategory() ?
                    <input
                        type="checkbox"
                        id={this.props.category}
                        className="custom-control-input"
                        onChange={this.filterCategory}
                        checked
                    />
                    : <input
                        type="checkbox"
                        id={this.props.category}
                        className="custom-control-input"
                        onChange={this.filterCategory}
                    />
                }
                <label
                    className="custom-control-label pull-right"
                    htmlFor={this.props.category}>
                    <p className="icon-name" htmlFor={this.props.category}>
                        {languages[this.props.Settings.language][this.props.category]}
                        {/* {this.props.category} */}
                    </p>
                </label>
            </div>
        );
    }
}

export default Filter;