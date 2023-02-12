import React, {useState} from 'react';
import {Text, Image, View, ScrollView, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import shoe from '../assets/shoe3.png'
export function Chat (){
const [msg1, setMsg1] = useState(false)
const [msg2, setMsg2] = useState(false)
const [msg3, setMsg3] = useState(false)
const [msg4, setMsg4] = useState(false)

const [chat, setText] = useState('')

function handleSubmit() {
    if (chat === "Hi, is this still available?") {
        setMsg1(true)
        setText('')
        setTimeout(function(){
            setMsg2(true)
          }, 3000)
        

    }
    if (chat === "Can I come collect it tomorrow at the townsquare 5?") {
        setMsg3(true)
        setTimeout(function(){
            setMsg4(true)
          }, 3000)
    }
}
    return (<View><ScrollView>
        <Text style={styles.date} >Today</Text>
        <View style={{marginLeft: 60,padding: 10}}>
        <View style={{backgroundColor: '#FFCEAA', padding: 10, borderRadius: 5, width: 275, height: 305}}>
        <View style={{backgroundColor: '#FF6B00', paddingTop: 15, paddingLeft: 10, paddingRight:10, width: 255, height: 230, borderRadius: 10}}>
            <Image source={shoe} style={styles.image}/>
            <Text style={{fontSize: 16, color: 'white', marginTop: 2, marginLeft: 7}}>Girl's Shoes</Text>
        </View>
        <Text style={{width:250, color: 'blue', marginLeft: 5}}>https://www.generocity/file/16Kgv 7ZiSuoDS59ORBpEHV/Girls-Shoes-id=0%3A1&t=xdTb69jfckAR6Nux-0</Text>
        </View>
        </View>

        {msg1 && <View  style={{marginLeft: 60,padding: 10, marginTop: -30}}>
        <View style={{backgroundColor: '#FFCEAA', padding: 10, borderRadius: 5, width: 275, height: 40}}>
        <Text style={{width:250, color: '', marginLeft: 5}}>Hi, is this still available?</Text>
        </View>
        </View>}
        
       {msg2 && <View style={{marginLeft: 20, marginTop: 15}}>
            <Text style={{backgroundColor: '#D9D9D9', width: 110, height: 40,paddingLeft: 10, paddingTop: 5, borderRadius:8}}>
                Hi, yes it is.
            </Text>
        </View>}

        {msg3 && <View style={{marginLeft: 140, marginTop: 20}}>
        <Text style={{backgroundColor: '#FFCEAA', width: 205, height: 50,paddingLeft: 8, paddingTop: 5, borderRadius: 8}}>
        Can I come collect it tomorrow at
the townsquare 5?
            </Text>
        </View>}

        {msg4 && <View style={{marginLeft: 20, marginTop: 15}}>
            <Text style={{backgroundColor: '#D9D9D9', width: 70, height: 40,paddingLeft: 10, paddingTop: 5, borderRadius: 8}}>
                Sure.
            </Text>
        </View>}

        <View style={{height: 200}}>

        </View>
        
        
    </ScrollView>
    <View style={{position: 'absolute',               bottom: 0,
              right: 0, backgroundColor: 'red', width: '100%', height: 55, paddingLeft: 28, paddingTop: 8}} ><TextInput style={{
            
            borderWidth:1,
        width: 300,
              height: 40, 
              borderRadius: 16,
              paddingLeft: 20,
                backgroundColor: 'white'
            }} value={chat} placeholder="Message..." onChangeText={setText}
            onSubmitEditing={handleSubmit}
            ></TextInput></View></View>
    )
}
const styles = StyleSheet.create({
    date: {
      backgroundColor: '#FF6B00',
      color: "white",
      borderRadius: 10,
     width: 80,
     height: 25,
     fontSize: 16,
     textAlign: "center",
     marginLeft: 'auto',
     marginRight: 'auto',
     marginTop: 30

    },
image : {
height: 180,
width: 230,

}})
