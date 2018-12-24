import React, { Component } from 'react';
import './MessagePage.css';

export class FavoriteButton extends Component {

  render() {
    return (
      // <div>
      //   <button className="add-to-favorites">הוספה למועדפים:</button>
      // </div>
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
          <p className="add-to-favorites-lable">
            הוספה למועדפים:
          </p>
        </label>
      </div>
    );
  }
}