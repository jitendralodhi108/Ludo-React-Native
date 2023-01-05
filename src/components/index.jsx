import React from "react";
import { View, Text, ImageBackground, TextInput, StyleSheet, Button, TouchableOpacity } from "react-native";

const Index = (props, navigation) => {

    return <>
        <ImageBackground
            source={{
                uri: 'https://wallpaperaccess.com/full/7172888.jpg'
            }}
            resizeMode="stretch"
            style={styles.img}
        >
            <Text style={styles.heading}> Enter Names</Text>
            <TextInput style={styles.text1} placeholder="Player A" />
            <TextInput style={styles.text2} placeholder="Player B" />

            <TouchableOpacity onPress={() => { props.navigation.navigate('GameScreen') }}>
                <Text style={styles.playBtn}>PLAY</Text>
            </TouchableOpacity>
        </ImageBackground>
    </>
};
const styles = StyleSheet.create({

    img: {
        width: '100%',
        height: '110%',
    },
    heading: {
        color: 'yellow',
        marginTop: 100,
        fontSize: 20,
        marginLeft: 130
    },
    text1: {
        margin: 15,
        marginTop: 15,
        marginLeft: 45,
        width: '75%',
        backgroundColor: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    text2: {
        margin: 12,
        marginTop: 20,
        marginLeft: 45,
        width: '75%',
        backgroundColor: 'white',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    playBtn: {
        fontStyle: 'italic',
        marginLeft: 150,
        fontSize: 30,
        color: 'yellow',
        justifyContent: "center",
        padding: 16,
    }
})
export default Index;