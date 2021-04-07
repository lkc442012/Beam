import React from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';
import {
  Pressable,
  TouchableWithoutFeedback,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import ScooterScreen from '../components/scooter/ScooterScreen';
import TripScreen from '../components/trip/TripScreen';

const BottomTab = createBottomTabNavigator();

class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <BottomTab.Navigator
          tabBarOptions={{
            activeTintColor: 'blue',
            activeBackgroundColor: 'lightskyblue',
            inActiveBackgroundColor: 'whitesmoke',
            inactiveTintColor: 'grey',
            labelStyle: styles.labelStyle,
          }}>
          <BottomTab.Screen name="Map" component={ScooterScreen} />
          <BottomTab.Screen name="Trip" component={TripScreen} />
        </BottomTab.Navigator>
      </NavigationContainer>
    );
  }
}
const styles = StyleSheet.create({
  labelStyle: {
    fontSize: 15,
    marginBottom: 15,
  },
});

const mapStateToProps = store => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(App);
