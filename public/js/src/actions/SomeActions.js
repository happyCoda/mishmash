import AppDispatcher from '../dispatcher/AppDispatcher';
import someConstants from '../constants/SomeConstants';

let SomeActions = {

  getByTitle(title) {

    AppDispatcher.dispatch({
      actionName: 'DO_SMTH'
    });
  }
};

export default SomeActions;
