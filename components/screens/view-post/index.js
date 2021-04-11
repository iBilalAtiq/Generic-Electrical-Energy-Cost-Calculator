import React, {Component} from 'react';
import { Text, View } from 'react-native';

import CalcApp from '../../Calculator/CalcApp';
import AppStyles from '../../AppStyles';
import Styles from './styles';

class ViewPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ServiceNumber: '',
            username: '',
            id: '',
            name: '',
            email: '',
            phone: '',
            website: '',
        };
    }

    // setting state variables

    componentDidMount() {
        let sn = this.padLeadingZeros(this.props.route.params.id, 10);
        this.setState({
            ServiceNumber: sn,
            id: this.props.route.params.id,
            username: this.props.route.params.username,
            name: this.props.route.params.name,
            email: this.props.route.params.email,
            phone: this.props.route.params.phone,
            website: this.props.route.params.website,
        })
    }

    // adding zeros in service id

    padLeadingZeros(num, size) {
        var s = num+"";
        while (s.length < size) s = "0" + s;
        return s;
    }

    render() {
        return (
            <View style={AppStyles.container}>
                <Text style={Styles.title}>Username: {this.state.username}</Text>
                <Text style={Styles.body}>Service Number: {this.state.ServiceNumber}</Text>
                <Text style={Styles.body}>ID: {this.state.id}</Text>
                <Text style={Styles.body}>Name: {this.state.name}</Text>
                <Text style={Styles.body}>Email: {this.state.email}</Text>
                <Text style={Styles.body}>Phone: {this.state.phone}</Text>
                <Text style={Styles.body}>Website: {this.state.website}</Text>
                <CalcApp/>
            </View>
        )
    }
}

export default ViewPost;