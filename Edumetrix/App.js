/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Router from './src/Components/Router'
import 'react-native-gesture-handler';



class App extends Component{
  render(){
    return(
      <Router/>
    )
  }
}
// const App: () => React$Node = () => {
//   return (
   
//    <View>
//      <Text>
//        Hello
//      </Text>
//    </View>
//     );
// };



export default App;
