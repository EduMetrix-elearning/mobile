import React, { Component } from 'react'
import { View, Text, ScrollView, FlatList,Dimensions } from 'react-native'
import { SearchBar } from 'react-native-elements';
import TabButton from './TabButton'
import style from '../Stylesheets/SearchPageStyle'
import Drawer from './Drawer'
import SearchPics from './SearchPics'
const tabNames = ["Animals", "Nature", "Food", "Auto", "TV & Movies", "Games", "Bikes"]
const images = [
    require('../Assets/kapil.jpg'),
    require('../Assets/ad.png'),
    require('../Assets/kapil.jpg'),
    require('../Assets/kapil.jpg'),
    require('../Assets/kapil.jpg'),
    require('../Assets/kapil.jpg'),
    require('../Assets/kapil.jpg'),
    require('../Assets/kapil.jpg'),
    require('../Assets/kapil.jpg'),
    require('../Assets/kapil.jpg'),
    require('../Assets/kapil.jpg'),
]
const ITEM_WIDTH = Dimensions.get('window').width

class SearchPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            search: '',
            columns:2
        }
    }

    updateSearch = search => {
        this.setState({ search });
    };
    getData = (data) => {
        console.log("get data", data);

    }

    render() {
        const { search } = this.state;
        const {columns} = this.state

        return (

            // <KeyboardAvoidingView behavior="position">
            <View>
                  <Drawer getData={this.getData} props ={this.props}/>
                <SearchBar
                    placeholder="Search here...."
                    onChangeText={this.updateSearch}
                    cancelIcon
                    value={search}
                    inputStyle={
                        {
                            color: "white",
                            fontSize: 15
                        }
                    }
                />
                <View style={style.tabsViewContainer}>
                    <ScrollView horizontal={true}>

                        {

                            tabNames.map((item, key) => (
                                <TabButton name={item} />
                            ))
                        }

                    </ScrollView>
                </View>
                <View style = {style.searchPicContainer}>
                  <FlatList
                  numColumns={this.state.columns}
                  data = {images}
                  renderItem={({item})=>{
                     return <SearchPics itemWidth={(ITEM_WIDTH-(3*columns))/columns} image = {item}/>
                  }}
                  keyExtractor ={(index)=>{
                      return index
                  }}
                  />
                </View>
               
            </View>

        )
    }
}

export default SearchPage