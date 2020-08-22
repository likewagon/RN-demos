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
import PropTypes from 'prop-types';

import BlurOverlay, { closeOverlay, openOverlay } from 'react-native-blur-overlay';
import LinearGradient from 'react-native-linear-gradient';

export default function SideMenu({ showMenu, goPage, toggleMenu }) {

  useEffect(() => {
    if (showMenu) openOverlay();
    else closeOverlay();
  });

  renderSideMenu = () => {
    return (
      <View style={styles.sideMenu}>
        <LinearGradient style={styles.back} colors={['#0078D4', '#00BCF2']} useAngle={true} angle={360} />
        {
          [
            { name: 'Home' },
            { name: 'Envelop' },
            { name: 'Report' },
            { name: 'Setting' },
            { name: 'Logout' },
          ].map((item, index) => (
            <View key={index}>
              <TouchableOpacity style={[styles.item, item.name == 'Home' ? { marginTop: 60 } : null]} onPress={() => goPage(item.name)}>
                <View style={styles.itemRight}>
                  <Text style={styles.itemTxt}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            </View>
          ))
        }
      </View>
    );
  }

  return (
    <BlurOverlay
      radius={50}
      downsampling={1}
      brightness={-200}
      onPress={() => {
        closeOverlay();
        toggleMenu(showMenu);
      }}
      customStyles={{ alignItems: 'center', justifyContent: 'center' }}
      blurStyle="dark"
      children={renderSideMenu()}
    />
  )
}

const styles = StyleSheet.create({
  sideMenu: {
    width: '75%',
    height: '100%',
    alignSelf: 'flex-end',
  },
  back: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    borderTopLeftRadius: 30,
    borderBottomLeftRadius: 30,
  },
  item: {
    width: '95%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
    // borderWidth: 1
  },    
  itemRight: {
    width: '70%',
    height: '100%',
    justifyContent: 'center',
    // borderWidth: 1
  },
  itemTxt: {
    fontSize: 16,
    color: '#ffffff'
  },
});

SideMenu.propTypes = {
  showMenu: PropTypes.bool.isRequired,
  goPage: PropTypes.func.isRequired,
  toggleMenu: PropTypes.func.isRequired
};
