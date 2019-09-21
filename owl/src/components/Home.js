import React from 'react';
import _ from 'lodash'
import faker from 'faker'
import { Menu, Segment, Input, Image, Container, Grid, Search, Header, Icon } from 'semantic-ui-react';


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

                    <Grid.Row>

                        <Grid.Column width={2}>
                        </Grid.Column>

                        <Grid.Column width={12}>
                            <Segment>
                                <div>Hey</div>

                            </Segment>

                        </Grid.Column>

                        <Grid.Column width={2}>
                        </Grid.Column>

                    </Grid.Row>


                </Grid>
            </Container>
        );
    };
};