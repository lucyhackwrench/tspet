import React from 'react';

const petId = '1';

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

class Detal extends React.Component {
  state = {
    pet: {}
  };

  componentDidMount() {
    makeGetPetRequest(`https://virtserver.swaggerhub.com/cherries/cherries_petshop/1.0.0/pet/${petId}`)
      .then(value => {
        this.setState({ pet: value });
      });
  }

  render () {
    return (
      <div>
        Detail:
        {Object.keys(this.state.pet).map(field => <div>{field}</div>)}
      </div>
    );
  }
}

export default Detal;
