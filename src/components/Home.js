import React from 'react';
import { Container,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <div className="card">
        <img
          src="https://doveandolive.com.au/wp-content/uploads/2013/08/LongBanner_craft-beer-taps-2.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h3>All Beers</h3>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Link to="/beers">
            <Button>All Beers</Button>
          </Link>
        </div>
      </div>
      <div className="card">
        <img
          src="http://murphguide.com/wp-content/uploads/2013/01/thechurchill-taps.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h3>Random Beer</h3>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Link to="/random-beer">
            <Button>Random Beer</Button>
          </Link>
        </div>
      </div>
      <div className="card">
        <img
          src="https://philly.thedrinknation.com/images/articles/2011-11-01-perch-pub-taps.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h3>New Beer</h3>
          <p className="card-text">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <Link to="/new-beer">
            <Button>New Beer</Button>
          </Link>
        </div>
      </div>
    </Container>
  );
}

export default Home;
