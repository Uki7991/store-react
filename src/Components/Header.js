import React, { Component } from "react";
import {
  Navbar,
  Nav,
  FormControl,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import logo from "./la-bg.png";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";

import Home from '../Pages/Home';
import About from '../Pages/About';
import Catalog from '../Pages/Catalog';
import Order from '../Pages/Order';
import Cart from '../Pages/Cart';
import { connect } from 'react-redux';

 class Header extends Component {
  render() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light" >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="60"
                width="100"
                className="d-inline-block align-top"
                alt="Logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="m-auto ">
              <NavLink className="mx-2" to ="/">Главная</NavLink>
              <NavLink className="mx-2" to ="/about">О нас</NavLink>
              <NavLink className="mx-2" to ="/catalog">Каталог</NavLink>
              <NavLink className="mx-2" to ="/order">Мыло на заказ</NavLink>
    <NavLink className="position-relative" to ="/cart">Корзина&nbsp;<span className="badge cart-status badge-pill badge-danger">{this.props.shoppingCart.total}</span></NavLink>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Поиск"
                className="mr-sm-2"
              />
              <Button variant="outline-info">Поиск</Button>
            </Form>
            </Navbar.Collapse>
          </Container>
          </Navbar>

          
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/catalog" component={Catalog} />
              <Route exact path="/order" component={Order} />
              <Route exact path="/cart" component={Cart} />
            </Switch>
          </Router>

          
    );
  }
}

const mapStateToProps = state => {
  return {
    shoppingCart: state.shoppingCart
  }
}

export default connect(mapStateToProps)(Header)