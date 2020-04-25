import React, { Component } from 'react'
import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo'
import Drawer from './Drawer'
import Footer from './Footer'
import style from '../Stylesheets/EarningPageStyle'

const likesTable = [
    { heading: "Total Likes", value: "0" },
    { heading: "Paid Likes", value: "0" },
    { heading: "Payble Likes", value: "0" },
    { heading: "Lifetime earning coins", value: "0" },
    { heading: "Payble coins", value: "0" }
]

const referralTable = [
    { heading: "Total Referral", value: "0" },
    { heading: "Paid Referral", value: "0" },
    { heading: "Payble Referral", value: "0" },
    { heading: "Lifetime earning coins", value: "0" },
    { heading: "Payble coins", value: "0" }
]
const ShareCounters = [
    { heading: "total Shares", value: "0" },
    { heading: "Paid Shares", value: "0" },
    { heading: "Payble Shares", value: "0" },
    { heading: "Lifetime earning coins", value: "0" },
    { heading: "Payble coins", value: "0" }
]
const additionalBonus = [
    { heading: "Aditional Bonus", value: "0" },
    { heading: "Paid Bonus", value: "0" },
    { heading: "Payble Bonus", value: "0" },
    { heading: "Lifetime earning coins", value: "0" },
    { heading: "Payble coins", value: "0" }
]

const paybleTable = [
    { heading: "Total Likes", value: "0" },
    { heading: "Total Referrals", value: "0" },
    { heading: "Total Shares", value: "0" },
    { heading: "Total Additional Bonus", value: "0" },
    
]

class EarningPage extends Component {

    constructor(props) {
        super(props)

        this.state = {
            width: "70%"
        }
    }

