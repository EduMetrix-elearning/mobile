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
    termsHeading: {
        fontWeight: "700",
        fontSize: 22,
        color:"#3B3E47"
    },
    subHeading:{
        fontSize: 15,
        color:"#3B3E47"
    },
    aboutUsText: {
        textAlign: "justify",
        letterSpacing: 0.5,
        lineHeight: 25
    },
    subTextView:{
        flexDirection:"row",
        justifyContent:"space-around",
        marginTop: 10,
        padding:10
    },

    bottomHeading:{
        alignItems:"center",
        padding:10
    },
    dotView:{
        height:8,
        width:8,
        borderRadius:100,
        borderWidth:1,
        justifyContent:"center",
        marginTop:10
    },
    subTextInnetView:{
        flexDirection:"row",
        justifyContent:"space-around",
        paddingLeft:17,
        paddingRight:17
        
    },

})

export default style