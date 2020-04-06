import React,{Component} from 'react'
import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native'
import style from '../Stylesheets/ProfilePageStyle'


class UserProfileBio extends Component{




    render(){
        return(
            <View>
                
            <View style={style.followingView}>
                <View style={style.followers}>
                    <Text style={{ color: "#2D9598", fontWeight: "bold" }}> Followers </Text>

                    <View style={style.numberFollowing}>
                        <Text style={{ color: "white", fontWeight: "bold" }}> 234k </Text>
                    </View>

                </View>

                <View style={style.followers}>
                    <Text style={{ color: "#2D9598", fontWeight: "bold" }}> Following </Text>
                    <View style={style.numberFollowing}>
                        <Text style={{ color: "white", fontWeight: "bold" }}> 23k </Text>
                    </View>

                </View>
            </View>

            <View style={style.ProfileView}>
                <View style={style.profilePic}>
                    <Image source={require('../Assets/kapil.jpg')} style={style.userImg} />
                </View>
                <View style={style.userDetails}>
                    <Text style={style.userName}> kapil asthana</Text>
                    <Text style={style.userstate}> uttar pradesh,India</Text>
                    <Text style={style.userDob}> date of birth: 22 may 1990</Text>
                </View>

            </View>
            {/* user profile details view  */}
            <View style={style.aboutUserView}>

                <View style={style.describe}>

                    <Text>How do you describe yourself?</Text>
                    <View>
                        <Image source={require('../Assets/edit.png')} style={style.pencil} />
                    </View>
                </View>
                <View style={style.ansDescribeView}>
                    <Text style={style.ansDescribe}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but
                     also the leap into electronic typesetting, remaining essentially unchanged. </Text>
                </View>

                <View style={style.describe}>

                    <Text>Family</Text>
                    <View>
                        <Image source={require('../Assets/edit.png')} style={style.pencil} />
                    </View>
                </View>

                <View style={style.FamilyView}>

                    <View style={style.family}>
                        <View style={style.father}>
                            <Text>Father Name :</Text>
                        </View>

                        <View style={style.fatherName}>
                            <Text>Narendra Modi</Text>
                        </View>

                    </View>
                    <View style={style.family2}>
                        <View style={style.mother}>
                            <Text>Mother Name :</Text>
                        </View>

                        <View style={style.motherName}>
                            <Text>Sonia Gandhi</Text>
                        </View>

                    </View>

                </View>

                <View style={style.HobbiesView}>

                    <Text>Hobbies</Text>
                    <View>
                        <Image source={require('../Assets/edit.png')} style={style.pencil} />
                    </View>
                </View>

                <View style={style.hobbies}>
                    <Text>Cricket</Text>
                    <Text>Football</Text>
                    <Text>Listning Song</Text>
                </View>


                <View style={style.HobbiesView}>

                    <Text>Skills</Text>
                    <View>
                        <Image source={require('../Assets/edit.png')} style={style.pencil} />
                    </View>
                </View>

                <View style={style.hobbies}>
                    <Text>C++</Text>
                    <Text>PHP</Text>
                    <Text>ReactJs</Text>
                    <Text>React-Native</Text>
                </View>

                <View style={style.educationalView}>

                    <Text>Educational Details</Text>
                    <View>
                        <Image source={require('../Assets/edit.png')} style={style.pencil} />
                    </View>
                </View>

                <View style={style.FamilyView}>

                    <View style={style.family2}>
                        <View style={style.collageName}>
                            <Text >University :</Text>
                        </View>

                        <View style={style.UniversityView}>
                            <Text style={{ width: "70%" }}>I.I.T</Text>
                        </View>

                    </View>
                    <View style={style.family2}>
                        <View style={style.collageName}>
                            <Text >Collage Name :</Text>
                        </View>

                        <View style={style.motherName}>
                            <Text style={{ width: "70%" }}>Indira Gandhi National Open University</Text>
                        </View>

                    </View>
                    <View style={style.family2}>
                        <View style={style.collageName}>
                            <Text >Specialization :</Text>
                        </View>

                        <View style={style.motherName}>
                            <Text style={{ width: "100%" }}>Accounting,Developer</Text>
                        </View>

                    </View>
                    <View style={style.family2}>
                        <View style={style.collageName}>
                            <Text >Course Year :</Text>
                        </View>

                        <View style={style.motherName}>
                            <Text style={{ width: "100%" }}>2013-2015</Text>
                        </View>

                    </View>
                    <View style={style.family2}>
                        <View style={style.collageName}>
                            <Text >Life Ambition :</Text>
                        </View>

                        <View style={style.motherName}>
                            <Text style={{ width: "60%" }}>Becomming entrepreneur </Text>
                        </View>
                    </View>

                    <View style={style.BioDwldView}>
                        <View>
                            <Text style={{ fontWeight: "bold", fontSize: 16, color: "#004547" }}>
                                EduMetrix Bio
                    </Text>
                        </View>
                        <View style={style.DwldBtn}>
                            <TouchableOpacity onPress={this.downloadHandle}>
                                <Text style={style.dwld}>Download</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>

            </View>


        </View>
   
        )
    }
}

export default UserProfileBio