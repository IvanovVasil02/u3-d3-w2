import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import myLogo from "../assets/logo.png";
import { BsSearch, BsBellFill } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";

function TopBar() {
  const location = useLocation();

  const handleClick = (e) => {
    document.querySelector("#main").innerHTML = "";
    document.querySelector("#user").classList.remove("d-none");
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
          <Nav className='flex-grow-1'>
            <Link className={`nav-link ${location.pathname === "TvShows" && "active"}`} to='/'>
              TV show
            </Link>{" "}
            <Link className={`nav-link ${location.pathname === "TvShows" && "active"}`} to='/movies'>
              Movies
            </Link>{" "}
            <Link className={`nav-link ${location.pathname === "TvShows" && "active"}`} to='/recentlyAdded'>
              Recently Addded
            </Link>{" "}
            <Link className={`nav-link ${location.pathname === "TvShows" && "active"}`} to='/myList'>
              My List
            </Link>
            <Nav.Link className='ms-auto'>
              <BsSearch />
            </Nav.Link>
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
}

export default TopBar;
