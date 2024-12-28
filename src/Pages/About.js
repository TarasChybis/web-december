import React from 'react';
import { Container, Tab, Nav, Row, Col } from "react-bootstrap";

const About = () => {
  return (
     <Container>
           <Tab.Container id="ledt-tabs-exemle" defaultActiveKey="first">
              <Row>
                 <Col sm={3}>
                    <Nav variant="pills" className="flex-column mt-2">
                       <Nav.Item>
                          <Nav.Link eventKey="first">Design</Nav.Link>
                       </Nav.Item>
                       <Nav.Item>
                          <Nav.Link eventKey="second">Team</Nav.Link>
                       </Nav.Item>
                       <Nav.Item>
                          <Nav.Link eventKey="third">Programming</Nav.Link>
                       </Nav.Item>
                       <Nav.Item>
                          <Nav.Link eventKey="fourth">Frameworks</Nav.Link>
                       </Nav.Item>
                       <Nav.Item>
                          <Nav.Link eventKey="fifth">Libraries</Nav.Link>
                       </Nav.Item>
                    </Nav>
                 </Col>
                 <Col sm={9}>
                    <Tab.Content className="mt-3">
                       <Tab.Pane eventKey="first">  
                          <img src="https://cdn.sanity.io/images/599r6htc/regionalized/aa8ae1c56226c77b4410e114cc5a03e078d4ed90-1560x1248.png" alt="Design-image" />
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis error ea repellat culpa suscipit minima dolorum quis ad exercitationem dolor, odit omnis corrupti beatae.</p>
                       </Tab.Pane>
                       <Tab.Pane eventKey="second">  
                          <img src="https://pbs.twimg.com/media/FzPEjeeacAEd6aO?format=jpg&name=4096x4096" alt="Team-image"/>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis error ea repellat culpa suscipit minima dolorum quis ad exercitationem dolor, odit omnis corrupti beatae.</p>
                       </Tab.Pane>
                       <Tab.Pane eventKey="third">  
                          <img src="https://blog.wedesignthemes.com/wp-content/uploads/2024/01/Figma-website-template.webp" alt="Programming-image"/>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis error ea repellat culpa suscipit minima dolorum quis ad exercitationem dolor, odit omnis corrupti beatae.</p>
                       </Tab.Pane>
                       <Tab.Pane eventKey="fourth">  
                          <img src="https://miro.medium.com/v2/resize:fit:1400/0*dyyGgDg8069Fgn4S.png" alt="Frameworks-image" />
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis error ea repellat culpa suscipit minima dolorum quis ad exercitationem dolor, odit omnis corrupti beatae.</p>
                       </Tab.Pane>
                       <Tab.Pane eventKey="fifth">  
                          <img src="https://codeparrot.ai/_next/image?url=https%3A%2F%2Fdropinblog.net%2F34256781%2Ffiles%2Ffeatured%2Fwhat-is-figma.webp&w=3840&q=75" alt="Libraries-image" />
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti nobis error ea repellat culpa suscipit minima dolorum quis ad exercitationem dolor, odit omnis corrupti beatae.</p>
                       </Tab.Pane>
                    </Tab.Content>
                 </Col>
              </Row>
           </Tab.Container>
        </Container>
  )
}

export default About