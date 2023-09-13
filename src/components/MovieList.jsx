import { Alert, Card, Col, Spinner } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const MovieCarousel = (props) => {
  const [thereIsErrors, setThereIsErrors] = useState(false);
  const [isLoading, setisLoading] = useState(true);
  const [movieArray, setmovieArray] = useState([]);

  const fetchMovies = async () => {
    const URL = "https://www.omdbapi.com/?s=" + props.search + "&apikey=bafb6310";

    try {
      const response = await fetch(URL);
      const movies = await response.json();

      if (response.ok) {
        setmovieArray(movies.Search);
      } else {
        setThereIsErrors(true);
      }
    } catch (error) {
      setThereIsErrors(true);
    } finally {
      setisLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {thereIsErrors && <Alert variant={"danger"}>There was an error loading the data</Alert>}
      {isLoading && <Spinner animation='border' variant='danger' className='ms-5' />}
      {movieArray.map((movie, index) => (
        <Col key={"movie" + index}>
          <Link to={"/movies/details/" + movie.imdbID}>
            <Card className='border-0 h-100'>
              <Card.Img variant='top' src={movie.Poster} className='img-fluid object-fit-cover w-100 h-100 ' />
            </Card>
          </Link>
        </Col>
      ))}
    </>
  );
};

export default MovieCarousel;
