import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import style from '../Stylesheets/ChatScreenStyle'
import Drawer from './Drawer'
import Footer from './Footer'
import { SearchBar } from 'react-native-elements';
import UsersList from './UsersList'

const userList = [
    { name: "kapil asthana", age: "26", image: "../Assets/kapil.jpg",time:"11:00 PM" },
    { name: "ravi maurya", age: "26", image: "../Assets/kapil.jpg",time:"12:00PM" },
    { name: "muhammad shafan", age: "26", image: "../Assets/kapil.jpg",time:"1:00 PM" },
    { name: "mohit pandey", age: "26", image: "../Assets/kapil.jpg",time:"2:00PM" },
    { name: "Shivam gupta", age: "26", image: "../Assets/kapil.jpg",time:"5:00 PM" },
    { name: "raman krishna", age: "26", image: "../Assets/kapil.jpg",time:"7:00PM" },
    { name: "john ramson", age: "26", image: "../Assets/kapil.jpg",time:"8:00 PM" },
    { name: "Bill gates", age: "26", image: "../Assets/kapil.jpg",time:"12:00PM" },
    { name: "steave jobs", age: "26", image: "../Assets/kapil.jpg",time:"4:00 PM" },
    { name: "sundar pichayi", age: "26", image: "../Assets/kapil.jpg",time:"9:00PM" }





]
class ChatScreen extends Component {


    constructor(props) {
        super(props)

        this.state = {
            search: ''
        }
    }
    updateSearch = search => {
        this.setState({ search });
    };

    render() {
        const { search } = this.state;
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>

                <View style={{ flex: 1,marginLeft:5,marginRight:5 }}>
                    {/* drawer header */}

                    <View>
                        <Drawer props={this.props} />
                    </View>
                    {/* search bar */}
                    <View>
                        <SearchBar
                            placeholder="Search here...."
                            onChangeText={this.updateSearch}
                            cancelIcon
                            value={search}
                            inputStyle={
                                {
                                    color: "black",
                                    fontSize: 15
                                }
                            }
                            containerStyle={
                                {
                                    backgroundColor: "white",
                                    borderColor: "red",
                                    borderBottomColor: "white",
                                    borderTopColor: "white"
                                }
                            }
                            inputContainerStyle={
                                {
                                    backgroundColor: "lightgray",
                                    borderRadius: 25
                                }
                            }


                        />
                    </View>

                    {/* chat list */}
                    <View>
                        <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:120}}>
                            {
                                userList.map((item, key) => (
                                    <UsersList props ={this.props} item ={item}/>
                                ))
                            }

                        </ScrollView>
                    </View>
                </View>

                <View style={style.footerView}>
                <Footer props={this.props}/>
                </View>
            </SafeAreaView>
        )
    }
}

export default ChatScreen