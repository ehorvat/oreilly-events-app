import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { ActionCreators } from '../actions'
import StatusBarBackground from '../components/StatusBarBackground'
import StatusBar from '../components/StatusBar'

import {
  Animated,
  StyleSheet,
  View,
  Text,
  NavigationExperimental,
  ScrollView,
  TouchableOpacity
} from 'react-native';

class AppContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {loading:true}
  }

  componentWillMount() {
    console.log("Component mounted")
    this.props.fetchConferences();

  }

  conferences() {
    return Object.keys(this.props.conferences).map(key => this.props.conferences[key] )
  }

  render() {
    console.log(this.conferences())
   return (
     <View>
      <StatusBar />
      <StatusBarBackground />
      <ScrollView>
     {this.conferences().map((conference, i) => {

        return (
          <View style={styles.parent} key={i}>
            <TouchableOpacity style={listItemStyle(conference.brandingColor)}>
              <Text>{conference.name}</Text>
            </TouchableOpacity>
          </View>
        )

     })}
     </ScrollView>
     </View>
    )
  }
}

listItemStyle = function(color) {
  return {
    height: 50,
    alignSelf: 'stretch',
    backgroundColor: color,
    justifyContent: 'center',
    alignItems: 'center'
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

function mapStateToProps(state) {
  return {
    navigationState: state.navigationState,
    conferences: state.conferences
  };
}

var styles = StyleSheet.create({
  parent: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
