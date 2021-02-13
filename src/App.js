import { useState, useEffect } from "react";
import { Container, Jumbotron, Navbar } from "react-bootstrap";

import { search } from "./api";
import Search from "./Search";
import SearchResults from "./SearchResults";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  return (
    <div className="App">
      <header>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>Artsy</Navbar.Brand>
        </Navbar>
        <Jumbotron fluid className="painting-background">
          <Container>
            <h1>Find That Art You Love</h1>
            <Search query={query} onChange={(e) => setQuery(e.target.value)} />
          </Container>
        </Jumbotron>
      </header>
      <main>
        <Container fluid>
          <SearchResults query={query} />
        </Container>
      </main>
    </div>
  );
}

export default App;
