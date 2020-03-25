import React, { Component, Children } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import style from '../Stylesheets/SearchPageStyle'




class TabButton extends Component {

    constructor(props) {
        super(props)

        this.state = {

            name: this.props.name
        }
    }

  handleTabs=()=>{
      console.log("tab name",this.state.name);
      
  }

    render() {

        return (
            <View>
               
                <TouchableOpacity onPress={this.handleTabs}>
                    <View style = {style.tabContainer}>
                        <Text style={{color:"white"}}>
                            {this.state.name}
                        </Text>

                    </View>
                </TouchableOpacity>
               
            </View>
        )
    }
}

export default TabButton
