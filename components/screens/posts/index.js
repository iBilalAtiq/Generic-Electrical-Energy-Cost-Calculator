import React, {Component} from 'react';
import http from '../../services/http';
import AppStyles from '../../AppStyles';
import { FlatList, Text, View } from 'react-native';

class Posts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }
// Fetching data from an api
    componentDidMount() {
        const that = this;
        http.get('users', 
            function (response) {
                console.log(response);
                // _storeData('users',response)
                that.setState({
                    posts: response,
                    errorMsg : ''
                });
            },
            function (error) {
                console.log(error);
                that.setState({
                    posts: [],
                    errorMsg: 'Error Fetching Data'
                });
            }
        );
    }
// Handling navigation
    viewPosts = (post) => {
        // Sending data to the next page
        this.props.navigation.navigate('ViewPost', post);
    }

    renderItem({item, index}) {
        return (
            <Text onPress={() => this.viewPosts(item)} style={AppStyles.item}>{item.username}</Text>
        )
    }

    renderList() {
        return (
            <FlatList 
                style={{flex: 1}}
                data={this.state.posts}
                keyExtractor={item => item.id + item.id}
                renderItem={this.renderItem.bind(this)}
            />
        )
    }

    render() {
        const {posts, errorMsg} = this.state;
        return (
            <View style={AppStyles.container}>
                {/* <Text>Hello World</Text> */}
                {errorMsg ? <Text>{errorMsg}</Text>: null}
                {posts ? this.renderList(): null}
            </View>
        )
    }
}

// implemented Async

// const _storeData = async (key,data) => {
//     try {
//         console.log(key,data);
//       await AsyncStorage.setItem(
//         key,
//         data
//       );
//     } catch (error) {
//       // Error saving data
//     }
//   };

// const _retrieveData = async () => {
//     try {
//       const value = await AsyncStorage.getItem('TASKS');
//       if (value !== null) {
//         // We have data!!
//         console.log(value);
//       }
//     } catch (error) {
//       // Error retrieving data
//     }
// };

export default Posts;