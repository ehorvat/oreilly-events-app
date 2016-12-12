import React, { Component } from 'react';
import { StatusBar } from 'react-native'

export default class StatusBarBackground extends Component {
   constructor() {
      super();
   }
   render() {
      return (
         <StatusBar
            backgroundColor = "blue"
            barStyle = "light-content"
            hidden = {false}
         />
      );
   }
}
