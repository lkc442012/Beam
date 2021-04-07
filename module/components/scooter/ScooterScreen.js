import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import { connect } from 'react-redux';
import * as redux from './redux';
import { Spinner, Header } from '../../element';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

class Scooter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLongitude: 0,
      currentLatitude: 0,
      scooterListData: [],
    };
  }

  componentDidMount() {
    const { getScooterList } = this.props;

    this.getCurrentLocation();
    getScooterList();
  }

  UNSAFE_componentWillReceiveProps(nextProps, newProps) {
    const {
      scooter: { scooterListData },
    } = nextProps;

    if (
      scooterListData &&
      scooterListData !== this.props.scooter.scooterListData
    ) {
      this.setState({
        scooterListData,
      });
    }
  }

  async getCurrentLocation() {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );

      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        Geolocation.getCurrentPosition(info => {
          this.setState({ currentLongitude: info.coords.longitude });
          this.setState({ currentLatitude: info.coords.latitude });
        });
      } else {
        Alert.alert('Error', 'Location permission denied', [
          {
            text: 'Cancel',
            style: 'cancel',
          },
        ]);
      }
    } catch (err) {
      console.warn(err);
    }
  }

  calculateDistance(currentLat, currentLong, lat, long) {
    const EARTH_RADIUS = 6377.830272;
    const currentLatInRad = this.toRad(currentLat);
    const currentLongInRad = this.toRad(currentLong);
    const latInRad = this.toRad(lat);
    const longInRad = this.toRad(long);
    const distance = (
      EARTH_RADIUS *
      Math.acos(
        Math.sin(currentLatInRad) * Math.sin(latInRad) +
          Math.cos(currentLatInRad) *
            Math.cos(latInRad) *
            Math.cos(longInRad - currentLongInRad),
      )
    ).toFixed(2);

    return distance.toString();
  }

  toRad(angle) {
    return (angle * Math.PI) / 180;
  }

  render() {
    const {
      navigation,
      scooter: { isFetching },
    } = this.props;
    const { scooterListData, currentLatitude, currentLongitude } = this.state;
    console.log('isFetching', isFetching);
    console.log('scooterListData', scooterListData);

    return (
      <View style={styles.container}>
        <Header title="Map" />
        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          initialRegion={{
            latitude: 1.3521,
            longitude: 103.8198,
            latitudeDelta: 0.25,
            longitudeDelta: 0.25,
          }}>
          {this.state.scooterListData !== undefined &&
            this.state.scooterListData.map((scooterListData, index) => (
              <Marker
                key={index}
                coordinate={scooterListData.coordinate}
                title={'Serial Code: ' + scooterListData.serialCode}
                description={
                  'Scooter distance: ' +
                  this.calculateDistance(
                    currentLatitude,
                    currentLongitude,
                    scooterListData.coordinate.latitude,
                    scooterListData.coordinate.longitude,
                  ) +
                  'km'
                }>
                {parseInt(scooterListData.battery, 10) < 25 ? (
                  <View
                    style={{
                      borderColor: 'red',
                      borderWidth: 1,
                      borderRadius: 15,
                      backgroundColor: 'white',
                      width: 30,
                      height: 30,
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../image/noBattery.png')}
                      style={{
                        position: 'absolute',
                        left: 3,
                        bottom: 10,
                        height: 14,
                        width: 14,
                      }}
                    />
                    <Image
                      source={require('../../image/scooter.png')}
                      style={{ height: 25, width: 25, opacity: 0.5 }}
                    />
                  </View>
                ) : (
                  <View
                    style={{
                      borderColor: 'green',
                      borderWidth: 1,
                      borderRadius: 15,
                      backgroundColor: 'white',
                      width: 30,
                      height: 30,
                      alignItems: 'center',
                    }}>
                    <Image
                      source={require('../../image/battery.png')}
                      style={{
                        position: 'absolute',
                        left: 3,
                        bottom: 12,
                        height: 10,
                        width: 15,
                      }}
                    />
                    <Image
                      source={require('../../image/scooter.png')}
                      style={{ height: 25, width: 25, opacity: 0.5 }}
                    />
                  </View>
                )}
              </Marker>
            ))}
        </MapView>
        {isFetching && <Spinner />}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mintcream',
  },
  map: {
    flex: 1,
  },
});

const mapStateToProps = store => ({
  scooter: store[redux.NAME].scooter,
});

const mapDispatchToProps = {
  getScooterList: redux.getScooterListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Scooter);
