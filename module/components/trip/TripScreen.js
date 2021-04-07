import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import * as redux from './redux';
import { Spinner, Header } from '../../element';

class Trip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tripList: [],
    };
  }

  componentDidMount() {
    const { getTripList } = this.props;

    getTripList();
  }

  UNSAFE_componentWillReceiveProps(nextProps, newProps) {
    const {
      trip: { tripListData },
    } = nextProps;

    if (tripListData && tripListData !== this.props.trip.tripListData) {
      this.setState({
        tripListData,
      });
    }
  }

  calculatePrice(duration) {
    let price = 0;

    if (duration <= 30) {
      price = 10;
    } else if (duration > 30 && duration <= 45) {
      price = 15;
    } else {
      price = 20;
    }

    return price.toFixed(2);
  }

  render() {
    const {
      navigation,
      trip: { isFetching },
    } = this.props;
    const { tripListData } = this.state;
    console.log('isFetching', isFetching);
    return (
      <View style={styles.container}>
        <Header title="Trip List" />
        {isFetching && <Spinner />}
        <FlatList
          data={tripListData}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={() => <View style={styles.divider} />}
          renderItem={({ item, index, separators }) => (
            <View style={styles.tripList}>
              <TouchableHighlight
                key={index}
                onPress={() => null}
                underlayColor="mintcream"
                onShowUnderlay={separators.highlight}
                onHideUnderlay={separators.unhighlight}>
                <View style={styles.tripListItem}>
                  <Text style={styles.tripListItemTitle}>
                    Trip Date: {item.tripDate}
                  </Text>
                  <Text style={styles.tripListItemText}>
                    Trip Duration: {item.tripDuration} minutes
                  </Text>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.tripListItemText}>Price:</Text>
                    <Text style={styles.tripListItemPrice}>
                      SGD{this.calculatePrice(parseInt(item.tripDuration))}
                    </Text>
                  </View>
                </View>
              </TouchableHighlight>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'mintcream',
  },
  divider: {
    backgroundColor: 'mintcream',
  },
  tripList: {
    backgroundColor: 'aliceblue',
    margin: 10,
    borderRadius: 15,
  },
  tripListItem: {
    backgroundColor: 'aliceblue',
    borderRadius: 15,
    borderWidth: 0.5,
    borderColor: 'gray',
  },
  tripListItemTitle: {
    margin: 10,
    fontSize: 17,
    fontWeight: 'bold',
  },
  tripListItemText: {
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 15,
  },
  tripListItemPrice: {
    marginLeft: 5,
    marginBottom: 5,
    fontSize: 15,
    color: 'mediumvioletred',
  },
});

const mapStateToProps = store => ({
  trip: store[redux.NAME].trip,
});

const mapDispatchToProps = {
  getTripList: redux.getTripListRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
