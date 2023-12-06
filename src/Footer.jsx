import {
  Col,
  Row,
} from 'react-bootstrap';

function Footer() {
  return (
    <footer>
      <Row>
        <Col md={4}>
          <h4>&copy; Code Fellows</h4>
        </Col>
        <Col md={{ span: 3, offset: 5 }}>
          <small>
            <a href="https://locationiq.com">Search by LocationIQ.com</a>
          </small>
        </Col>
      </Row>
    </footer>
  );
}

export default Footer;
