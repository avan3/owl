import React from 'react';
import { Menu, Segment, Grid, Button, Form, Checkbox, Container, Image } from 'semantic-ui-react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Logo from '../assets/owl.png';
import User from './User';
import './style.scss';

export default class Login extends React.Component {

    state = {
        login: true,
        register: false,
        loginSuccess: false
    }

    submitForm = (e) => {
        this.props.onGetLogin(true);
    };

    render() {
        return (
            <Container style={{ paddingTop: '10%' }}>

                <Grid columns={2} relaxed='very' stackable>
                    <Grid.Row>

                        <Grid.Column >
                            <Image src={Logo} />
                        </Grid.Column>

                        <Grid.Column style={{ paddingTop: '4%' }}>

                            <Container className='loginCard'>

                                {this.state.login === true ?
                                    <Form ref="form">

                                        <Form.Input
                                            icon='user'
                                            iconPosition='left'
                                            label='Username'
                                            placeholder='Username'
                                        />
                                        <Form.Input
                                            icon='lock'
                                            iconPosition='left'
                                            label='Password'
                                            type='password'
                                            placeholder='Password'
                                        />

                                        <Button type="submit" onClick={this.submitForm} content='Login' primary as={Link} to='/'/>
                                        <Button content='Register' onClick={() => this.setState({ register: true, login: false })} />
                                    </Form>
                                    : null}

                                {this.state.register === true ?
                                    <Form>
                                        <Form.Group>
                                            <Form.Field>
                                                <label>First Name</label>
                                                <input placeholder='First Name' />
                                            </Form.Field>
                                            <Form.Field>
                                                <label>Last Name</label>
                                                <input placeholder='Last Name' />
                                            </Form.Field>
                                        </Form.Group>

                                        <Form.Field>
                                            <label>Username</label>
                                            <input placeholder='Username' />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Password</label>
                                            <input placeholder='Password' />
                                        </Form.Field>
                                        <Form.Field>
                                            <label>Email</label>
                                            <input placeholder='Email' />
                                        </Form.Field>

                                        <Form.Field>
                                            <Checkbox label='I agree to the Terms and Conditions' />
                                        </Form.Field>

                                        <Button content='Submit' primary onClick={() => this.setState({ login: true, register: false })} />
                                        <Button icon='arrow left'  onClick={() => this.setState({ register: false, login: true })} />
                                    </Form>
                                    : null}
                            </Container>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container >
        );
    };
};