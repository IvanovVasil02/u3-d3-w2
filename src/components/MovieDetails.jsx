import { Alert, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = (props) => {
  // eslint-disable-next-line no-unused-vars
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [thereIsErrors, setThereIsErrors] = useState(false);
  const params = useParams();

  const fetchMovie = async () => {
    const URL = "https://www.omdbapi.com/?i=" + params.movieId + "&apikey=bafb6310";

    try {
      const response = await fetch(URL);
      const movies = await response.json();

      if (response.ok) {
        setSelectedMovie(movies);
        console.log(selectedMovie);
      } else {
        console.log("ooops");
        setThereIsErrors(true);
      }
    } catch (error) {
      setThereIsErrors(true);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchMovie();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {selectedMovie && (
        <Container>
          <Row>
            <Col xs={12}>
              {thereIsErrors && <Alert variant={"danger"}>There was an error loading the data</Alert>}
              {isLoading && <Spinner animation='border' variant='danger' className='ms-5' />}

              <Card className='mt-4'>
                <Row className='g-0'>
                  <Col xs={4}>
                    <Card.Img className='img-fluid rounded-start h-100 object-fit-cover' src={selectedMovie.Poster} />
                  </Col>
                  <Col xs={8}>
                    <Card.Body>
                      <Card.Title>
                        <h2>{selectedMovie.Title}</h2>
                      </Card.Title>

                      <Card.Text>
                        <p>
                          Released: <b>{selectedMovie.Released}</b>
                        </p>
                        <p>
                          Genre: <p>{selectedMovie.Genre}</p>
                        </p>
                        <p>
                          Writen by <b>{selectedMovie.Writer}</b> & directed by <b>{selectedMovie.Director}</b>
                        </p>
                        <p>
                          Movie Stars: <b>{selectedMovie.Actors}</b>
                        </p>
                        <p>
                          Country: <b>{selectedMovie.Country}</b>
                        </p>
                        <p>
                          <b>Plot</b>: {selectedMovie.Plot}
                        </p>
                      </Card.Text>
                    </Card.Body>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default MovieDetails;
