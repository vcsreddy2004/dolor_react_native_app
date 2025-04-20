import { StyleSheet, Text, TouchableOpacity, View, Image, Linking, Alert } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';

const openLinkedInProfile = (username:string) => {
    const appURL = `linkedin://in/${username}`;
    const webURL = `https://www.linkedin.com/in/${username}`;
  
    Linking.canOpenURL(appURL).then((supported) => {
        if (supported) {
          return Linking.openURL(appURL);
        } else {
          return Linking.openURL(webURL);
        }
      }).catch((err) => 
        Alert.alert("Error", "Failed to open LinkedIn: " + err.message

    ));
};
export default function ContactScreen() {
  return (
    <View style={styles.container}>
        <View style={styles.mainCard}>
            <View style={styles.profileVIew}>
                <Image source={require("./../../assets/profile.jpg")} style={styles.profile}/>
                <Text style={{fontSize: 30, fontWeight: "bold", marginTop: 10}}>Chandra Sekhar</Text>
                <Text style={{fontSize: 20, fontWeight: "bold", marginTop: 10}}>
                    +91 91105 10967
                </Text>
                <View style={styles.buttonsView}>
                    <TouchableOpacity style={[styles.button,{backgroundColor:"red"}]} onPress={()=>Linking.openURL("mailto:vcsreddy2004@gmail.com")}>
                        <Icon name={"mail"} style={{color:"white",fontSize:30}}></Icon>
                        <Text style={{color: "white", fontSize: 20}}>Mail</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor:"green"}]} onPress={()=>Linking.openURL("https://wa.me/919110510967")}>
                        <Icon name={"logo-whatsapp"} style={{color:"white",fontSize:30}}></Icon>
                        <Text style={{color: "white", fontSize: 20}}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor:"blue"}]} onPress={()=>openLinkedInProfile("vennachandrasekhar")}>
                        <Icon name={"logo-linkedin"} style={{color:"white",fontSize:30}}></Icon>
                        <Text style={{color: "white", fontSize: 20}}>Linkedin</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.button,{backgroundColor:"black"}]} onPress={()=>Linking.openURL("https://github.com/vcsreddy2004")}>
                        <Icon name={"logo-github"} style={{color:"white",fontSize:30}}></Icon>
                        <Text style={{color: "white", fontSize: 20}}>Github</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(255, 233, 168)',
    },
    mainCard: {
        width: "70%",
        height: "70%",
        backgroundColor: "white",
        borderRadius: 20,
    },
    profileVIew: {
        width: "100%",
        height: "100%",
        backgroundColor: "white",
        borderRadius: "50%",
        alignItems:"center"
    },
    profile: {
        width: "40%",
        height: "20%",
        top:-30,
        borderRadius: 50,
    },
    button: {
        flexDirection:"row",
        gap:20,
        padding:5,
        paddingInline:10,
        alignItems:'center',
        margin:20,
    },
    buttonsView: {
        width:"100%",
    }
})