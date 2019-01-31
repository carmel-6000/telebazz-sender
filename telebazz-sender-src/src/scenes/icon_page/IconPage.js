import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../NavBar';
import iconsObj from './iconsObj';
import Filter from './Filter';
import { Icons } from './Icons';
import './IconPage.css';

//mobx 
import { observer } from 'mobx-react';

const languages = require('./../Languages.json');

@observer(['Settings'])
class IconPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryFilter: [], //the icons that were chosen in the filter are added to this array
      chosenIcon: "",
      showMenu: false
    }

    // this.filterCategory = this.filterCategory.bind(this);
    this.setIcon = this.setIcon.bind(this);
    this.saveNewIcon = this.saveNewIcon.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  updateCategoryFilter = (categoryFilter) => {
    this.setState({ categoryFilter });
    console.log("categoryFilter: ", categoryFilter);
    console.log("iconsObj: ", iconsObj);
  }

  saveNewIcon() {
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
  }

  setIcon(chosenIcon) {
    this.setState({ chosenIcon });
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener('click', this.closeMenu);
    });
  }

  closeMenu(event) {
    if (!this.dropdownMenu.contains(event.target)) {
      this.setState({ showMenu: false }, () => {
        document.removeEventListener('click', this.closeMenu);
      });
    }
  }

  render() {
    return (
      <div>
        <NavBar pageName="IconPage" history={this.props.history} />
        <div className="container">
          <h3>{languages[this.props.Settings.language].iconQuestionTitle}</h3>
          <div className="dropdown show text-center">
            <div>
              <button
                className="btn btn-secondary dropdown-toggle "
                id="dropdownFilterIcon"
                onClick={this.showMenu}>
                {languages[this.props.Settings.language].filterIcons}
              </button>

              {this.state.showMenu
                ? <div className="dropdown-filter-menu"
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >
                  {Object.keys(iconsObj).map((category, i) =>
                    <Filter
                      key={i} //each child in an array or iterator should have a unique key prop
                      categoryFilter={this.state.categoryFilter}
                      updateCategoryFilter={this.updateCategoryFilter}
                      category={category}
                    />
                  )}
                </div>
                : null
              }
            </div>
          </div>

          <br />

          <div className="scrollIcons">
            {/* <div className="row"> */}
              {/* <div className="col-sm"> */}
                <Icons
                  categoryFilter={this.state.categoryFilter}
                  setIcon={this.setIcon}
                  saveNewIcon={this.saveNewIcon}
                />
              {/* </div> */}
            {/* </div> */}
          </div>
          <br />
          <Link to={`${this.props.match.params.id ? `/EditMessage/${this.props.match.params.id}` : '/NewMessage'}`}>
            <button
              type="button"
              className="btn btn-info btn-lg btn-block"
              onClick={this.saveNewIcon}>
              {languages[this.props.Settings.language].continue}
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default IconPage;