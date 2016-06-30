import AppDispatcher from '../dispatcher/AppDispatcher';
import Client from '../Client';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

let SomeStore = Object.assign({}, EventEmitter.prototype, {

  emitChange: function () {

    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {

    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {

    this.removeListener(CHANGE_EVENT, callback);
  },

  getData: function (params) {
    Client.get().then((result) => {
      params.success(result);
    });
  },

  doSomething: function (data) {}
});

AppDispatcher.register(function (payload) {

  switch (payload.actionName) {

    case 'DO_SMTH':

      SomeStore.getByTitle(payload.title);

      SomeStore.emitChange();

      break;
  }
});

export default SomeStore;
