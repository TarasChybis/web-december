import React from 'react';
import { Container, CardGroup, Card, Button, } from "react-bootstrap";
import ArchitectImg_1 from "../Assets/pexels-architect-1.jpg";
import ArchitectImg_2 from "../Assets/pexels-architect-2.jpg";
import ArchitectImg_3 from "../Assets/pexels-architect-3.jpg";
import ArchitectImg_4 from "../Assets/pexels-architect-4.jpg";

const Cards = () => {
  return (
    <Container>
            <h2 className="text-center m-4">Our cities</h2>
            <CardGroup className="m-4" style={{ gap: "30px" }}>
               <Card border="primary">
                  <Card.Img variant="top" src={ArchitectImg_1} />
                  <Card.Body>
                     <Card.Title>City_1</Card.Title>
                     <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                     </Card.Text>
                     <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
               </Card>
               <Card border="primary">
                  <Card.Img variant="top" src={ArchitectImg_2} />
                  <Card.Body>
                     <Card.Title>City_2</Card.Title>
                     <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                     </Card.Text>
                     <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
               </Card>
               <Card border="primary">
                  <Card.Img variant="top" src={ArchitectImg_3} />
                  <Card.Body>
                     <Card.Title>City_3</Card.Title>
                     <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                     </Card.Text>
                     <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
               </Card>
               <Card border="primary">
                  <Card.Img variant="top" src={ArchitectImg_4} />
                  <Card.Body>
                     <Card.Title>City_4</Card.Title>
                     <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                     </Card.Text>
                     <Button variant="primary">Go somewhere</Button>
                  </Card.Body>
               </Card>
            </CardGroup>
         </Container>
  )
}

export default Cards