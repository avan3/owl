import React from 'react';
import _ from 'lodash'
import faker from 'faker'
import { Menu, Segment, Input, Image, Container, Grid, Search, Header, Icon, Card } from 'semantic-ui-react';


const initialState = { isLoading: false, results: [], value: '' }

const source = _.times(5, () => ({
    title: faker.company.companyName(),
    description: faker.company.catchPhrase(),
    image: faker.internet.avatar(),
    price: faker.finance.amount(0, 100, 2, '$'),
}))


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

                        <Grid.Column width={4}>
                            <Card>
                                <Card.Content>
                                    <Image
                                        floated='left'
                                        size='mini'
                                        src={faker.internet.avatar()}
                                    />
                                    <Card.Header>{faker.name.findName()}</Card.Header>
                                    <Card.Meta>Friends of Elliot</Card.Meta>
                                    <Card.Description>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column width={4}>
                            <Card>
                                <Card.Content>
                                    <Image
                                        floated='left'
                                        size='mini'
                                        src={faker.internet.avatar()}
                                    />
                                    <Card.Header>{faker.name.findName()}</Card.Header>
                                    <Card.Meta>Friends of Elliot</Card.Meta>
                                    <Card.Description>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column width={4}>
                            <Card>
                                <Card.Content>
                                    <Image
                                        floated='left'
                                        size='mini'
                                        src={faker.internet.avatar()}
                                    />
                                    <Card.Header>{faker.name.findName()}</Card.Header>
                                    <Card.Meta>Friends of Elliot</Card.Meta>
                                    <Card.Description>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>

                        <Grid.Column width={4}>
                            <Card>
                                <Card.Content>
                                    <Image
                                        floated='left'
                                        size='mini'
                                        src={faker.internet.avatar()}
                                    />
                                    <Card.Header>{faker.name.findName()}</Card.Header>
                                    <Card.Meta>Friends of Elliot</Card.Meta>
                                    <Card.Description>
                                        Steve wants to add you to the group <strong>best friends</strong>
                                    </Card.Description>
                                </Card.Content>
                            </Card>
                        </Grid.Column>



                    </Grid.Row>

                </Grid>
            </Container>
        );
    };
};