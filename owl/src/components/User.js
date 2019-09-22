import React from 'react';
import { Grid, Container, Segment, Card, Image, Icon, Accordion, Menu, Label, Input, Rating, Header } from 'semantic-ui-react';
import faker from 'faker';

export default class User extends React.Component {
    state = { activeItem: 'inbox' }

    state = { activeIndex: 0 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state
        const { activeIndex } = this.state


        return (
            <Container fluid style={{ paddingTop: '5%' }}>
                <Grid.Row>
                    <Grid columns={3} stackable>

                        <Grid.Column width={4} style={{ left: '10px' }}>
                            <Accordion>
                                <Menu fluid vertical style={{ backgroundColor: '#299CC3' }}>
                                    <Menu.Item>
                                        <Input icon='search' placeholder='Search services...' />
                                    </Menu.Item>

                                    <Accordion.Title
                                        active={activeIndex === 0}
                                        index={0}
                                        onClick={this.handleClick}
                                    >
                                        <Icon name='dropdown' />
                                        Fitness
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 0}>
                                        <Menu.Item
                                            name='training'
                                            active={activeItem === 'training'}
                                            onClick={this.handleItemClick}>
                                            Personal Training
                                        </Menu.Item>
                                        <Menu.Item
                                            name='interval'
                                            active={activeItem === 'interval'}
                                            onClick={this.handleItemClick}>
                                            Interval Training
                                        </Menu.Item>
                                        <Menu.Item
                                            name='classes'
                                            active={activeItem === 'classes'}
                                            onClick={this.handleItemClick}>
                                            Gym Classes
                                        </Menu.Item>
                                        <Menu.Item
                                            name='indoor'
                                            active={activeItem === 'indoor'}
                                            onClick={this.handleItemClick}>
                                            Indoor
                                        </Menu.Item>
                                        <Menu.Item
                                            name='outdoor'
                                            active={activeItem === 'outdoor'}
                                            onClick={this.handleItemClick}>
                                            Outdoor
                                        </Menu.Item>
                                    </Accordion.Content>

                                    <Accordion.Title
                                        active={activeIndex === 1}
                                        index={1}
                                        onClick={this.handleClick}
                                    >
                                        <Icon name='dropdown' />
                                        Previous Search
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 1}>
                                        <Menu.Item
                                            name='development'
                                            active={activeItem === 'development'}
                                            onClick={this.handleItemClick}>
                                            Development
                                        </Menu.Item>
                                        <Menu.Item
                                            name='badminton'
                                            active={activeItem === 'badminton'}
                                            onClick={this.handleItemClick}>
                                            Badminton
                                        </Menu.Item>
                                        <Menu.Item
                                            name='gardening'
                                            active={activeItem === 'gardening'}
                                            onClick={this.handleItemClick}>
                                            Gardening
                                        </Menu.Item>
                                    </Accordion.Content>
                                </Menu>
                            </Accordion>
                        </Grid.Column>


                        <Grid.Column width={8}>

                            <Segment raised style={{ backgroundColor: '#629ee1' }} >
                                <Grid columns={2} relaxed='very'>
                                    <Grid.Column>
                                        <Image
                                            bordered
                                            circular
                                            size='medium'
                                            src={faker.internet.avatar()}
                                            spaced='left'
                                        />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Card fluid>
                                            <Card.Content>
                                                <Card.Header>Matthew Harris</Card.Header>
                                                <Card.Meta>Guitar Lessons</Card.Meta>
                                                <Card.Description>
                                                    Matthew is a guitarist living in Nashville. Looking for someone to paint his shed. Willing to teach guitar for 1 weeekend for a painted shed.
                                                </Card.Description>
                                            </Card.Content>
                                            <Card.Content>
                                                <Card.Meta><Label>Nashville, TN</Label></Card.Meta>
                                                <a style={{ float: 'right', paddingRight: '43px' }}>Rating</a>
                                                <Card.Description>
                                                    <Label color='teal' >Available on Weekends</Label>
                                                    <Rating icon='star' defaultRating={4} maxRating={5} style={{ float: 'right' }} />
                                                </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <a>
                                                    <Icon name='comment' />
                                                    Comments
                                                </a>
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                </Grid>
                            </Segment>

