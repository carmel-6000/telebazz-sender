import React, { Component } from 'react';
import './IconPage.css';
import { Link } from 'react-router-dom';
import { NavBar } from '../new_message/NavBar.js'

let icons = {
  "בעלי חיים": ["cat", "dog", "horse"],
  "סכנות": ["fire", "bolt", "ghost"],
  "דת": ["cross", "menorah", "pray", "bible"],
  "רפואה": ["pills", "cannabis", "capsules"],
  "אוכל": ["lemon", "drumstick-bite", "cookie"],
  "אנשים": ["user-injured", "user-tie", "blind"],
  "מקומות": ["university", "church", "hospital", "home"],
  "חפצים": ["toilet-paper", "bed", "basketball-ball", "microscope"]
}

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
    const key = "Editmessage"; //Editmessages
    let currmessST = localStorage.getItem(key);
    let currmessOB = JSON.parse(currmessST);

    if (currmessOB == "")
      currmessOB = {};
    if (this.state.chosenIcon != "") {
      currmessOB.icon = this.state.chosenIcon;
    }

    localStorage.setItem(key, JSON.stringify(currmessOB));
    this.setIcon("");
    console.log("icon page" + localStorage.getItem("Editmessage")); //Editmessages
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
              {Object.keys(icons).map((category) =>
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
          <Link to={`/EditMessage/${this.props.match.params.id}`}>
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

class Filter extends Component {
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

class Icons extends Component {
  checkCategoryFilter() {
    if (this.props.categoryFilter.length === 0) {
      return (
        Object.keys(icons).map(
          (category) => icons[category].map(
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
          (category) => icons[category].map(
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

class Icon extends Component {
  render() {
    return (
      <button
        onClick={this.props.setIcon}
        id={this.props.category}
        type="button"
        class="btn btn-default iconButton" >

        <i class={"fas fa-" + this.props.iconimage + " fa-3x"}></i>
      </button>
    );
  }
}