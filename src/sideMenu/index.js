// you can see here
// react-native-linear-gradient
// react-native-blur-overlay
// react-native-vector-icons 

import React, { useState, useEffect } from 'react';

import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  Text,
  TextInput,
  FlatList
} from 'react-native';

import EntypoIcon from 'react-native-vector-icons/Entypo';
EntypoIcon.loadFont();

import SideMenu from './SideMenu';

export default function SideMenuScreen({ navigation, route }) {

  const [showMenu, setShowMenu] = useState(false);

  function toggleMenu(showMenu) {
    setShowMenu(!showMenu);
  }

  function goPage(page) {
    setShowMenu(false);    
    console.log(page)
  }

  return (
    <View style={styles.container}>
      <View style={styles.iconRow}>
        <TouchableOpacity onPress={() => { console.log('back') }}>
          <EntypoIcon name="chevron-thin-left" style={styles.icon}></EntypoIcon>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleMenu(showMenu)}>
          <EntypoIcon name="menu" style={styles.icon}></EntypoIcon>
        </TouchableOpacity>
      </View>
      {
        showMenu &&
        <SideMenu showMenu={showMenu} goPage={goPage} toggleMenu={toggleMenu} />
      }

      <Text style={styles.txt}>Front Page</Text>
    </View>
  );
}

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  iconRow: {
    width: '90%',
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    alignSelf: 'center',
    marginTop: 50,
    // borderWidth: 1
  },
  icon: {
    fontSize: 18,
    color: '#00BCF2',
  },  
  txt: {
    fontSize: 18,
    color: '#000000',
    alignSelf: 'center'
  },  
});