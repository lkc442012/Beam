import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ActivityIndicator } from 'react-native';

const propTypes = {
  message: PropTypes.string,
  color: PropTypes.string,
};

const defaultProps = {
  color: 'black',
};

export default function Spinner({ message, color }) {
  return (
    <View style={styles.container}>
      <View style={styles.spinnerContainer}>
        <ActivityIndicator size="large" animating color={color} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  spinnerContainer: {
    padding: 15,
    borderRadius: 5,
  },
});

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;
