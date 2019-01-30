import React, { Component } from 'react';

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
                <select onChange={this.updateLanguage} value={this.props.Settings.language}>
                    <option value="English">
                        English
                    </option>
                    <option value="Hebrew">
                        עברית
                    </option>
                </select>
            </div>
        );
    }
}

export default LanguageSettings;
