import React, { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';

import Header from './Header';
import FormInput from './FormInput';
import SearchBar from './SearchBar';

function NewBeer(props) {
  const [state, setState] = useState({
    name: '',
    tagline: '',
    first_brewed: '',
    attenuation_level: '',
    description: '',
    contributed_by: '',
    brewers_tips: '',
  });

  function handleSubmit(event) {
    event.preventDefault();
    async function fetchData() {
      try {
        const response = await axios.post(
          `https://ih-beers-api2.herokuapp.com/beers/new/`,
          state
        );
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();

    props.history.push('/beers');
  }

  return (
    <div>
      <Header></Header>
      New Beer
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Name"
          name="name"
          type="text"
          value={state.name}
          state={[state, setState]}
        />

        <FormInput
          label="TagLine"
          name="tagline"
          type="text"
          value={state.tagline}
          state={[state, setState]}
        />

        <FormInput
          label="First Brewed"
          name="first_brewed"
          type="text"
          value={state.first_brewed}
          state={[state, setState]}
        />

        <FormInput
          label="Attenuation Level"
          name="attenuation_level"
          type="number"
          value={state.attenuation_level}
          state={[state, setState]}
        />

        <FormInput
          label="Description"
          name="description"
          type="text"
          value={state.description}
          state={[state, setState]}
        />

        <FormInput
          label="Contributed by"
          name="contributed_by"
          type="text"
          value={state.contributed_by}
          state={[state, setState]}
        />

        <FormInput
          label="Brewers Tips"
          name="brewers_tips"
          type="text"
          value={state.brewers_tips}
          state={[state, setState]}
        />
        <Button variant="primary" as="input" type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default NewBeer;
