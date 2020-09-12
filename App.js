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
import Chart from './src/chart';
import NavigationRedux from './src/navigationRedux';
import DateMaskModernPicker from './src/dateMaskModernPicker';
import SnapCarousel from './src/snapCarousel';

const App: () => React$Node = () => {

  const demos = {
    PickerSelect: <PickerSelect />,
    SideMenu: <SideMenu />,
    Chart: <Chart />,
    NavigationRedux: <NavigationRedux />,
    DateMaskModernPicker: <DateMaskModernPicker />,
    SnapCarousel: <SnapCarousel />
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
            <TouchableOpacity style={{alignSelf: 'center', marginTop: 20}} onPress={() => setDemo(demos.Chart)}><Text>Chart</Text></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'center', marginTop: 20}} onPress={() => setDemo(demos.NavigationRedux)}><Text>Navigation Integrated with Redux Thunk</Text></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'center', marginTop: 20}} onPress={() => setDemo(demos.DateMaskModernPicker)}><Text>TextInput Date Mask And Modern DateTimePicker</Text></TouchableOpacity>
            <TouchableOpacity style={{alignSelf: 'center', marginTop: 20}} onPress={() => setDemo(demos.SnapCarousel)}><Text>Snap Carousel and Pagination</Text></TouchableOpacity>
          </ScrollView>
        </SafeAreaView>
        :
        demo
      }      
    </>
  );
};

export default App;
