import React, { Component } from 'react';

export class NavBar extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this);
  }

  click() {
    if (this.props.history.location.pathname.includes("IconPage")) {     
      this.props.history.goBack();
    } else if (this.props.history.location.pathname.includes("NewMessage") || this.props.history.location.pathname.includes("EditMessage")) {
      this.props.history.replace("/");
    } else {
      this.props.history.goBack();
    }
  }

  render() {
    if (this.props.history === undefined) {
      return (
        <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation" data-sidebarClass="navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Telebuzz</a>
          </nav>
        </div>
      );
    } else {
      return (
        <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation" data-sidebarClass="navbar-dark bg-dark">
            <div className="navbar-brand" href="#">Telebuzz</div>
            <button
              className="navbar-toggler leftNavbarToggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span>
                <div
                  onClick={this.click}
                  className="text-light">
                  <i className="fas fa-arrow-left" />
                </div>
              </span>
            </button>
          </nav>
        </div>
      );
    }
  }
}
