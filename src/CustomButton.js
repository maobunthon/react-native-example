import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export default class MyButton extends React.Component {
  render() {
    let { titleColor, title, backgroundColor, onPress, style } = this.props
    if (! titleColor) {
        titleColor = '#000'
    }
    if (! backgroundColor) {
        backgroundColor = '#fff'
    }
    return (
        <TouchableOpacity onPress={onPress} style={[style, {backgroundColor: backgroundColor, padding: 5}]}>
            <Text style={{color: titleColor}}>{title}</Text>
        </TouchableOpacity>
    );
  }
}