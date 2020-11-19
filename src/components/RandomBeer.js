import React,{useState,useEffect} from 'react';
import axios from "axios";

import Header from './Header';

function RandomBeer() {
  const [beer, setBeer] = useState({
    image: '',
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: '',
    description: '',
    contributed_by: '',
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
        });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, []);

  return (
    <div>
      <Header></Header>
      <img src={beer.image} />
      {beer.name} {beer.attenuation_level} <br />
      {beer.tagline} {beer.first_brewed} <br />
      {beer.description} <br />
      {beer.contributed_by}
    </div>
  );
}

export default RandomBeer;
