import React, { Component } from "react"
import { Form, Container, Button } from "react-bootstrap"
 
export default class Order extends Component {
  render() {
    return (
      <Container style={{maxwidth: "600px", marginTop:"100px"}}>
        <h1 className="text-center">Свяжитесь с нами</h1>
        <form>
          <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"/>
          <Form.Text>
            Мы никогда не отправим вашу почту кому-либо!
          </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Example textarea</Form.Label>
            <Form.Control as="textarea" rows="3"/>
          </Form.Group>

          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out"/>
          </Form.Group>
          
          <Button variant="primary" type="submit">
            Отправить
          </Button>

        </form>
      </Container>
    )
  }
}