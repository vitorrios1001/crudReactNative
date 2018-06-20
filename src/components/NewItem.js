import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Icon, Content, Form, Item, Label, Input } from 'native-base';

import axios from 'axios';

import { Actions } from 'react-native-router-flux';

import { fetchCustumer } from '../actions/custumer-action';

class NewItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: 'Test Name',
            phone: 'Test Phone ',
            email: 'Teste email'
        }
    }

    saveCustumer = () => {
        console.log(this.state);
        var user = {
            name: this.state.name,
            phone: this.state.phone,
            email: this.state.email
        }

        axios.post('http://5aa6fbbdaf352a001477f5dd.mockapi.io/api/v1/customer', user);

        this.props.fetchCustumer();

        Actions.pop();
    }

    render() {

        return (
            <View>
                <Form>
                    <Item stackedLabel>
                        <Label>Name</Label>
                        <Input
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}
                        />
                    </Item>
                    <Item stackedLabel last>
                        <Label>Phone</Label>
                        <Input
                            value={this.state.phone}
                            onChangeText={phone => this.setState({ phone })}
                        />
                    </Item>
                    <Item stackedLabel last>
                        <Label>Email</Label>
                        <Input
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </Item>
                    <Button onPress={() => this.saveCustumer()} >
                        <Text> Save </Text>
                    </Button>
                </Form>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return { custumers: state.custumers.all };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ fetchCustumer }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NewItem);