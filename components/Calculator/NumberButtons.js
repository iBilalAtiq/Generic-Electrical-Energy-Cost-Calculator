//React Modules
import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableNativeFeedback
} from 'react-native';
const { StyleSheet } = React;

//Styles
const styles = {
    container: {
        flex:1,
        // innerWidth: 50,
        // outerWidth: 50,
        // innerHeight: 50,
        // outerHeight: 50
      },
    
      txtDefault: {
        color: '#000',
        fontSize: 22
      },
    
      contRow: {
        // flex: 1,
        flexDirection: 'row',
        innerWidth: 50,
        outerWidth: 50,
        innerHeight: 50,
        outerHeight: 50
      },
    
      contButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#000'
      }
  };

export default class NumberButtons extends Component {
    
    //This is for optimization
    
    //Component should render only once
    shouldComponentUpdate(nextProps, nextState){
        return false;
    }

    //This will call the bound function from its parent component to handle button press action/event 
    _handleOnPress = (value) => {
        requestAnimationFrame(() => {
            this.props.onBtnPress(value);
        });
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.props.buttons.map((row, index) => (
                        <View key={index} style={styles.contRow}>
                            { 
                                row.map((col,index) => (
                                    <TouchableNativeFeedback
                                        key={index}
                                        onPress={() => this._handleOnPress(col)}
                                        // background={TouchableNativeFeedback.SelectableBackground()}
                                        >
                                        <View style={styles.contButton}>
                                            <Text style={styles.txtDefault}>{col}</Text>
                                        </View>
                                    </TouchableNativeFeedback>
                                ))
                            }
                        </View>
                    ))
                }
            </View>
        );
    }
}