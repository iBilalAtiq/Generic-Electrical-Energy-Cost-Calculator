//React Modules
import React, { Component } from 'react';
import {View,Text,ToastAndroid, ScrollView} from 'react-native';

//Styles
import styles from './styles';

//Buttons Components
import NumberButtons from './NumberButtons';

//constants
const buttons = [
  ['CLEAR', 'DEL', 'Calculate'],
  ['7', '8', '9'],
  ['4', '5', '6'],
  ['1', '2', '3'],
  ['0']
]

const initialOutput = '0';
const maxLength = 57;

//Serves as the Container Class
export default class CalcApp extends Component {
  //Initialization
  constructor(props){
      super(props);
      this.state = {
          _output: initialOutput,
      }
      this._handleEvent = this._handleEvent.bind(this);
  }

  //Handles actions on button press
  _handleEvent = (value) => {
    if(!isNaN(value) || value=='.'){
      this._concatToOutput(value);
    }
    else{
      switch(value) {

        case buttons[0][0]:
          this._initOutput();
          break;
        
        case buttons[0][1]:
          if (this.state._output.length === 1){
            this._initOutput();
          }
          else {
            this._replaceLastIndex('');
          }
          break;

        case buttons[0][2]:
          this._evaluate();
          break;

        default:
          let strLastChar = this.state._output.slice(-1);
          if(isNaN(strLastChar)){
            this._replaceLastIndex(value)
          }
          else{
            this._concatToOutput(value);
          }
          break;
      }
    }
  }
  
  //Function to concat user input to output screen
  _concatToOutput = (value) => {
    if(this.state._output.length>=maxLength){
      this._showToast('Maximum Expression Length of ' + maxLength + ' is reached.');
    }
    else{
      if(this.state._output !== initialOutput){
        this.setState({_output: this.state._output + '' + value + ''})
      }
      else{
        this.setState({_output: value + ''})
      }
    }
  }

  //Function to replace the last index of the output
  _replaceLastIndex = (value) => {
    var str1 = this.state._output.replace(/.$/,value)
    this.setState({
      _output: str1
    })
  }

  //Validate and Calculate the output state
  _evaluate = () => {
    try{
      let strCurOutput = this.state._output;
      if(strCurOutput<100){
        strCurOutput = strCurOutput * 5
      }
      else if(strCurOutput<500){
        temp = strCurOutput - 100
        temp = temp * 8
        strCurOutput = temp + 500
        
      }
      else {
        temp1 = strCurOutput - 500
        temp1 = 10 * temp1
        strCurOutput = temp1 + 3700
      }
      this.setState({
        _output: strCurOutput,
      })
    }
    catch(exception){
      /* console.log('exception: ' + exception); */
      this._showToast('Invalid format used.');
    }
  }


  //Function to initialize output state
  _initOutput = () => {
    this.setState({
      _output: initialOutput
    })
  }

  //Function to display an android toast
  _showToast = (value) => {
    ToastAndroid.show(value, ToastAndroid.SHORT);
  }
 
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.contOutput}>
          <View style={styles.placeHolderOutput}>
            <Text style={styles.txtDefault}>{this.state._output}</Text>
          </View>
        </View>

        <View style={styles.contButtons}>
          <NumberButtons onBtnPress={this._handleEvent} buttons={buttons}/>
        </View>
        
      </View>
    );
  }
}