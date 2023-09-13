import { Col, Container, Row } from "react-bootstrap";

import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from "react-icons/bs";

const MyFooter = () => {
  return (
    <Container id='footer'>
      <div className='d-flex gap-3 px-lg-5 mb-4'>
        <BsFacebook />
        <BsInstagram />
        <BsTwitter />
        <BsYoutube />
      </div>
      <Row className='row-cols-2 row-cols-lg-4  px-lg-5'>
        <Col>
          <p>Audio and Subtitles</p>
          <p>Media Center</p>
          <p>Privacy</p>
          <p>Contact US</p>
        </Col>
        <Col>
          <p>Audio Descriptions</p>
          <p>Investors Relations</p>
          <p>Legal notices</p>
        </Col>
        <Col>
          <p>Help Center</p>
          <p>Job</p>
          <p>Coockie Preferences</p>
        </Col>
        <Col>
          <p>Gift Cards</p>
          <p>Terms of Use</p>
          <p>Corporate Information</p>
        </Col>
        <Col xs={12}>
          <button variant='outline' className='btn btn-outline-secondary my-3'>
            Serevice Code
          </button>
          <p>&copy;1997-2019, Inc. i-0023430244234d2</p>
        </Col>
      </Row>
    </Container>
  );
};

export default MyFooter;
