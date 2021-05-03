import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const Aboutscreen = ({navigation}) => (
  <View style={styles.container}>
    <Icon
      style={styles.menuIcon}
      name="back"
      size={30}
      color="lightgrey"
      onPress={() => {
        navigation.navigate('Home');
      }}
    />
    <Text style={styles.text}>sidharth</Text>
    <Text style={styles.text}>loves you</Text>
    <Text style={styles.text}>3000</Text>
  </View>
);
export default Aboutscreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
    fontSize: 60,
  },
  menuIcon: {
    position: 'absolute',
    top: 20,
    left: 20,
    // backgroundColor: '#000',
    // color: '#fff',
    zIndex: 999,
  },
});
