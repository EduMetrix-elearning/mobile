import { StyleSheet } from 'react-native'

const style = StyleSheet.create({

    spashViewContainer: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flex: 1,
        height: "100%",

        justifyContent: "center",
        alignItems: "center"
    },
    spashImage: {

        width: "100%",
        alignContent: "center",
        alignItems: "center",
        marginBottom: 200
    },
    loginContainer: {

        flex: 1,
        backgroundColor: "white",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-end",
        padding: 10,
       

    },

    imageView: {
        width: "100%",
        alignItems: "center",
        alignContent: "center",
        marginTop: 70
    },

    loginCoin: {
        height: 150,
        width: 150
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
        color: "gray"
    },
    input: {
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 50,
        borderColor: "white",
        height: 40,
        width: "100%",
        marginLeft: 2
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
    btnContainer: {
        width: "100%",
        padding: 10
    },
    signInBtnView: {

        backgroundColor: "#237F89",
        backgroundColor: "#3D94BE",
        width: "100%",
        borderRadius: 80,
        marginTop: 10,
        // height:30,
        alignItems: "center",
        color: "white"
    },
    signInTouch: {
        width: "100%",
        padding: 10,
        alignItems: "center",
        borderRadius: 80,
    },
    signupBtnView: {
        backgroundColor: "#617177",
        width: "100%",
        borderRadius: 80,
        marginTop: 10,
        alignItems: "center",
        color: "white"
    },

    signUpTouch: {
        width: "100%",
        padding: 10,
        alignItems: "center",
        borderRadius: 80,
    },
    forgotView: {
        width: "100%",
        // backgroundColor:"yellow",
        alignContent: "center",
        alignItems: "center",
        marginTop: 10
    },
    forgotpswrd: {
        color: "gray"
    },
    conditionsView: {
        //     flex:1,
        //    backgroundColor:"gold",
        //    flexDirection:"row",
        //    justifyContent:"center",
        //    alignItems:"flex-end",


    }

})

export default style