import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { BsFillGridFill, BsFillGrid3X3GapFill } from "react-icons/bs";
import MovieList from "./MovieList";
import MyFooter from "./MyFooter";
import SettingUser from "./SettingUser";
import { Component } from "react";

class ContainerExample extends Component {
  render() {
    return (
      <>
        <Container fluid id='main'>
          <Row>
            <Col className='d-flex align-items-center'>
              <h1 className='mb-md-3 flex-nowrap'>TV Shows</h1>

              <Form.Select
                aria-label='Default select example'
                className='w-auto language-select  ms-1 ms-md-4 bg-black text-white rounded-0 me-1 px-2 py-1 px-md-4'
              >
                <option>English</option>
                <option>Italian</option>
                <option>Spanish</option>
              </Form.Select>

              <ButtonGroup aria-label='Basic example' className='h-50 ms-auto align-items-center'>
                <Button variant='outline-secondary'>
                  <BsFillGridFill />
                </Button>
                <Button variant='outline-secondary'>
                  <BsFillGrid3X3GapFill />
                </Button>
              </ButtonGroup>
            </Col>
          </Row>
          <h5>Trending Now</h5>
          <MovieList search='Harry Potter' />
          <h5>Watch Again</h5>
          <MovieList search='Avatar' />

          <h5>New Releseas</h5>
          <MovieList search='Tokyo Ghoul' />

          <MyFooter />
        </Container>
        <SettingUser className='d-none' />
      </>
    );
  }
}

export default ContainerExample;
