import { observable } from 'mobx';

class Settings {
    @observable language = "English";
}

export default new Settings;

