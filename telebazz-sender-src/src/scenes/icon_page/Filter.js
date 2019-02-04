import React, { Component } from 'react';
import './IconPage.css';

//mobx 
import { observer } from 'mobx-react';

const languages = require('./../Languages.json');

@observer(['Settings'])
class Filter extends Component {

    constructor(props){
        super(props);
        this.state = {
            checked: false
        }
    }

    filterCategory = (event) => {
        let checked = event.target.checked;
        let categoryID = event.target.id;
        let categoryFilter = this.props.categoryFilter;

        //need to check category
        if (checked && !categoryFilter.includes(categoryID)) {
            this.props.updateCategoryFilter([...this.props.categoryFilter, categoryID]);
            this.setState({checked: true});
        } else { //need to uncheck category
            let currentIndex = categoryFilter.findIndex((element) => {
                return element === categoryID;
            });

            if (currentIndex < 0) {
                this.setState({checked: true});
                return;
            } else {
                let updatedCategoryFilter = this.props.categoryFilter;
                updatedCategoryFilter.splice(currentIndex, 1);
                this.props.updateCategoryFilter(updatedCategoryFilter);
                this.setState({checked: false});
            }
        }
        console.log("category: ", this.props.category);
    }

    //checks if the category chosen is included in the array of checked categories
    checkedCategory = () => {
        if (this.props.categoryFilter.includes(this.props.category)) {
            return true;
        }
        return false;
    }

    render() {
        return (
            <div className="custom-control custom-checkbox dropdown-item">
                <input
                    type="checkbox"
                    id={this.props.category}
                    className="custom-control-input"
                    onChange={this.filterCategory}
                    //if the category is in the array of checked categories - true, else - put it's value from the state
                    checked={this.checkedCategory() || this.state.checked}
                />
                <label
                    className="custom-control-label pull-right"
                    htmlFor={this.props.category}>
                    <p className="icon-name" htmlFor={this.props.category}>
                        {languages[this.props.Settings.language][this.props.category]}
                    </p>
                </label>
            </div>
        );
    }
}

export default Filter;