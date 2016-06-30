import React from 'react';

class Navbar extends React.Component {

  render() {
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="col-md-12">
            <div className="navbar-header">
              <a className="navbar-brand" href="/#/">Gulp, React, Express, Browserify, Flux, Fetch and Bootstrap Skeleton</a>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
