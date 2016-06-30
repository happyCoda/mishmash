import React from 'react';
import Navbar from './Navbar';
import SomeStore from '../stores/SomeStore';
import someActions from '../actions/SomeActions';

class App extends React.Component {

  constructor(props) {
    super(props);

    this._onChange = this._onChange.bind(this);

  }

  componentDidMount() {

    console.log('YAY!');

    SomeStore.getData({
      success: function (result) {
        console.log(result);
      }
    });

    SomeStore.addChangeListener(this._onChange);
  }

  componentWillUnmount() {

    SomeStore.removeChangeListener(this._onChange);
  }

  _onChange() {}

  render() {

    return (
      <div className="container">
        <Navbar />
        <div className="content">
          <div className="row">
            <div className="col-md-9">
              <h1>Foo!</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
