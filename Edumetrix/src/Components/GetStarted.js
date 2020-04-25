import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput, FlatList } from 'react-native'
import DatePicker from 'react-native-datepicker';
import style from '../Stylesheets/GetStartedStyle'
import Icon from 'react-native-vector-icons/MaterialIcons'
import Modal from 'react-native-modal';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'India',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Brazil',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'SriLanka',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'America',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'India',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Brazil',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'SriLanka',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'America',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'India',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Brazil',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'SriLanka',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'America',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'India',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Brazil',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'SriLanka',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'America',
    },
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'India',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Brazil',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'SriLanka',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'America',
    }
];

const stateData = [{
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Karnataka',
}, {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Andhra Pradesh',
}]

class GetStarted extends Component {

    constructor(props) {
        super(props)

        this.state = {
            selectedDate: "",
            Country: "Select Country",
            State: "Select State",
            isModalVisible: false,
            isStateModel: false
        }
    }

    setDatevalue = (date) => {

        console.log("selected date", date);

        this.setState({
            selectedDate: date
        })
    }

    toggleMOdel = () => {
        this.setState({
            isModalVisible: !this.state.isModalVisible
        })
    }

    toggleStateModel = () => {
        this.setState({
            isStateModel: !this.state.isStateModel
        })
    }

    setCountry = (item) => {
        this.setState({
            Country: item.title,
            isModalVisible: !this.state.isModalVisible
        })

    }

    setCountryState = (item) => {
        this.setState({
            State: item.title,
            isStateModel: !this.state.isStateModel
        })
    }

    Item = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => this.setCountry(item)}>
                <View style={style.modelItemView}>
                    <Text >{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    StateItem = ({ item }) => {

        return (
            <TouchableOpacity onPress={() => this.setCountryState(item)}>
                <View style={style.modelItemView}>
                    <Text >{item.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    renderMOdel = () => {

        return (
            <View>
                <Modal isVisible={this.state.isModalVisible} onBackdropPress={this.toggleMOdel}>
                    <View style={style.modelView}>

                        <View style={style.countryHeadingView}>
                            <Text style={style.countryHeading}>Select Country</Text>
                        </View>

                        <FlatList
                            data={DATA}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={this.Item}

                        />

                    </View>
                </Modal>
            </View>
        )
    }

    renderStateModel = () => {
        return (
            <View>
                <Modal isVisible={this.state.isStateModel} onBackdropPress={this.toggleStateModel}>
                    <View style={style.modelView}>

                        <View style={style.countryHeadingView}>
                            <Text style={style.countryHeading}>Select State</Text>
                        </View>

                        <FlatList
                            data={stateData}
                            keyExtractor={(item, index) => index.toString()}
                            renderItem={this.StateItem}
                        />

                    </View>
                </Modal>
            </View>
        )
    }

    render() {
        return (

            <SafeAreaView style={style.GetStartedSafeArea}>
                <View style={style.GetStartedContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View style={style.subContainer}>
                            <View style={style.imageView}>
                                <Image source={require('../Assets/logoCoin.png')} style={style.GetStartedImage} />
                            </View>
                            <View style={style.title}>
                                <Text style={style.titleStyle}>Please complete the following steps</Text>
                            </View>
                            <View style={style.textfieldView}>
                                <DatePicker
                                    style={{ width: "100%" }}
                                    placeholder="Date of birth"

                                    mode="date"
                                    format="DD-MM-YYYY"
                                    date={this.state.selectedDate}
                                    confirmBtnText="confirm"
                                    customStyles={{
                                        dateIcon: {
                                            position: "relative",
                                            right: 0,

                                        },
                                        dateInput: {
                                            borderWidth: 0,
                                            width: "100%",
                                            display: "flex",
                                            flexDirection: "row",
                                            justifyContent: "flex-start",

                                        },

                                    }}
                                    onDateChange={date => this.setDatevalue(date)}

                                />
                            </View>
                            <View style={style.textfieldView}>
                                <TextInput
                                    placeholder="Address"
                                    multiline
                                />
                            </View>
                            <View style={style.textfieldView}>
                                <TouchableOpacity onPress={this.toggleMOdel} style={style.countryInput}>
                                    <Text
                                        style={(this.state.Country === "Select Country") ? style.CountryTextDefault : style.countryText}>
                                        {this.state.Country}</Text>
                                    <Icon
                                        name="arrow-drop-down"
                                        size={28}
                                        color="gray"
                                    />
                                </TouchableOpacity>

                            </View>

                            <View style={style.textfieldView}>
                                <TouchableOpacity onPress={this.toggleStateModel} style={style.countryInput}>
                                    <Text style={(this.state.State === "Select State") ? style.CountryTextDefault : style.countryText}>
                                        {this.state.State}</Text>
                                    <Icon
                                        name="arrow-drop-down"
                                        size={28}
                                        color="gray"
                                    />
                                </TouchableOpacity>

                            </View>

                            <View style={style.textfieldView}>
                                <TextInput
                                    placeholder="School"
                                />
                            </View>
                            <View style={style.textfieldView}>
                                <TextInput
                                    placeholder="Student ID"
                                />
                            </View>

                            <View style={style.nextBtnView}>
                                <TouchableOpacity style={style.nextTouch}>
                                    <Text style={{ color: "#fff" }}>Next</Text>
                                </TouchableOpacity>
                            </View>

                        </View>


                        <View style={style.conditionsView}>
                            <TouchableOpacity style={{flexDirection:"row"}}>
                                <Text>Desclaimer</Text>
                                <View style={style.dotView}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:"row",marginLeft:5}}>
                                <Text>Privacy policy</Text>
                                <View style={style.dotView}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={{flexDirection:"row",marginLeft:5}}>
                                <Text>Terms of Services</Text>
                              
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
                {this.renderMOdel()}
                {this.renderStateModel()}
            </SafeAreaView>
        )
    }
}

export default GetStarted