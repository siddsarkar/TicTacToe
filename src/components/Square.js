import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

function Square({value, onClick}) {
  return (
    <TouchableOpacity onPress={onClick} style={styles.square}>
      <Text style={styles.char}>{value}</Text>
    </TouchableOpacity>
  );
}

export default Square;

const styles = StyleSheet.create({
  square: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1b1b1b',
    borderWidth: 1, // solid
    borderColor: 'transparent',
    margin: 10,
    borderRadius: 5,

    lineHeight: 34,
    marginRight: -1,
    marginTop: -1,
    padding: 0,
    width: 100,
    height: 100,
  },
  char: {
    flexDirection: 'row',
    fontSize: 75,
    fontWeight: '700',
    color: '#fff',
  },
});
