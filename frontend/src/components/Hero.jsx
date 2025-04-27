import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="py-5">
      {/* fluid makes this full‐width at all breakpoints */}
      <Container fluid>
        <Row className="justify-content-center">
          {/* 
            xs=12 → 100% width on mobile
            md=8  → ~66% width on tablets+
            lg=6  → 50% width on desktop+
          */}
          <Col xs={12} md={8} lg={6}>
            <Card className="p-5 text-center bg-light">
              <h1 className="mb-4">MERN Authentication</h1>
              <p className="mb-4">
                This is a boilerplate for MERN authentication that stores a
                JWT in an HTTP-Only cookie. It also uses Redux Toolkit and
                the React Bootstrap library.
              </p>
              <div className="d-flex justify-content-center">
                <Button
                  as={Link}
                  to="/login"
                  variant="primary"
                  className="me-3"
                >
                  Sign In
                </Button>
                <Button as={Link} to="/register" variant="secondary">
                  Register
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero;
