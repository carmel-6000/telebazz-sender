import React, { Component } from 'react';

export class FavoriteButton extends Component {

  render() {
    return (
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          className="custom-control-input"
          id="defaultUnchecked"
          checked={this.props.favbutt}
          onChange={this.props.onChange}
        />
        <label
          className="custom-control-label pull-right"
          for="defaultUnchecked">
          הוספה למועדפים:
        </label>
      </div>
    );
  }
}