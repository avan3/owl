import React from 'react';
import _ from 'lodash';
import faker from 'faker';
import { Menu, Segment, Input, Image, Container, Grid, Search, Header, Icon, Card } from 'semantic-ui-react';


const initialState = { isLoading: false, results: [], value: '' }

const source = _.times(5, () => ({
    title: faker.name.findName(),
    description: faker.name.jobTitle(),
    image: faker.internet.avatar()
}))

const userCard1 = {
    name: faker.name.findName(),
    picture: faker.internet.avatar(),
    job: faker.name.jobTitle()
}
const userCard2 = {
    name: faker.name.findName(),
    picture: faker.internet.avatar(),
    job: faker.name.jobTitle()
}
const userCard3 = {
    name: faker.name.findName(),
    picture: faker.internet.avatar(),
    job: faker.name.jobTitle()
}
const userCard4 = {
    name: faker.name.findName(),
    picture: faker.internet.avatar(),
    job: faker.name.jobTitle()
}

export default class Home extends React.Component {

    state = initialState

    handleResultSelect = (e, { result }) => this.setState({ value: result.title })

    handleSearchChange = (e, { value }) => {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.setState(initialState)

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = (result) => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 300)
    }

    render() {

        const { isLoading, value, results } = this.state

        return (
            <Container style={{ backgroundColor: '#1F618D' }}>

                <Grid columns={16}>

                    <Grid.Row verticalAlign='middle'>

                        <Grid.Column width={5}>
                            {/* right side placeholder */}
                        </Grid.Column>
                        {/* Search bar ======================================================================================================================== */}
                        <Grid.Column width={6} style={{ paddingTop: '20%' }}>

                            <Header as='h1' textAlign='center' style={{ color: 'white' }}>
                                <Header.Content>What would you like help with?</Header.Content>
                            </Header>

                            <Container textAlign='center'>
                                <Search
                                    // as={Input}
                                    fluid
                                    size='big'
                                    loading={isLoading}
                                    onResultSelect={this.handleResultSelect}
                                    onSearchChange={_.debounce(this.handleSearchChange, 500, {
                                        leading: true,
                                    })}
                                    results={results}
                                    value={value}
                                    {...this.props}
                                />
                            </Container>
                        </Grid.Column>

                        <Grid.Column width={5}>
                            {/* left side placeholder */}
                        </Grid.Column>

                    </Grid.Row>

                    {/* Trending bar ======================================================================================================================== */}

                    <Grid.Row verticalAlign='center' style={{ paddingTop: '15%' }}>
                        <Header as='h2' textAlign='center' style={{ paddingLeft: '45%', color: 'white' }}>
                            <Icon name='chart line' color='green' />
                            <Header.Content>Trending</Header.Content>
                        </Header>
                    </Grid.Row>

                    <Grid.Row verticalAlign='center'>


                        <Card.Group itemsPerRow={4}>
                            <Card>
                                <Card.Content>
                                    <Image
                                        floated='left'
                                        size='mini'
                                        src={userCard1.picture}
                                    />
                                    <Card.Header>{userCard1.name}</Card.Header>
                                    <Card.Meta>Guitar Lessons</Card.Meta>
                                    <Segment>
                                        <Card.Description>
                                            Looking for a swimming instructor
                                    </Card.Description>
                                    </Segment>
                                </Card.Content>
                            </Card>

                            <Card>
                                <Card.Content>
                                    <Image
                                        floated='left'
                                        size='mini'
                                        src={userCard2.picture}
                                    />
                                    <Card.Header>{userCard2.name}</Card.Header>
                                    <Card.Meta>Boxing</Card.Meta>
                                    <Segment>
                                        <Card.Description>
                                            Looking for a programmer
                                    </Card.Description>
                                    </Segment>
                                </Card.Content>
                            </Card>

                            <Card>
                                <Card.Content>
                                    <Image
                                        floated='left'
                                        size='mini'
                                        src={userCard3.picture}
                                    />
                                    <Card.Header>{userCard3.name}</Card.Header>
                                    <Card.Meta>Web Development</Card.Meta>
                                    <Segment>
                                        <Card.Description>
                                            Looking for a haircut
                                    </Card.Description>
                                    </Segment>
                                </Card.Content>
                            </Card>

                            <Card>
                                <Card.Content>
                                    <Image
                                        floated='left'
                                        size='mini'
                                        src={userCard4.picture}
                                    />
                                    <Card.Header>{userCard4.name}</Card.Header>
                                    <Card.Meta>Hair styling</Card.Meta>
                                    <Segment>
                                        <Card.Description>
                                            Looking for web a developer
                                    </Card.Description>
                                    </Segment>
                                </Card.Content>
                            </Card>
                        </Card.Group>

                    </Grid.Row>

                </Grid>
            </Container>
        );
    };
};