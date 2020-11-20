import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
import {Row} from "react-bootstrap";

import Header from './Header';
import { Container } from 'react-bootstrap';

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
    <>
      <Header></Header>
      <Container>
        List Beers
        <SearchBar state={[search, setSearch]}></SearchBar>
        {beers.map((beer) => {
          return (
            <Row key={beer._id}>
              <div className="card">
                <img
                  src={beer.image_url} style={{width: '200px'}}
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{beer.name} </h5>
                  <p className="card-text">
                    {beer.tagline} <br />
                    {beer.contributed_by}
                  </p>
                  <Link to={`/beers/${beer._id}`} class="btn btn-primary">See details</Link>
                </div>
              </div>
            </Row>
          );
        })}
      </Container>
    </>
  );
}

export default ListBeers;