                            <Segment raised style={{ backgroundColor: '#629ee1' }} >
                                <Grid columns={2} relaxed='very'>
                                    <Grid.Column>
                                        <Image
                                            bordered
                                            circular
                                            size='medium'
                                            src={faker.internet.avatar()}
                                            spaced='left'
                                        />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Card fluid>
                                            <Card.Content>
                                                <Card.Header>Peter Jacobs</Card.Header>
                                                <Card.Meta>Guitar Lessons</Card.Meta>
                                                <Card.Description>
                                                    Peter is a web developer living in Toronto. Looking for someone to teach him how to swim. Willing to teach web development for 1 weeekend for swimming lessons.
                                                </Card.Description>
                                            </Card.Content>
                                            <Card.Content>
                                                <Card.Meta><Label>Toronto, ON</Label></Card.Meta>
                                                <a style={{ float: 'right', paddingRight: '43px' }}>Rating</a>
                                                <Card.Description>
                                                    <Label color='teal' >Available on Tuesdays</Label>

                                                    <Rating icon='star' defaultRating={4} maxRating={5} style={{ float: 'right' }} />
                                                </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <a>
                                                    <Icon name='comment' />
                                                    Comments
                                                </a>
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                </Grid>
                            </Segment>

                            <Segment raised style={{ backgroundColor: '#629ee1' }} >
                                <Grid columns={2} relaxed='very'>
                                    <Grid.Column>
                                        <Image
                                            bordered
                                            circular
                                            size='medium'
                                            src={faker.internet.avatar()}
                                            spaced='left'
                                        />
                                    </Grid.Column>
                                    <Grid.Column>
                                        <Card fluid>
                                            <Card.Content>
                                                <Card.Header>Josue Van</Card.Header>
                                                <Card.Meta>Hacker</Card.Meta>
                                                <Card.Description>
                                                    Josue is a hacker living in Toronto. Looking for drawing lessons. Willing to hack your neighbours wifi for some drawing lessons.
                                                </Card.Description>
                                            </Card.Content>
                                            <Card.Content>
                                                <Card.Meta><Label>Nashville, TN</Label></Card.Meta>
                                                <a style={{ float: 'right', paddingRight: '43px' }}>Rating</a>
                                                <Card.Description>
                                                    <Label color='teal' >Available on Weekends</Label>
                                                    <Rating icon='star' defaultRating={4} maxRating={5} style={{ float: 'right' }} />
                                                </Card.Description>
                                            </Card.Content>
                                            <Card.Content extra>
                                                <a>
                                                    <Icon name='comment' />
                                                    Comments
                                                </a>
                                            </Card.Content>
                                        </Card>
                                    </Grid.Column>
                                </Grid>
                            </Segment>

                        </Grid.Column>

                        <Grid.Column width={4}>

                            <Segment style={{ right: '10px', backgroundColor: '#299CC3' }} >
                                <Header as='h2' style={{ color: 'white' }} >
                                    <Icon name='chart line' color='green' />
                                    Trending
                                </Header>


                                <Card fluid>
                                    <Card.Content>
                                        <Image
                                            floated='left'
                                            size='mini'
                                            src={faker.internet.avatar()}
                                        />
                                        <Card.Header>{faker.name.findName()}</Card.Header>
                                        <Card.Meta>Hair styling</Card.Meta>
                                        <Segment>
                                            <Card.Description>
                                                Looking for web a developer
                                    </Card.Description>
                                        </Segment>
                                    </Card.Content>
                                </Card>

                                <Card fluid>
                                <Card.Content>
                                    <Image
                                        floated='left'
                                        size='mini'
                                        src={faker.internet.avatar()}
                                    />
                                    <Card.Header>{faker.name.findName()}</Card.Header>
                                    <Card.Meta>Hair styling</Card.Meta>
                                    <Segment>
                                        <Card.Description>
                                            Looking for web a developer
                                    </Card.Description>
                                    </Segment>
                                </Card.Content>
                            </Card>

                            </Segment>
                        </Grid.Column>
                    </Grid>
                </Grid.Row>
            </Container>
        );
    };
};