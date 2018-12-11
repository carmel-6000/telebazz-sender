import React, { Component } from 'react';

export class FavoriteButton extends Component {

  render() {
    return (
      <div class="custom-control custom-checkbox">
        <input
          type="checkbox"
          class="custom-control-input"
          id="defaultUnchecked"
          checked={this.props.favbutt}
          onChange={this.props.onChange}
        />
        <label
          class="custom-control-label pull-right"
          for="defaultUnchecked">
          הוספה למועדפים:
        </label>
      </div>
    );
  }
}