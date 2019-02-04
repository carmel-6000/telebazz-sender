import { observable } from 'mobx';

class Settings {
    @observable language = "he";
}

export default new Settings;

