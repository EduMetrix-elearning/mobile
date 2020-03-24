import {StyleSheet} from 'react-native'

const style = StyleSheet.create({


    safeAreaView:{
        // backgroundColor:"red"
    },

    drawerHeader:{
        display:"flex",
        flexDirection:"row",
        // backgroundColor:"yellow",
        padding:5,
        justifyContent:"space-between",
        borderBottomWidth:1,
        borderBottomColor:"lightgray"

    },
    drawerMenu:{
        // backgroundColor:"pink",
        width:"10%",
        padding:5,
        alignItems:"center"
    },
    headerMenuContainer:{
        width:"50%",
        // backgroundColor:"green",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around",
    },
    drawerImg:{
        height:25,
        width:25
    }

})

export default style