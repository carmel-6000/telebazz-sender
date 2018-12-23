import React, { Component } from 'react';

let iconame = [
  "microscope",
  "anchor",
  "basketball-ball",
  "hourglass",
  "bolt",
  "award",
  "bed",
  "cannabis",
  "fire",
  "home",
  "drumstick-bite",
  "ghost",
  "toilet-paper"
];

export class Icons extends Component {
  render() {
    return (
      <div>
        {iconame.map((currimage) =>
          <Icon
            iconimage={currimage}
            onClick={() => this.props.updateimg(currimage)}
          />
        )}
      </div>
    );
  }
}

class Icon extends Component {
  render() {
    return (
      <button
        type="button"
        className="btn btn-default "
        onClick={this.props.onClick}>
        <i className={"fas fa-" + this.props.iconimage} />
      </button>
    );
  }
}