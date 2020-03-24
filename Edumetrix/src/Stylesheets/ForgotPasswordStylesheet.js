import { StyleSheet } from 'react-native'

const ForgotStyle = StyleSheet.create({

    container:{
        flex:1,
        alignItems:"center",   
    },
    loginCoin:{
        height:150,
        width:150
    },
     imageView: {
        width: "100%",
        alignItems: "center",
        alignContent: "center",
        marginTop: 70
    },
    titleView: {
        width: "100%",
        // backgroundColor: "green",
        alignItems: "center",
        marginTop: 15,
    },
    title: {
        fontSize: 15,
        letterSpacing: 1,
        color:"gray"
    },
    emailInput: {
        backgroundColor: "white",
        borderRadius: 50,
        borderWidth: 1,
        borderColor: "lightgray",
        marginTop: 20,
        display: "flex",
        flexDirection: "row",
        padding: 5

    },
    emailIcon: {
        width: "7%",
        alignItems: "center",
        alignContent: "center",
        justifyContent: "center",
        marginLeft: 8
        // backgroundColor:"pink"
    },
    email: {
        // backgroundColor:"gray",
        width: "88%"
    },
})

export default ForgotStyle