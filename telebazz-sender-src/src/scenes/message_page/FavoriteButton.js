import React, { Component } from 'react';
import './MessagePage.css';

//mobx 
import { observer } from 'mobx-react';

const languages = require('./../Languages.json');

@observer(['Settings'])
class FavoriteButton extends Component {

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
          htmlFor="defaultUnchecked">
          <p className="add-to-favorites-lable">
            {languages[this.props.Settings.language].addToFavs}
          </p>
        </label>
      </div>
    );
  }
}

export default FavoriteButton;