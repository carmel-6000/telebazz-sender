import React, { Component } from 'react';
import NavBar from "./NavBar.js";
//mobx 
import { observer } from 'mobx-react';

@observer(['Settings'])
class LanguageSettings extends Component {
    updateLanguage = (event) => {
        this.props.Settings.language = event.target.value;
    }

    render() {
        return (
            <div>
                <NavBar pageName={"LanguageSettings"} history={this.props.history} />

                <select onChange={this.updateLanguage} value={this.props.Settings.language}>
                    <option value="en">
                        English
                    </option>
                    <option value="he">
                        עברית
                    </option>
                    <option value="arabic">
                        عربيه
                    </option>
                </select>
            </div>
        );
    }
}

export default LanguageSettings;