    render() {
        const { width } = this.state

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: "white" }}>
                    <View>
                        <Drawer props={this.props} />
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {/* country header */}
                        <View style={style.counryHeaderView}>
                            <View style={style.country}>
                                <View><Text style={style.countryText}>Country: India</Text></View>
                                <View><Text style={style.currencyText}>Currency: INR</Text></View>
                            </View>
                            <View style={style.logoWithProgressView}>
                                <View style={style.coinView}>
                                    <Image source={require('../Assets/logoCoin.png')} style={style.logoCoinImg} />
                                </View>
                                <View style={{ width: "80%" }}>
                                    <View style={style.LikesView}>
                                        <View style={{ display: "flex", flexDirection: "row" }}>
                                            <View>
                                                <Image source={require('../Assets/logoCoin.png')} style={{ height: 20, width: 20 }} />
                                            </View>
                                            <View style={{ marginLeft: 5 }}><Text>5 Coins</Text></View>
                                        </View>

                                        <View style={{ display: "flex", flexDirection: "row" }}>
                                            <View>
                                                <Image source={require('../Assets/like2.png')} style={{ height: 20, width: 20 }} />

                                            </View>
                                            <View style={{ marginLeft: 5 }}>
                                                <Text>
                                                    5 Likes
                                        </Text>
                                            </View>
                                        </View>

                                        <View style={{ display: "flex", flexDirection: "row" }}>
                                            <View>
                                                <Entypo name="users" size={15} color={"black"} />
                                            </View>
                                            <View style={{ marginLeft: 5 }}><Text>0 follow</Text></View>
                                        </View>
                                    </View>

                                    <View style={style.progressBarView}>
                                        <View style={{ backgroundColor: "#1498DB", width: width, alignItems: "center" }}>
                                            <Text style={{ color: "white", fontWeight: "700" }}>{width}</Text>
                                        </View>

                                    </View>
                                </View>
                            </View>

                            {/* value INR view */}
                            <View style={style.ValueInrView}>

                                <View>
                                    <Text style={{ color: "#1498DB", fontWeight: "bold" }}>Value: 5 INR</Text>
                                </View>

                                {/* <View style={style.withdrawBtnView}>
                                    <TouchableOpacity>
                                        <Text style={{ color: "white", fontWeight: "bold", fontSize: 12, letterSpacing: 1 }}>withdraw</Text>
                                    </TouchableOpacity>
                                </View> */}

                            </View>
                        </View>

                        {/* referral view */}
                        <View style={style.referralView}>

                            <View style={style.referralTitle}>
                                <Text style={style.referral}>Referral</Text>
                            </View>
                            <View style={style.subTitleView}>
                                <View>
                                    <Text style={{ marginLeft: 20 }}>Refer your friends and earn more coins.</Text>
                                </View>
                                <View style={style.IdView}>
                                    <View>
                                        <Text style={style.id}>Edumetrix Id: 000AA111</Text>
                                    </View>

                                    <View style={style.copyShareBtnView}>
                                        <TouchableOpacity style={style.copyTouchable}>
                                            <View>
                                                <Text style={{ color: "white", fontWeight: "bold", fontSize: 12, letterSpacing: 1 }}>copy</Text>
                                            </View>
                                        </TouchableOpacity>

                                        <TouchableOpacity style={style.shareTouchable}>
                                            <View>
                                                <Text style={{ color: "white", fontWeight: "bold", fontSize: 12, letterSpacing: 1 }}>Share</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                </View>
                            </View>

                        </View>
                        {/* social media share View */}
                        <View style={style.shareEarnView}>

                            <View style={style.shareTitle}>
                                <Text style={style.referral}>Share & Earn</Text>
                            </View>

                            <View style={style.socialViews}>
                                {/* facebook social */}
                                <View style={style.fbSocialView}>
                                    <TouchableOpacity style={style.facebook}>
                                        <Image source={require('../Assets/follow-fb.png')} style={style.fbImg} />
                                        <View >
                                            <Text style={style.fbText}>share on facebook</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={style.facebookgroup}>
                                        <Image source={require('../Assets/follow-fb.png')} style={style.fbImg} />
                                        <View >
                                            <Text style={style.fbText}>share in group</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {/* insta and tik tok  */}
                                <View style={style.instaSocialView}>
                                    <TouchableOpacity style={style.instagram}>
                                        <Image source={require('../Assets/instagram.png')} style={style.fbImg} />
                                        <View >
                                            <Text style={style.instaText}>share on instagram</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={style.tiktok}>
                                        <Image source={require('../Assets/tiktok.jpeg')} style={style.fbImg} />
                                        <View >
                                            <Text style={style.tiktokText}>share on Tik Tok</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                {/* twitter and linked in */}
                                <View style={style.instaSocialView}>
                                    <TouchableOpacity style={style.twitter}>
                                        <Image source={require('../Assets/follow-twit.png')} style={style.fbImg} />
                                        <View >
                                            <Text style={style.twitterText}>share on twitter</Text>
                                        </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={style.linkedIn}>
                                        <Image source={require('../Assets/follow-linked.png')} style={style.fbImg} />
                                        <View >
                                            <Text style={style.twitterText}>share in linkedIn</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                        {/* <View style={{ backgroundColor: "white", padding: 5, marginTop: 10 }}>
                            <Text style={style.referral}>Withdraw</Text>
                        </View> */}
                        {/* <View style={style.withdrawView}>
                            <View style={style.withdrawTableView}>
                                <View style={style.withdrawTitle}>
                                    <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>wallet</Text>
                                </View>
                                <View style={style.paymentView}>
                                    <View style={style.paymentsubView}>
                                        <View style={style.bankTitle}><Text style={{ fontWeight: "bold", fontSize: 13 }}>Bank Account</Text></View>
                                        <View style={{ backgroundColor: "white", width: "70%" }}>
                                            <TextInput
                                                placeholder="enter UPI ID "
                                                multiline
                                            />
                                        </View>
                                    </View>

                                    <View><Text>Bank Account</Text></View>
                                </View>

                            </View>
                        </View> */}
                      
                      
                        {/* withdrawl  status */}
                        {/* <View style={{ backgroundColor: "white", padding: 5, marginTop: 10 }}>
                            <Text style={style.referral}>Withdraw status</Text>
                        </View> */}
                        {/* <View style={style.withdrawStatusView}>
                            <View style={style.statusHeaderView}>
                                <View style={style.date}>
                                    <Text style={{ marginRight: 10, padding: 5 }}>Date</Text>
                                    <View style={style.itemView}>
                                        <Text>22 march 2019</Text>
                                    </View>
                                    <View style={style.itemView}>
                                        <Text>22 march 2019</Text>
                                    </View>
                                </View>
                                <View style={style.amount}>
                                    <Text style={{ marginRight: 10, padding: 5 }}>Amount</Text>

                                    <View style={style.itemView}>
                                        <Text>107</Text>
                                    </View>
                                    <View style={style.itemView}>
                                        <Text>107</Text>
                                    </View>
                                </View>
                                <View style={style.paid}>
                                    <Text style={{ marginRight: 10, padding: 5 }}>Paid</Text>
                                    <View style={style.itemView}>
                                        <Text>22 march 2019</Text>
                                    </View>
                                    <View style={style.itemView}>
                                        <Text>22 march 2019</Text>
                                    </View>
                                </View>
                                <View style={style.status}>
                                    <Text style={{ marginRight: 10, padding: 5 }}>status</Text>
                                    <View style={style.itemView}>
                                        <Text style={{ color: "green" }}>paid</Text>
                                    </View>
                                    <View style={style.itemView}>
                                        <Text style={{ color: "green" }}>paid</Text>
                                    </View>
                                </View>
                            </View>
                        </View> */}

                        <View style={style.earninigDetailsView}>
                            <View style={style.earningTitleView}>
                                <View style={style.earning}>
                                    <View style={style.bullet} />
                                    <View style={{ marginLeft: 10 }}>
                                        <Text style={{ color: "white", fontWeight: "700" }}>Earnings Details</Text>
                                    </View>
                                </View>
                                <View><Text style={{ color: "white", fontWeight: "700" }}>Life time earnings:- 50.70</Text></View>
                            </View>
                            {/* tables... */}
                            <View >
                                <View style={style.likesandReferralView}>

                                    <View style={style.likeTableView}>
                                        <View style={style.likeTitle}>
                                            <View style={{ padding: 5, backgroundColor: "#164e64" }}>
                                                <Text style={{color:"white",fontWeight:"700"}}>Like Counters</Text>
                                            </View>
                                            {likesTable.map((item, key) => (
                                                <View style={(key % 2 === 0) ? style.evenSaperateSubView : style.saperateSubView}>
                                                    <View style={style.subTitle}>
                                                        <Text>{item.heading}</Text>
                                                    </View>
                                                    <View style={style.noLikes}>
                                                        <Text>{item.value}</Text>
                                                    </View>
                                                </View>
                                            ))}


                                        </View>
                                    </View>
                                    <View style={style.likeTableView}>
                                        <View style={style.likeTitle}>
                                            <View style={{ padding: 5, backgroundColor: "#164e64" }}>
                                                <Text style={{color:"white",fontWeight:"700"}}>Share Counters</Text>
                                            </View>
                                            {ShareCounters.map((item, key) => (
                                                <View style={(key % 2 === 0) ? style.evenSaperateSubView : style.saperateSubView}>
                                                    <View style={style.subTitle}>
                                                        <Text>{item.heading}</Text>
                                                    </View>
                                                    <View style={style.noLikes}>
                                                        <Text>{item.value}</Text>
                                                    </View>
                                                </View>
                                            ))}


                                        </View>
                                    </View>
                                </View>

                                <View style={style.likesandReferralView}>

                                    <View style={style.likeTableView}>
                                        <View style={style.likeTitle}>
                                            <View style={{ padding: 5, backgroundColor: "#164e64" }}>
                                                <Text style={{color:"white",fontWeight:"700"}}>Referral Counters</Text>
                                            </View>
                                            {referralTable.map((item, key) => (
                                                <View style={(key % 2 === 0) ? style.evenSaperateSubView : style.saperateSubView}>
                                                    <View style={style.subTitle}>
                                                        <Text>{item.heading}</Text>
                                                    </View>
                                                    <View style={style.noLikes}>
                                                        <Text>{item.value}</Text>
                                                    </View>
                                                </View>
                                            ))}


                                        </View>
                                    </View>
                                    <View style={style.likeTableView}>
                                        <View style={style.likeTitle}>
                                            <View style={{ padding: 5, backgroundColor: "#164e64" }}>
                                                <Text style={{color:"white",fontWeight:"700"}}>additional Bonus</Text>
                                            </View>
                                            {additionalBonus.map((item, key) => (
                                                <View style={(key % 2 === 0) ? style.evenSaperateSubView : style.saperateSubView}>
                                                    <View style={style.subTitle}>
                                                        <Text>{item.heading}</Text>
                                                    </View>
                                                    <View style={style.noLikes}>
                                                        <Text>{item.value}</Text>
                                                    </View>
                                                </View>
                                            ))}


                                        </View>
                                    </View>
                                </View>


                            </View>
                           
                           {/* payble table.. */}
                            <View style={{ marginTop: 10 }}>
                                <View style={style.earningTitleView}>
                                    <View style={style.earning}>
                                        <View style={style.bullet} />
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={{ color: "white", fontWeight: "700" }}>Payble Table</Text>
                                        </View>
                                    </View>
                                </View>

                                <View style={style.PaybleTableView}>
                                        <View style={style.likeTitle}>
                                          
                                            {paybleTable.map((item, key) => (
                                                <View style={(key % 2 === 0) ? style.evenSaperateSubView : style.saperateSubView}>
                                                    <View style={style.subTitle}>
                                                        <Text>{item.heading}</Text>
                                                    </View>
                                                    <View style={style.noLikes}>
                                                        <Text>{item.value}</Text>
                                                    </View>
                                                </View>
                                            ))}


                                        </View>
                                    </View>

                                <View style={style.earningTitleView}>
                                    <View style={style.earning}>
                                        
                                        <View style={{ marginLeft: 10 }}>
                                            <Text style={{ color: "white", fontWeight: "700" }}>Total Payble Amount</Text>
                                        </View>
                                    </View>
                                    <View><Text style={{ color: "white", fontWeight: "700" }}> 50.70</Text></View>
                                </View>

                            </View>
                        </View>

                    </ScrollView>
                </View>

                {/* footer area */}
                <View style={{ backgroundColor: "white" }}>
                <Footer props={this.props}/>
                </View>
            </SafeAreaView>
        )
    }
}

export default EarningPage