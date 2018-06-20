import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, CardItem, Body, Button } from 'native-base'
import { fetchCustumer } from '../actions/custumer-action';

import { Actions } from 'react-native-router-flux';

const ListItem = ({ item, onItemPress }) => {
    const { name, phone, email } = item;

    editItem = () => {
        Actions.EditItem();
    }

    return (
        <View>
            <TouchableOpacity onPress={() => onItemPress(item.id)} >
                <Card>
                    <CardItem>
                        <Body>
                            <Text>{name}</Text>
                            <Text>{phone}</Text>
                            <Text>{email}</Text>
                            <Button onPress={() => editItem()}>
                                <Text>    Edit    </Text>
                            </Button>
                        </Body>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        </View>
    );
};

export default ListItem;