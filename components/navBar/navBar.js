import { useRouter } from 'next/router';
import Link from 'next/link';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import AutoCompleteField from './autoCompleteField';

const NavBar = () => {
  const router = useRouter();

  const onSubmit = (e) => {
    const symbol = e.target[0].value;

    if (router.pathname === '/') {
      e.preventDefault();
    }

    router.push(`/symbol/[id]`, `/symbol/${symbol}`);
  };

  return (
    <Navbar bg="light" className="border-bottom sticky-top" expand="md">
      <Container fluid="lg">
        <Link href="/">
          <a className="navbar-brand">
            <span
              style={{
                color: 'firebrick',
                fontWeight: 'bold',
              }}
            >
              Market
            </span>
            News
          </a>
        </Link>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto ">
            <NavDropdown
              id="basic-nav-dropdown"
              title="Overview"
              className="d-lg-none"
            >
              <Link href="/marketoverview">
                <a className="dropdown-item">Market</a>
              </Link>
              <Link href="/stocksoverview">
                <a className="dropdown-item">Stocks</a>
              </Link>
            </NavDropdown>
            <Link href="/calendar">
              <a className="nav-link d-lg-none">Economic Calendar</a>
            </Link>
          </Nav>
          <Form inline onSubmit={onSubmit}>
            <div className="form-group">
              <AutoCompleteField />
              <Button className="my-2 mr-2" type="submit" variant="success">
                Search
              </Button>
            </div>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
