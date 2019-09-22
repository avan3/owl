import React from 'react';
import { Grid, Container, Segment, Card, Image, Button, GridColumn } from 'semantic-ui-react';
import faker from 'faker';

export default class User extends React.Component {
    render() {
        return (
            <Container fluid style={{ paddingTop: '5%' }}>
                <Grid.Row>
                    <Grid columns={3} stackable>
                        <Grid.Column width={4}>

                        </Grid.Column>


                        <Grid.Column width={3}>
                            <Image
                                fkuid
                                size='medium'
                                src={faker.internet.avatar()}
                            />
                        </Grid.Column>

                        <Grid.Column width={5}>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>Matthew Harris</Card.Header>
                                    <Card.Meta>Co-Worker</Card.Meta>
                                    <Card.Description>
                                        Matthew is a pianist living in Nashville.
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column width={4}>

                        </Grid.Column>
                    </Grid>
                </Grid.Row>

                <Grid.Row>
                    <Grid columns={3} stackable>
                        <Grid.Column width={4}>

                        </Grid.Column>


                        <Grid.Column width={3}>
                            <Image
                                fkuid
                                size='medium'
                                src={faker.internet.avatar()}
                            />
                        </Grid.Column>

                        <Grid.Column width={5}>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>Matthew Harris</Card.Header>
                                    <Card.Meta>Co-Worker</Card.Meta>
                                    <Card.Description>
                                        Matthew is a pianist living in Nashville.
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column width={4}>

                        </Grid.Column>
                    </Grid>
                </Grid.Row>

                <Grid.Row>
                    <Grid columns={3} stackable>
                        <Grid.Column width={4}>

                        </Grid.Column>


                        <Grid.Column width={3}>
                            <Image
                                fkuid
                                size='medium'
                                src={faker.internet.avatar()}
                            />
                        </Grid.Column>

                        <Grid.Column width={5}>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>Matthew Harris</Card.Header>
                                    <Card.Meta>Co-Worker</Card.Meta>
                                    <Card.Description>
                                        Matthew is a pianist living in Nashville.
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column width={4}>

                        </Grid.Column>
                    </Grid>
                </Grid.Row>


                <Grid.Row>
                    <Grid columns={3} stackable>
                        <Grid.Column width={4}>

                        </Grid.Column>


                        <Grid.Column width={3}>
                            <Image
                                fkuid
                                size='medium'
                                src={faker.internet.avatar()}
                            />
                        </Grid.Column>

                        <Grid.Column width={5}>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>Matthew Harris</Card.Header>
                                    <Card.Meta>Co-Worker</Card.Meta>
                                    <Card.Description>
                                        Matthew is a pianist living in Nashville.
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column width={4}>

                        </Grid.Column>
                    </Grid>
                </Grid.Row>

                <Grid.Row>
                    <Grid columns={3} stackable>
                        <Grid.Column width={4}>

                        </Grid.Column>


                        <Grid.Column width={3}>
                            <Image
                                fkuid
                                size='medium'
                                src={faker.internet.avatar()}
                            />
                        </Grid.Column>

                        <Grid.Column width={5}>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>Matthew Harris</Card.Header>
                                    <Card.Meta>Co-Worker</Card.Meta>
                                    <Card.Description>
                                        Matthew is a pianist living in Nashville.
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column width={4}>

                        </Grid.Column>
                    </Grid>
                </Grid.Row>

                <Grid.Row>
                    <Grid columns={3} stackable>
                        <Grid.Column width={4}>

                        </Grid.Column>


                        <Grid.Column width={3}>
                            <Image
                                fkuid
                                size='medium'
                                src={faker.internet.avatar()}
                            />
                        </Grid.Column>

                        <Grid.Column width={5}>
                            <Card fluid>
                                <Card.Content>
                                    <Card.Header>Matthew Harris</Card.Header>
                                    <Card.Meta>Co-Worker</Card.Meta>
                                    <Card.Description>
                                        Matthew is a pianist living in Nashville.
                                </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column width={4}>

                        </Grid.Column>
                    </Grid>
                </Grid.Row>
            </Container>
        );
    };
};