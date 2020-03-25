import React, { Component } from 'react'
import { View, Text, Image, Animated } from 'react-native'
import style from '../Stylesheets/SearchPageStyle'

class SearchPics extends Component {

    constructor(props) {
        super(props)

        this.state = {
           
        }
    }

    render() {
       const itemWidth = this.props.itemWidth
        
        return (
            <View >
                <Animated.View style={{
                    margin: 1
                }}>
                    <Image style = {{width:itemWidth,height:200}} source = {this.props.image}/>
                </Animated.View>
            </View>
        )
    }
}

export default SearchPics