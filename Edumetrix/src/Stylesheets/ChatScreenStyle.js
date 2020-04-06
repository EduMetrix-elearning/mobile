import {StyleSheet} from 'react-native'

const style = StyleSheet.create({

    footerView:{
        backgroundColor:"white"
    },
    userView:{
        // backgroundColor:"yellow",
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:"lightgray"
    },
    userImg:{
        height:60,
        width:60,
        borderRadius:100
    },
    username:{
        justifyContent:"center",
        marginLeft:10,
        
    },
    time:{
        justifyContent:"center"
    }
})

export default style