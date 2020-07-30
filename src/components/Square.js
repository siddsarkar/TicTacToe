import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  Button,
} from 'react-native';

function Square(props) {
  return (
    <TouchableOpacity onPress={props.onClick} style={styles.square}>
      <Text>{props.value}</Text>
    </TouchableOpacity>
  );
}

export default Square;

const styles = StyleSheet.create({
  square: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1, //solid
    borderColor: '#999',
    flexDirection: 'row',
    fontSize: 36,
    fontWeight: '700',
    lineHeight: 34,
    marginRight: -1,
    marginTop: -1,
    padding: 0,
    textAlign: 'center',
    width: 70,
    height: 70,
  },
});
