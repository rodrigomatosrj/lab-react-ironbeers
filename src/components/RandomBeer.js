import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Spinner } from 'react-bootstrap';

import Header from './Header';

function RandomBeer(props) {
  const [beer, setBeer] = useState({
    image: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: '',
    description: '',
    contributed_by: '',
    render: false,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/random/`
        );
        setBeer({
          image: response.data.image_url,
          name: response.data.name,
          tagline: response.data.tagline,
          first_brewed: response.data.first_brewed,
          attenuation_level: response.data.attenuation_level,
          description: response.data.description,
          contributed_by: response.data.contributed_by,
          render: true,
        });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [props]);

  function renderBeer() {
    return (
      <>
        <h1>{beer.name}</h1>
        <div className="d-flex justify-content-flex-start align-items-center mb-5 mt-5">
          <img src={beer.image} style={{ height: '200px' }} />
          <div className="ml-5">
            <b>AL {beer.attenuation_level}</b>
            <br />
            Since: {beer.first_brewed}
          </div>
        </div>
        <p>
          <b>
            <i>{beer.tagline}</i>
          </b>
        </p>
        <p className="text-justify">{beer.description}</p>
        <p>
          <b>{beer.contributed_by}</b>
        </p>
      </>
    );
  }

  return (
    <>
      <Header></Header>
      <Container>{!beer.render ? <Spinner /> : renderBeer()}</Container>
    </>
  );
}

export default RandomBeer;
