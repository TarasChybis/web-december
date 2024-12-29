import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import JsLogo from "../Assets/Unofficial_JavaScript_logo_2.svg.jpg";

const Blog = () => {
   return (
      <Container>
         <Row>
            <Col md="9">
               <div className="d-flex align-items-center m-5">
                  <div className="flex-shrink-0">
                     <img width={150}
                        height={150}
                        className="mr-3"
                        src={JsLogo}
                        alt="JsLogo"
                     />
                  </div>
                  <div className="flex-grow-1 ms-3">
                     <h5>Blog post</h5>
                     <p>This is some content from media-component. You can change it to any content and adjust it if necessary.</p>
                  </div>
               </div>
               <div className="d-flex align-items-center m-5">
                  <div className="flex-shrink-0">
                     <img width={150}
                        height={150}
                        className="mr-3"
                        src={JsLogo}
                        alt="JsLogo"
                     />
                  </div>
                  <div className="flex-grow-1 ms-3">
                     <h5>Blog post</h5>
                     <p>This is some content from media-component. You can change it to any content and adjust it if necessary.</p>
                  </div>
               </div>
               <div className="d-flex align-items-center m-5">
                  <div className="flex-shrink-0">
                     <img width={150}
                        height={150}
                        className="mr-3"
                        src={JsLogo}
                        alt="JsLogo"
                     />
                  </div>
                  <div className="flex-grow-1 ms-3">
                     <h5>Blog post</h5>
                     <p>This is some content from media-component. You can change it to any content and adjust it if necessary.</p>
                  </div>
               </div>
               <div className="d-flex align-items-center m-5">
                  <div className="flex-shrink-0">
                     <img width={150}
                        height={150}
                        className="mr-3"
                        src={JsLogo}
                        alt="JsLogo"
                     />
                  </div>
                  <div className="flex-grow-1 ms-3">
                     <h5>Blog post</h5>
                     <p>This is some content from media-component. You can change it to any content and adjust it if necessary.</p>
                  </div>
               </div>
            </Col>
            <Col md="3">
               <h5 className="text-center mt-5">Categories</h5>
               <Card>
                  <ListGroup variant="flush">
                     <ListGroup.Item>HTML/CSS</ListGroup.Item>
                     <ListGroup.Item>JavaScript</ListGroup.Item>
                     <ListGroup.Item>Python</ListGroup.Item>
                     <ListGroup.Item>Java</ListGroup.Item>
                     <ListGroup.Item>C++</ListGroup.Item>
                  </ListGroup>
               </Card>
               <Card className="mt-3" bg="light">
                  <Card.Body>
                     <Card.Title>Side widget </Card.Title>
                     <Card.Text>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id doloribus explicabo, totam neque placeat voluptate.</p>
                     </Card.Text>
                  </Card.Body>
               </Card>
            </Col>
         </Row>
     </Container>
  );
};

export default Blog;
