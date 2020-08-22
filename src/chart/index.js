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

import { LineChart } from "react-native-chart-kit";

export default function ReportScreen({ navigation, route }) {

  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 86, 76],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
  };

  const chartConfig = {
    // backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    // backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(200, 66, 56, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };

  return (
    <View style={styles.container}>
      
      <View style={styles.chartPart}>
        <LineChart
          data={chartData}
          width={width * 0.9}
          height={250}
          verticalLabelRotation={0}
          chartConfig={chartConfig}
          style={{marginVertical: 20}}
          verticalLabelRotation={45}
          yAxisLabel='$'
        />
      </View>

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
  txt: {
    fontSize: 16,
    color: '#000000',
    alignSelf: 'center',
    marginTop: 20
  },

  chartPart:{
    width: '100%',
    height: '50%',
    alignSelf: 'center',
    marginTop: 100,
    // borderWidth: 1
  },

});