import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Button, Icon } from 'native-base';

import { fetchCustumer } from '../actions/custumer-action';
import main from './main';
import ListItem from './ListItem';
import axios from 'axios';

import { Actions } from 'react-native-router-flux';

class listCustumer extends Component {
    
    componentDidMount() {
        this.props.fetchCustumer();
    }

    addCustumer = () => {
        Actions.NewItem();
    }

    onItemPress(id){
        axios.delete('http://5aa6fbbdaf352a001477f5dd.mockapi.io/api/v1/customer/'+id);                 
    }

    render() {
        if (!this.props.custumers) {
            return (
                <View>
                    <Text>Loading...</Text>
                </View>
            )
        }

        console.log(this.props.custumers);

        const custumersItem = this.props.custumers.map(custumer => {
            return <ListItem key={custumer.id} item={custumer} onItemPress={this.onItemPress} />
        })

        return (
            <View>
                <Button onPress={() => this.addCustumer() } block primary>
                    <Text>  Add Custumer  </Text>
                </Button>
                <ScrollView>
                    {custumersItem}
                </ScrollView>                
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

export default connect(mapStateToProps, mapDispatchToProps)(listCustumer);