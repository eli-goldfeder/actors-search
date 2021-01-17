import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import {Link} from "react-router-dom";


const NavBar = () => (
        <Navbar bg="light" variant="light">
        <Nav>
          <Link to="/" className="mr-3">Home</Link>
          <Link to="/actors" className="mr-3">Actors</Link>
          <Link to="/movies" className="mr-3">Movies</Link>
        </Nav>
      </Navbar>
    )

export default NavBar;
