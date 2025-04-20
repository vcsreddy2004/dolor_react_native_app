import { useNavigation, NavigationProp } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, StyleSheet, NativeSyntheticEvent, TextInputKeyPressEventData } from 'react-native';
import { TouchableOpacity, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
type screens = {
    bottomTab: undefined
}
export default function LoginScreen() {
    let [userData,setUserData] = useState({
        email:"",
        password:"",
    });
    let [password,setPassword] = useState({
        passwordVisibility:true,
        passwordIcon:"eye-off"
    });
    let updatePasswordVisibility = () => {
        if(password.passwordVisibility) {
            setPassword(()=>({
                passwordVisibility:false,
                passwordIcon:"eye",
            }));
        }
        else {
            setPassword(()=>({
                passwordVisibility:true,
                passwordIcon:"eye",
            }));
        }
    }
    let updateUserData = (fieldName:string,fieldText:string) => {
        setUserData((prev)=>({
            ...prev,
            [fieldName]:fieldText,
        }));
    }
    const navigator = useNavigation<NavigationProp<screens>>();
    return (
        <View style={styles.mainView}>
            <View style={styles.loginView}>
                <View style={styles.loginHeader}>
                    <Text style={[styles.defaultFontSize,{color:"white",fontWeight:800}]}>
                        Login
                    </Text>
                </View>
                <View style={styles.loginBody}>
                    <Text style={styles.defaultFontSize}>
                        Email
                    </Text>
                    <TextInput style={styles.defaultTextInput} onChangeText={(text)=>updateUserData("email",text)}></TextInput>
                    <Text style={styles.defaultFontSize}>
                        Password
                    </Text>
                    <View style={{flexDirection:"row"}}>
                        <TextInput style={[styles.defaultTextInput,{width:"90%"}]} onChangeText={(text)=>updateUserData("password",text)} secureTextEntry={password.passwordVisibility}></TextInput>
                        <TouchableOpacity onPress={updatePasswordVisibility}>
                            <Icon name={password.passwordIcon} color={"black"} size={30}/>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:"row",justifyContent:"center"}}>
                        <TouchableOpacity onPress={()=>navigator.navigate("bottomTab")} style={styles.loginBtn}>
                            <Text style={{textAlign:"center",color:"white"}}>Log In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    mainView: {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:"rgb(255, 233, 168)",
    },
    loginBtn: {
        backgroundColor:"green",
        width:100,
        padding:10,
        margin:30,
    },
    loginView: {
        width:"70%",
        height:400,
        backgroundColor:"white",
        margin:"auto",
    },
    loginHeader: {
        backgroundColor:"rgb(205, 133, 0)",
        padding:10,
    },
    loginBody: {
        padding:20,
    },
    defaultFontSize: {
        fontSize:20,
    },
    defaultTextInput: {
        borderWidth:1,
        height:30,
        color:"black",
        padding:0,
    }
});