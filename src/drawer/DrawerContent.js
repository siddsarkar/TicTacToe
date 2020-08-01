import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  BackHandler,
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';

export function DrawerContent(props) {
  return (
    <View style={styles.drawer}>
      <Icon style={styles.icon} name="meh" size={100} color="#fff" />

      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Home');
        }}>
        <Text style={styles.text}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          props.navigation.navigate('Notifications');
        }}>
        <Text style={styles.text}>About</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.links}
        onPress={() => {
          BackHandler.exitApp();
        }}>
        <Text style={styles.text}>Exit</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footer}>
        <Text style={styles.footertext}>
          Developed with Love{'  '}
          <Icon style={{marginLeft: 20}} name="heart" size={11} color="#fff" />
        </Text>
        <Text style={styles.footertext}>by Siddhartth</Text>
        <Text style={styles.footertext}>version 0.0.3</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  drawer: {
    flex: 1,
  },
  links: {
    // backgroundColor: 'grey',
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 2,
  },
  text: {
    fontSize: 25,
    color: '#fff',
  },
  icon: {
    alignSelf: 'center',
    marginTop: 40,
    marginBottom: 50,
  },
  footertext: {
    color: '#fff',
    opacity: 0.5,
  },
  footer: {
    position: 'absolute',
    bottom: 20,
    alignItems: 'center',
    width: '100%',
  },
});
