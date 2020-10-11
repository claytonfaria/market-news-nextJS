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
    <>
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
                <Button
                  className="my-2 mr-2"
                  type="submit"
                  variant="outline-dark"
                >
                  Search
                </Button>
              </div>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <style global jsx>
        {`
          .react-autosuggest__container {
            position: relative;
            /* width: 40%; */
            margin: 0 5px 0 0;
          }

          .react-autosuggest__input {
            width: 100%;
            height: 38px;
            padding: 10px 20px;
            font-family: 'Lato', sans-serif;
            /* font-weight: 300;
        font-size: 16px; */
            font-size: 1em;
            border: 1px solid #aaa;
            border-radius: 4px;
          }

          .react-autosuggest__input--focused {
            outline: none;
          }

          .react-autosuggest__input--open {
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }

          .react-autosuggest__suggestions-container {
            display: none;
          }

          .react-autosuggest__suggestions-container--open {
            display: block;
            position: absolute;
            top: 37px;
            width: 100%;
            overflow-y: auto;
            overflow-x: hidden;
            max-height: 300px;
            border: 1px solid #aaa;
            background-color: #fff;
            font-family: 'Lato', sans-serif;
            /* font-weight: 300;
        font-size: 12px; */
            border-bottom-left-radius: 4px;
            border-bottom-right-radius: 4px;
            z-index: 2;
          }

          .react-autosuggest__suggestions-list {
            margin: 0;
            padding: 0;
            list-style-type: none;
          }

          .react-autosuggest__suggestion {
            cursor: pointer;
            padding: 5px 5px;
            display: flex;
            justify-content: space-between;
          }

          .react-autosuggest__suggestion .symbol {
            flex: 1;
            font-weight: bold;
            font-size: 0.8em;
          }

          .react-autosuggest__suggestion .name {
            flex: 1;
            font-size: 0.7em;
          }

          .react-autosuggest__suggestion--highlighted {
            background-color: #ddd;
          }
        `}
      </style>
    </>
  );
};

export default NavBar;
