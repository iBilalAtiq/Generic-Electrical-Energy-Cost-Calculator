import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Posts from './screens/posts';
import ViewPost from './screens/view-post';
import AddPost from './screens/add-post';
import { Button } from 'react-native';


const AppRoutes = () => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen name="Posts" component={Posts} 
                options={({navigation, route}) => ({
                    headerRight: () => {
                        return (
                            <Button 
                                title="Add to Slabs" 
                                onPress={() => navigation.navigate('AddPost')} 
                            />
                        );
                    }
                })}
            />
            <Stack.Screen name="ViewPost" component={ViewPost} 
                options={({navigation, route}) => ({
                    username: route.params.username.substring(1, 15) + '...'
                })}
            />
            <Stack.Screen name="AddPost" component={AddPost} />
        </Stack.Navigator>
    )
}

export default AppRoutes;