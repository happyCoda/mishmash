import 'whatwg-fetch';

let Client = {
  get() {

    // fetch(url, {
    //   method: 'GET',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   mode: 'same-origin'
    // });

    return fetch('/static/js/src/data.json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((result) => {

      return result.json();
    });
  }
};

export default Client;
