import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Icon, Content, Form, Item, Label, Input } from 'native-base';

import axios from 'axios';

import { Actions } from 'react-native-router-flux';

import { fetchCustumer } from '../actions/custumer-action';

const EditItem = ({custumer}) => {
    
    const { _id, name, phone, email } = custumer;

    saveCustumer = () => {
        console.log(this.state);

        axios.put('http://5aa6fbbdaf352a001477f5dd.mockapi.io/api/v1/customer/'+ custumer._id, custumer);

        this.props.fetchCustumer();

        Actions.pop();
    }  

        return (
            <View>
                <Form>
                    <Item stackedLabel>
                        <Label>Name</Label>
                        <Input
                            value={name}
                            onChangeText={name => this.setState({ name })}
                        />
                    </Item>
                    <Item stackedLabel last>
                        <Label>Phone</Label>
                        <Input
                            value={phone}
                            onChangeText={phone => this.setState({ phone })}
                        />
                    </Item>
                    <Item stackedLabel last>
                        <Label>Email</Label>
                        <Input
                            value={email}
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


export default EditItem;