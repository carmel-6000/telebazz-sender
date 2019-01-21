import { observable } from 'mobx';

class MessageSending {
    @observable messageSending = false;
}

export default new MessageSending;

