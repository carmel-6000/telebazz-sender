import React, { Component } from 'react';
import './iconpage.css';
import { BrowserRouter as Router, Link } from 'react-router-dom';


const categories = ["בעלי חיים", "סכנות", "דת", "מקומות", "תרופות", "אוכל", "אנשים"]

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

export class Iconpage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryFilter: [],
    }
    this.filterCategory = this.filterCategory.bind(this);
  }


  filterCategory(event) {
    let checked = event.target.checked;
    let categoryID =event.target.id; 

    console.log(checked);
    if (checked === true && this.state.categoryFilter.includes(categoryID) === false) {
      this.setState({
        categoryFilter: [...this.state.categoryFilter, categoryID]
      })
    } 
    
    
    
    else {
      let currentIndex = this.state.categoryFilter.findIndex(function(element) {
        return element === categoryID;
      }); 
      if (currentIndex < 0) {
        return
      } else {
        let updatedCategoryFilter = this.state.categoryFilter;
        updatedCategoryFilter.splice(currentIndex,1);
        this.setState({categoryFilter: updatedCategoryFilter});
      }
    }
  }


  render() {
    
    console.log(this.state.categoryFilter);
    return (
      <div>
        <NavBar />
        <div className="container">
          <h3>איזה אייקון תרצו להציג?</h3>
          <div class="dropdown show text-center">
            <a class="btn btn-secondary dropdown-toggle " href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              סנן
            </a>
            <div class="dropdown-menu dropdown-menu-center " aria-labelledby="dropdownMenuLink">
              {Object.keys(icons).map((category) => <Filter isCategryChecked={this.state.isCategryChecked} filterCategory={this.filterCategory} category={category} />)}
            </div>
          </div>
          <br />
          <div className="scrollIcons">
          <div class="row">
            <div class="col-sm">
              <Icons categoryFilter={this.state.categoryFilter} />
            </div>
          </div>
          </div>
          <br />
          <Link to="/Newmessage">
          <button type="button" class="btn btn-info  btn-lg btn-block">המשך </button>
          </Link>
        </div>
      </div>

    );
  }
}

class Filter extends Component {

  render() {
    return (
      <button class="dropdown-item" type="button">
        <input class="checkboxer" onChange={this.props.filterCategory} id={this.props.category} type="checkbox" />
        <label>
          {this.props.category}
        </label>
      </button>
    );
  }
}


export class NavBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation" data-sidebarClass="navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Telebuzz</a>
          <button className="navbar-toggler leftNavbarToggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
            aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span>
              <a href="/Newmessage" className="text-light"><i class="fas fa-arrow-left"></i>  </a>
            </span>
          </button>
        </nav>

      </div>
    );
  }
}



class Icons extends Component {

  checkCategoryFilter() {
    if (this.props.categoryFilter.length === 0) {
      return (
        Object.keys(icons).map(
          (category) => icons[category].map(
            (icon) => <Icon iconimage={icon} category={category} />)

        )
      );
    }
    else {
      return (
        this.props.categoryFilter.map(
          (category) => icons[category].map(
            (icon) => <Icon iconimage={icon} category={category} />)
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
      <button id={this.props.category} type="button" class="btn btn-default iconButton" >

        <i class={"fas fa-" + this.props.iconimage + " fa-3x"}></i>
      </button>
    );

  }
}