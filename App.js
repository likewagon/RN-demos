/**
 * React Native Demos: Li QiMeng
 * https://github.com/likewagon/demos
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity
} from 'react-native';

import PickerSelect from './src/pickerSelect';
import SideMenu from './src/sideMenu';

const App: () => React$Node = () => {

  const demos = {
    PickerSelect: <PickerSelect />,
    SideMenu: <SideMenu />
  }

  const [demo, setDemo] = useState();
  
  return (
    <>
      {
        !demo ? 
        <SafeAreaView>
          <ScrollView>
            <TouchableOpacity style={{alignSelf: 'center', marginTop: 20}} onPress={() => setDemo(demos.PickerSelect)}><Text>Picker Select</Text></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'center', marginTop: 20}} onPress={() => setDemo(demos.SideMenu)}><Text>Side Menu</Text></TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
        :
        demo
      }      
    </>
  );
};

export default App;
