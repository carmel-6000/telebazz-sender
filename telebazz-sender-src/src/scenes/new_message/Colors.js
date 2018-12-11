import React, { Component } from 'react';

let deafultcolors = [
  {
    colorclass: "dark",
    colorvalue: "#343a40"
  },
  {
    colorclass: "primary",
    colorvalue: "#007bff"

  },
  {
    colorclass: "success",
    colorvalue: "#28a745"
  },
  {

    colorclass: "info",
    colorvalue: "#17a2b8"
  },
  {
    colorclass: "warning",
    colorvalue: "#ffc107"
  },
  {
    colorclass: "danger",
    colorvalue: "#dc3545"
  }
];

export class Colors extends Component {
  render() {
    return (
      <div>
        {deafultcolors.map((currcolor) =>
          <Color
            colorclass={currcolor.colorclass}
            colorvalue={currcolor.colorvalue}
            onclicker={() => this.props.updatecolor(currcolor.colorvalue)}
          />
        )}
      </div>
    );
  }
}

class Color extends Component {
  render() {
    return (
      <button
        type="button"
        onClick={this.props.onclicker}
        className={"btn btn-circle btn-" + this.props.colorclass}
      />
    );
  }
}