import React, { Component } from 'react';

export class NavBar extends Component {
    render() {
      return (
        <div>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark sidebarNavigation" data-sidebarClass="navbar-dark bg-dark">
            <a className="navbar-brand" href="#">Telebuzz</a>
            <button className="navbar-toggler leftNavbarToggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault"
              aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span>
                <a href="/" className="text-light"><i class="fas fa-arrow-left"></i>  </a>
              </span>
            </button>
          </nav>
  
        </div>
      );
    }
  }
  