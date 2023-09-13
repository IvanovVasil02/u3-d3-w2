import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import avatarImg from "../assets/avatar.png";
import { Button, Form, Image, InputGroup } from "react-bootstrap";

function ContainerExample(props) {
  return (
    <Container className='d-none d-flex ' id='user'>
      <Row className='mt-5 align-items-start offset-3'>
        <Col xs={3}>
          <Image src={avatarImg} className='img-fluid object-fit-contain h-100' />
        </Col>
        <Col xs={5} className='d-flex flex-column'>
          <div>
            <InputGroup className='mb-3'>
              <Form.Control
                aria-label='Username'
                aria-describedby='basic-addon1'
                // value='Strive Student'
                className='bg-secondary text-white rounded-0'
              />
            </InputGroup>

            <p>Languages:</p>
            <Form.Select
              aria-label='Default select example'
              className='w-auto language-select bg-black text-white rounded-0 px-2 py-1 px-md-4 mb-2  '
            >
              <option value='1'>English</option>
              <option value='2'>Italian</option>
              <option value='3'>Spanish</option>
            </Form.Select>
          </div>
          <p>Maturity Settings:</p>
          <Button variant='secondary'>ALL MATURITY RATING</Button>
          <p>Show titles of all maturity ratings for this profile</p>
          <Button variant='outline-secondary'>EDIT</Button>
          <p>Autoplay controls:</p>
          <div className='d-flex gap-2'>
            <Form.Check aria-label='option 1' />
            Autoplay next episode in a series on all devices.
          </div>{" "}
          <div className='d-flex gap-2'>
            <Form.Check aria-label='option 1' />
            Autoplay previws while browsing on all devices.{" "}
          </div>
          <div className=' d-flex gap-3 mt-3'>
            <Button variant='outline-secondary' className='rounded-0'>
              SAVE
            </Button>
            <Button variant='outline-secondary' className='rounded-0'>
              CANCEL
            </Button>
            <Button variant='outline-secondary' className='rounded-0'>
              DELETE PROFILE
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ContainerExample;
