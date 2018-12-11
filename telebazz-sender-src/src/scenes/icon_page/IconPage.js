import React, { Component } from 'react';
import './IconPage.css';
import { Link } from 'react-router-dom';
import { NavBar } from '../new_message/NavBar.js';
import iconsObj from './iconsObj';
import { Filter } from './Filter';
import { Icons } from './Icons';

export class IconPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryFilter: [],
      chosenIcon: ""
    }

    this.filterCategory = this.filterCategory.bind(this);
    this.setIcon = this.setIcon.bind(this);
    this.savenewicon = this.savenewicon.bind(this);
  }

  filterCategory(event) {
    let checked = event.target.checked;
    let categoryID = event.target.id;

    if (checked === true && this.state.categoryFilter.includes(categoryID) === false) {
      this.setState({
        categoryFilter: [...this.state.categoryFilter, categoryID]
      })
    } else {
      let currentIndex = this.state.categoryFilter.findIndex(function (element) {
        return element === categoryID;
      });

      if (currentIndex < 0) {
        return;
      } else {
        let updatedCategoryFilter = this.state.categoryFilter;
        updatedCategoryFilter.splice(currentIndex, 1);
        this.setState({ categoryFilter: updatedCategoryFilter });
      }
    }
  }

  savenewicon() {
    const key = this.props.match.params.id ? "EditMessage" : "NewMessage"; 
    let currmessST = localStorage.getItem(key);
    let currmessOB = JSON.parse(currmessST);

    if (currmessOB == "")
      currmessOB = {};
    if (this.state.chosenIcon != "") {
      currmessOB.icon = this.state.chosenIcon;
    }

    localStorage.setItem(key, JSON.stringify(currmessOB));
    this.setIcon("");
    console.log("icon page" + localStorage.getItem(key)); 
  }

  setIcon(chosenIcon) {
    this.setState({ chosenIcon },
      console.log("after setState: ", this.state.chosenIcon)
    );
  }

  render() {
    return (
      <div>
        <NavBar history={this.props.history} />
        <div className="container">
          <h3>איזה אייקון תרצו להציג?</h3>
          <div class="dropdown show text-center">
            <a
              class="btn btn-secondary dropdown-toggle "
              href="#"
              role="button"
              id="dropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false">
              סנן
            </a>
            <div class="dropdown-menu dropdown-menu-center " aria-labelledby="dropdownMenuLink">
              {Object.keys(iconsObj).map((category) =>
                <Filter
                  isCategryChecked={this.state.isCategryChecked}
                  filterCategory={this.filterCategory}
                  category={category}
                />
              )}
            </div>
          </div>
          <br />
          <div className="scrollIcons">
            <div class="row">
              <div class="col-sm">
                <Icons
                  categoryFilter={this.state.categoryFilter}
                  setIcon={this.setIcon}
                  savenewicon={this.savenewicon}
                />
              </div>
            </div>
          </div>
          <br />
          <Link to={`${this.props.match.params.id ? `/EditMessage/${this.props.match.params.id}` : '/NewMessage'}`}>
            <button
              type="button"
              class="btn btn-info btn-lg btn-block"
              onClick={this.savenewicon}>
              המשך
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default IconPage;