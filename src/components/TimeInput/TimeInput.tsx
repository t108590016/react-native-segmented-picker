import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";

export interface Props {
  setTime: (hour: string, minute: string) => void,
}
  
interface State {
  inputHour: string;
  inputMinute: string;
}
export default class SegmentedPicker extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      inputHour: "",
      inputMinute: "",
    };
  }
  render() {
    const { inputHour, inputMinute } = this.state;  

  return (
  <View 
    style={{ width: '100%', justifyContent: "center", alignItems: "center", padding: 20 }}>
    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: 'rgba(0,0,0,.05)', width: '100%', height: 50 }}>
      <TextInput
        value={inputHour}
        keyboardType={"numeric"}
        style={{
            backgroundColor: 'white',
            borderColor: parseInt(inputHour) > 24 ? "red" : "#E0E0E0",
            textAlign: 'center',
            height: 40,
            width: 50,
            borderWidth: 1, 
            padding: 0
        }} 
        numberOfLines={1}
        blurOnSubmit={true}
        onChangeText={(val) => this.setState({inputHour: val})}
        onEndEditing={() => {
          if (inputHour && inputMinute) {
          ((parseInt(inputHour) < 24 && parseInt(inputMinute) < 60) && this.props.setTime(inputHour, inputMinute))
          console.log("hour onEndEditing", inputHour, inputMinute)
          }
        }}
        maxLength={2}
      />

      <Text
        style={{ fontSize: 16, color: '#0000008a', margin: 5 }} >
        {":"}
      </Text>
      <TextInput
        value={inputMinute}
        keyboardType={"numeric"}
        style={{
            backgroundColor: 'white',
            borderColor: parseInt(inputMinute) > 60  ? "red" : "#E0E0E0",
            textAlign: 'center',
            height: 40,
            width: 50,
            borderWidth: 1, 
            padding: 0
        }} 
        numberOfLines={1}
        blurOnSubmit={true}
        onChangeText={(val) => this.setState({inputMinute: val})}
        onEndEditing={() => {
          if (inputHour && inputMinute) {
          ((parseInt(inputHour) <= 24 && parseInt(inputMinute) < 60) && this.props.setTime(inputHour, inputMinute))
          console.log("minute onEndEditing", inputHour, inputMinute)
          }
        }}
        maxLength={2}
      />
    </View>
  </View>
);
}}