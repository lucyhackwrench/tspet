import React from 'react';

const makeGetPetRequest = async(url = '') => {
  try {
    let response = await fetch(url, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache',
      headers: {
        'Content-Type': 'application/json',
      }
    });
    return await response.json();
  }
  catch(e) {
    console.log(e);
  }
};

class List extends React.Component {
  state = {
    pet: {}
  };

  componentDidMount() {
    makeGetPetRequest('https://virtserver.swaggerhub.com/cherries/cherries_petshop/1.0.0/pet/1')
      .then(value => {
        this.setState({ pet: value });
      });
  }

  render () {
    return (
      <div className="App">
        {Object.keys(this.state.pet).map(field => <div>{field}</div>)}
      </div>
    );
  }
}

export default List;