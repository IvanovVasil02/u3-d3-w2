import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import myLogo from "../assets/logo.png";
import { BsSearch, BsBellFill, BsFillPersonFill } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button, InputGroup } from "react-bootstrap";
import { useState } from "react";

const TopBar = (props) => {
  const [search, setSearch] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    document.querySelector("#main").innerHTML = "";
    document.querySelector("#user").classList.remove("d-none");
  };

  const handleSubmit = (e) => {
    search && navigate("/movies/" + search);
  };

  return (
    <Navbar expand='md' bg='dark' data-bs-theme='dark' style={{ height: "60px" }}>
      <Container fluid>
        <Navbar.Brand href='#home'>
          <img
            src={myLogo}
            style={{ width: "100px", height: "55px" }}
            className='d-inline-block align-top'
            alt='React Bootstrap logo'
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='flex-grow-1 align-items-center'>
            <Link className={`nav-link ${location.pathname === "TvShows" && "active"}`} to='/'>
              TV show
            </Link>
            <Link className={`nav-link ${location.pathname === "TvShows" && "active"}`} to='/movies'>
              Movies
            </Link>
            <Link className={`nav-link ${location.pathname === "TvShows" && "active"}`} to='/recentlyAdded'>
              Recently Addded
            </Link>
            <Link className={`nav-link ${location.pathname === "TvShows" && "active"}`} to='/myList'>
              My List
            </Link>
            <Form onSubmit={handleSubmit} className='ms-auto'>
              <InputGroup>
                <Form.Control
                  placeholder='Username'
                  aria-label='Username'
                  aria-describedby='basic-addon1'
                  onChange={(event) => setSearch(event.target.value)}
                />

                <Button type='submit' variant='dark' className='border-1 border-secondary'>
                  <BsSearch />
                </Button>
              </InputGroup>
            </Form>
            <Nav.Link href='#link'>KIDS</Nav.Link>
            <Nav.Link href='#link'>
              <BsBellFill />
            </Nav.Link>
            <Nav.Link href='#link' onClick={handleClick}>
              <BsFillPersonFill />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
