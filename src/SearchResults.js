import { useEffect, useState } from "react";
import { search } from "./api";

import { Row, Col, Card } from "react-bootstrap";

export default function SearchResults({ query }) {
  const [results, setResults] = useState(null);

  useEffect(() => {
    if (!(query || query.length)) {
      setResults(null);
      return;
    }

    if (query.length < 3) {
      return;
    }

    search(query)
      .then((results) => {
        if (results && results.data) {
          setResults(results.data);
        }
      })
      .catch((err) => console.log(err));
  }, [query]);

  if (!results) {
    return null;
  }

  if (results.length == 0) {
    return <p>No results.</p>;
  }
  console.log("search Results.js");
  return (
    <Row>
      {results.map((result) => (
        <Col key={result.id} xs={12} md={4} lg={3}>
          <Card>
            <Card.Img
              variant="top"
              src={`https://www.artic.edu/iiif/2/${result.image_id}/full/843,/0/default.jpg`}
              alt={result.thumnail?.alt_text}
            />
            <Card.Body>
              <Card.Title>{result.title}</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}
