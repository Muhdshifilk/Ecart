import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="bg-dark text-light p-3 ">
          <Row>
            <Col sm={12} md={4}>
              <h5>REDUX E-KART</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
                itaque, beatae obcaecati exercitationem iusto voluptatum optio
                perspiciatis magni aut blanditiis possimus laboriosam culpa, illo
                eum placeat voluptates eveniet sunt praesentium.
              </p>{" "}
            </Col>
            <Col sm={12} md={2} className="text-center">
              LINKS
              <div className="d-flex flex-column ">
                  <Link to={'/'}>Home</Link>
                  <Link to={'/wish'}>wishlist</Link>
                  <Link to={'/cart'}>Cart</Link>
              </div>

              
            </Col>
            <Col sm={12} md={6}>
              <h5>Our Services</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis
                itaque, beatae obcaecati exercitationem iusto voluptatum optio
                perspiciatis magni aut blanditiis possimus laboriosam culpa, illo
                eum placeat voluptates eveniet sunt praesentium.
              </p>{" "}
              <h5>Feedback</h5>
                <div className="d-flex">
                  <input className="form-control me-2" type="text" />
                  <button className="btn btn-info"> Submit</button>
                </div>            
            </Col>
          </Row>
      </div>
    </>
  );
}

export default Footer;
