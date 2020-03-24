import React, { Component } from 'react'
import { View, Text, SafeAreaView,TouchableOpacity,Image} from 'react-native'
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import style from '../Stylesheets/DrawerStyle'


class Drawer extends Component {

    constructor(props) {
        super(props)

        this.state = {

        }
    }

    // toggleDrawer = () => {
    //     this.props.navigationProps.toggleDrawer();
        
    // }
    render() {

        return (
            <SafeAreaView style={style.safeAreaView}>
                <View style={style.drawerHeader}>
                   
                    <View style = {style.drawerMenu}>
                        <TouchableOpacity >
                          <Image source = {require('../Assets/drawer.png')} style={style.drawerImg}/>
                        </TouchableOpacity>
                    </View>

                    <View style = {style.headerMenuContainer}>
                        <Text>icons</Text>
                        <Text>icons</Text>
                        <Text>icons</Text>
                    </View>
                </View>
              
            </SafeAreaView>
        )
    }
}

// const drawerNavigation = createDrawerNavigator({
//   screen1:{

//       navigationOptions:{
//           drawerLabel:"Home"
//       }
//   }    
// })

// export default createAppContainer(drawerNavigation);

export default Drawer