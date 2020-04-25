import React, { Component } from 'react'
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native'
import { SearchBar } from 'react-native-elements';
import Drawer from './Drawer'
import Footer from './Footer'
import FriendsCard from './FriendsCard'

class FindFriends extends Component {


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
                <View style={{ flex: 1 }}>
                    <View>
                        <Drawer props={this.props} />
                    </View>
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

                    <View>
                        <ScrollView showsVerticalScrollIndicator={false} style={{marginBottom:15}}>
                            <FriendsCard />
                            <FriendsCard />
                            <FriendsCard />
                            <FriendsCard />
                            <FriendsCard />
                            <FriendsCard />
                            <FriendsCard />
                            <FriendsCard />
                            <FriendsCard />
                            <FriendsCard />
                            <FriendsCard />
                            <FriendsCard />
                        </ScrollView>

                    </View>
                </View>





                {/* Footer  */}
                <View style={{backgroundColor:"white"}}>
                <Footer props={this.props}/>
                </View>

            </SafeAreaView>
        )
    }
}

export default FindFriends
