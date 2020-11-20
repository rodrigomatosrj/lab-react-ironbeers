import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Row, Container} from "react-bootstrap";

import Header from './Header';
import SearchBar from './SearchBar';
import Spinner from './Spinner';

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


  return (
    <>
      <Header></Header>
      <Container>
        
        <h1>All Beers</h1>

        <SearchBar state={[search, setSearch]}></SearchBar>
        {!beers.length ? (
          <Spinner />
        ) : (
          beers.map((beer) => {
            return (
              <Row key={beer._id}>
                <div className="card" style={{ width: '100%' }}>
                  <div className="card-body d-flex justify-content-flex-start">
                    <div className="mr-5">
                      <img
                        src={beer.image_url}
                        style={{ height: '200px', width: 'auto' }}
                        alt="..."
                        className="card-img-top"
                      />
                    </div>
                    <div>
                      <h5 className="card-title">{beer.name} </h5>
                      <p className="card-text">
                        {beer.tagline} <br />
                        {beer.contributed_by}
                      </p>
                      <Link to={`/beers/${beer._id}`} className="btn btn-primary">
                        See details
                      </Link>
                    </div>
                  </div>
                </div>
              </Row>
            );
          })
        )}
      </Container>
    </>
  );
}

export default ListBeers;
