import { observable } from 'mobx';

class Settings {
    @observable language = "Hebrew";
}

export default new Settings;

