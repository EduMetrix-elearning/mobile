import { StyleSheet } from 'react-native'

const style = StyleSheet.create({


    SafeAreaView: {
        flex: 1
    },
    HeaderView: {
        backgroundColor: "#ededed",
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    logoView: {
        flexDirection: "row",
        marginLeft: 20,
        justifyContent: "center"
    },
    companyLogo: {
        justifyContent: "center"
    },
    logo: {
        height: 30,
        width: 30
    },

    edumetrixText: {
        color: "#164e64",
        fontSize: 16
    },
    mainContainerView: {
        flex: 1,
        backgroundColor: "white",
        padding: 8
    },

    privacyHeading: {
         fontWeight: "700",
        fontSize: 22,
        color:"#3B3E47"
    },
    aboutUsText: {
        textAlign: "justify",
        letterSpacing: 0.5,
        lineHeight: 25
    },
    bottomHeading:{
        alignItems:"center",
        padding:10
    },
    subHeading:{
        fontSize:20
    },
    subview:{
        flexDirection:"row"
    },
    dotView:{
        height:5,
        width:5,
        backgroundColor:"black",
        borderRadius:100,
        marginTop:10
    }
})

export default style