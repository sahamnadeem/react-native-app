import React, { Component } from 'react'
import { StyleSheet, Text, View, Image,
    TouchableWithoutFeedback, StatusBar,
    TextInput, SafeAreaView, Keyboard, TouchableOpacity,
    KeyboardAvoidingView } from 'react-native'

    export default class Login extends Component {
        render() {
            return (
                <SafeAreaView style={styles.container}>
                    <StatusBar barStyle="light-content"/>
                    <TouchableWithoutFeedback style={styles.container} onPress={Keyboard.dismiss}>
                            <View style={styles.container}>
                                <View style={styles.logoContainer}>
                                    <Image style={styles.logo}
                                    source={require('../images/logo.png')}>
                                    </Image>
                                </View>
                                <View style={styles.infoContainer}>
                                    <TextInput style={styles.input} 
                                    placeholder="Username" 
                                    placeholderTextColor="grey" 
                                    keyboardType="email-address"
                                    returnKeyType="next"
                                    autoCorrect={false}/>
                                    <TextInput style={styles.input} placeholder="Password" placeholderTextColor="grey" keyboardType="visible-password"/>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                </SafeAreaView>
            )
        }
    }
    
    const styles = StyleSheet.create({
        container:{
            backgroundColor:'white',
            flex:1,
            flexDirection:'column',
        },
        logoContainer:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        },
        logo:{
            width:200,
            height:200,
            marginBottom:100
        },
        title:{
            fontSize:20,
            textAlign:'center'
        },
        infoContainer:{
            position: 'absolute',
            left:0,
            bottom:0,
            right:0,
            height:200,
            padding:10,
            shadowColor:'grey'
        },
        input:{
            paddingHorizontal:30,
            backgroundColor:'#e8e8e8',
            height:50,
            borderRadius:50,
            fontSize:20,
            margin:10
        }
    })