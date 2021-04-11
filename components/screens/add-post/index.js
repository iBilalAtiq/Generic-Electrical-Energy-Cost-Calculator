import React, {Component} from 'react';
import { ActivityIndicator, Alert, Button, TextInput, View } from 'react-native';


import AppStyles from '../../AppStyles';
import http from '../../services/http';
import Styles from './styles';


class AddPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '1',
            isLoading: true
        };
        this.data = {}; //JSON Object
    }
    
    // Submitting the post

    submitPost = async () => {
        this.setState({
            isLoading: true
        });
        try {
            const result = await http.post('posts', this.data);
            if (result.status == 201) {
                this.setState({
                    isLoading: false
                })
                Alert.alert('Success', 'Post has been Sent', [
                    {text: 'OK', onPress: this.goBackHandler}
                ])
            }
        } catch(ex) {
            this.setState({
                isLoading: false
            })
            Alert.alert('Error', 'Something went wrong');
        }
    }
    
    goBackHandler = () => {
        this.props.navigation.goBack();
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 2000)
    }

    // View post insertion

    render() {
        return (
            <View style={AppStyles.container}>
                {this.state.isLoading && (
                    <ActivityIndicator size="large" color="black" />
                )}
                <TextInput 
                    placeholder="Name"
                    style={Styles.body}
                    // onChangeText={(title) => this.setState({title})}
                    onChangeText={(title) => {this.data.title = title}}
                    // ref={(input) => this.data.title = input.value}
                />
                
                <TextInput 
                    placeholder="Email"
                    style={Styles.body}
                    // onChangeText={(body) => this.setState({body})}
                    onChangeText={(body) => {this.data.body = body}}
                    // ref={(input) => this.data.body = input.value}
                />
                <TextInput 
                    placeholder="Phone"
                    style={Styles.body}
                    // onChangeText={(body) => this.setState({body})}
                    onChangeText={(body) => {this.data.body = body}}
                    // ref={(input) => this.data.body = input.value}
                />
                 <TextInput 
                    placeholder="Website"
                    style={Styles.body}
                    // onChangeText={(body) => this.setState({body})}
                    onChangeText={(body) => {this.data.body = body}}
                    // ref={(input) => this.data.body = input.value}
                />
                
                <View style={Styles.submitBtn}>
                    <Button color='blue' title="Submit" onPress={() => this.submitPost()} />
                </View>
                <View style={Styles.cancelBtn}>
                    <Button color='orange' title="Cancel" onPress={() => this.goBackHandler()} />
                </View>
            </View>
        );
    }
};

export default AddPost;