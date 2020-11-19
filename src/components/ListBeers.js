import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import SearchBar from './SearchBar';

import Header from './Header';

function ListBeers() {
  const [beers, setBeers] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `https://ih-beers-api2.herokuapp.com/beers/search?q=${search}`
        );
        setBeers([...response.data]);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [search]);

console.log(beers);
  return (
    <div>
      <Header></Header>
      List Beers
      <SearchBar state={[search, setSearch]}></SearchBar>
      {beers.map((beer) => {
        return (
          <div key={beer._id}>
            <Link to={`/beers/${beer._id}`}>
              <img src={beer.image_url} />
              {beer.name} <br />
              {beer.tagline} <br />
              {beer.contributed_by}
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export default ListBeers;
