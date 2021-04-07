import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

const propTypes = {
  title: PropTypes.string,
};

export default function Header({ title }) {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'darkblue',
  },
  headerText: {
    color: 'white',
    fontSize: 25,
    margin: 20,
    marginBottom: 10,
  },
});

Header.propTypes = propTypes;
