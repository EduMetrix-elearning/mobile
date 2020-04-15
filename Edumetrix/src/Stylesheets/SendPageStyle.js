import { StyleSheet ,Dimensions} from 'react-native'
const Height = Dimensions.get('window').height
const width = Dimensions.get('window').width
const Box_Height = width/5
const style = StyleSheet.create({

    SafeAreaView: {
        
        flex:1,
    },
    header:{
        backgroundColor:"#164e64",
        padding:8,
        width:width,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomWidth:1,
        borderBottomColor:"gray"
    },
    mainContainer:{
        backgroundColor:"#164e64",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    },
    childContainer:{
        backgroundColor:"white",
       height:Height/3,
       width:width-width/12,
       alignItems:"center",
          
    },
    logoCoinView:{
        backgroundColor:"white",
        borderRadius:100,
        height:Box_Height,
        width:Box_Height,
        marginTop: -(Box_Height/2),
        borderWidth:4,
        borderColor:"#164e64",
        alignItems:"center",
        justifyContent:"center",
       
    },
    logoCoinImg:{
        height:50,
        width:50
    },
    headingView:{
       
        padding:10
    },
    textView:{
        color:"#164e64",
        fontSize:20
    },
    inputView:{
        width:"100%",
        marginTop:20,
        padding:10
    },
    buttonView:{
        width:"100%",
        padding:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-around"   
    },
    closeBtnTouch:{
        backgroundColor:"green",
        width:"49%",
        padding:10,
        alignItems:"center",
        backgroundColor:"lightgray",
        borderRadius:5
    },
    doneBtnTouch:{
        backgroundColor:"green",
        width:"49%",
        padding:10,
        alignItems:"center",
        backgroundColor:"#164e64",
        borderRadius:5
    },
    QrTouch:{
        padding:5,
        // backgroundColor:"white"
    },
    title:{
        justifyContent:"center",
        alignItems:"center"
    },
    edumetrixTitle:{
        color:"white",
        fontWeight:"700",
        fontSize:17
    }
})

export default style