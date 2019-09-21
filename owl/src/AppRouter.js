import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Menu, Segment, Input, Image, Container } from 'semantic-ui-react';
import Home from './components/Home';
import About from './components/About';
import User from './components/User';
import Login from './components/Login';


export default class AppRouter extends Component {

  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  getLogin = (login) => {
    console.log(login)
    if (login === true) {
      this.setState({activeItem: 'home'});
    };
  };

  render() {
    const { activeItem } = this.state;
    return (
      <Router>

        <Container style={{ backgroundColor: '#1F618D' }}>
          <Menu pointing secondary>
            <Menu.Item>
              <img src='/logo192.png' />
            </Menu.Item>

            <Menu.Item
              style={{ color: 'white' }}
              as={Link}
              to='/'
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />

            <Menu.Item
              style={{ color: 'white' }}
              as={Link}
              to='/about/'
              name='about'
              active={activeItem === 'about'}
              onClick={this.handleItemClick}
            />

            <Menu.Menu position='right'>
              <Menu.Item
                style={{ color: 'white' }}
                as={Link}
                to='/user/'
                name='user'
                active={activeItem === 'user'}
                onClick={this.handleItemClick}
              />
              <Menu.Item
                style={{ color: 'white' }}
                as={Link}
                to='/login/'
                name='login'
                active={activeItem === 'login'}
                onClick={this.handleItemClick}
              />
            </Menu.Menu>

          </Menu>
        </Container>

        <div>
          <Route path="/" exact component={Home} />
          <Route path="/about/" component={About} />
          <Route path="/user/" component={User} />
          <Route path="/login/" component={() => <Login onGetLogin={this.getLogin} />}  />
        </div>
      </Router>
    )
  }
}