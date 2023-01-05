import { Box, Center, Divider, Flex, Heading, ScrollView, View, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { ImageBackground, StyleSheet, Text, TouchableOpacity } from "react-native";
import Draggable from 'react-native-draggable';


const GameScreen = () => {

    const [diceval, setDiceval] = useState(1);
    const [player1A, setplayer1A] = useState({ x: 40, y: 185 });
    const [player1B, setplayer1B] = useState({ x: 90, y: 185 });
    const [player1C, setplayer1C] = useState({ x: 40, y: 245 });
    const [player1D, setplayer1D] = useState({ x: 90, y: 245 });


    const move = () => {
        console.log('changed', player1A)
        switch (diceval) {
            case 1: {
                console.log("case 1  ke aaabdaar ")
                player1D['y'] = player1D['y'] - 30
                setplayer1D({ ...player1D })
            }
                break;
            case 2: {

            }
                break;

            case 3: {

            }
                break;

            case 4: {

            }
                break;

            case 5: {

            }
                break;

            case 6: {

            }
                break;
        }
    }

    function randomIntFromInterval(min, max) { // min and max included 
        move();
        return Math.floor(Math.random() * (max - min + 1) + min)
    }

    return (<>
        <ImageBackground
            source={{
                uri: 'https://wallpaperaccess.com/full/7172888.jpg'
            }}
            resizeMode="stretch"
            style={styles.BGimg}
        >
            <ImageBackground
                source={{
                    uri: 'https://media.istockphoto.com/id/493120080/vector/vector-ludo-game-board.jpg?s=612x612&w=0&k=20&c=XoQU_WmnbaSzCbFWJxMlb6us9OLivfotc4aTIcP5M1E='
                }}
                resizeMode="stretch"
                style={styles.img}
            >
                <View style={styles.map}>
                    {/* <VStack space={3.5} w="100%" px="2">
                    <Flex direction="row" mt="100" ml="0.5" >
                        <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                            color: "coolGray.800"
                        }}>
                            1
                        </Center>
                        <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                            color: "coolGray.800"
                        }}>
                            2
                        </Center>
                        <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                            color: "coolGray.800"
                        }}>
                            3
                        </Center>
                        <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                            color: "coolGray.800"
                        }}>
                            4
                        </Center>
                        <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                            color: "coolGray.800"
                        }}>
                            5
                        </Center>
                        <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                            color: "coolGray.800"
                        }}>
                            6
                        </Center>

                        <Center mx="0.3" my="0.2" size="6" bg="#fff000" _text={{
                            color: "coolGray.800"
                        }}>
                            7
                        </Center>


                        <Flex direction="column" mt="6" ml="-6" >
                            <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                                color: "coolGray.800"
                            }}>
                                8
                            </Center>
                            <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                                color: "coolGray.800"
                            }}>
                                9
                            </Center>

                            <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                                color: "coolGray.800"
                            }}>
                                10
                            </Center>
                            <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                                color: "coolGray.800"
                            }}>
                                11
                            </Center>

                            <Center mx="0.3" my="0.2" size="6" bg="#0000ff" _text={{
                                color: "coolGray.800"
                            }}>
                                12
                            </Center>
                            <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                                color: "coolGray.800"
                            }}>
                                13
                            </Center>

                        </Flex>

                        <Flex direction="row" mt="171" ml="-6" >
                            <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                                color: "coolGray.800"
                            }}>
                                14
                            </Center>
                            <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                                color: "coolGray.800"
                            }}>
                                15
                            </Center>
                            <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                                color: "coolGray.800"
                            }}>
                                15
                            </Center>
                        </Flex>

                        <Flex direction="column-reverse" mt="0" ml="-6" >
                            <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                                color: "coolGray.800"
                            }}>
                                16
                            </Center>
                            <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                                color: "coolGray.800"
                            }}>
                                17
                            </Center>
                            <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                                color: "coolGray.800"
                            }}>
                                18
                            </Center>
                            <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                                color: "coolGray.800"
                            }}>
                                19
                            </Center>
                            <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                                color: "coolGray.800"
                            }}>
                                20
                            </Center>
                            <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                                color: "coolGray.800"
                            }}>
                                21
                            </Center>
                            <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                                color: "coolGray.800"
                            }}>
                                22
                            </Center>
                            <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                                color: "coolGray.800"
                            }}>
                                23
                            </Center>
                        </Flex>

                        <Flex direction="row" mt="0" ml="0" >
                        <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                            color: "coolGray.800"
                        }}>
                            24
                        </Center>
                        <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                            color: "coolGray.800"
                        }}>
                            25
                        </Center>
                        <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                            color: "coolGray.800"
                        }}>
                            26
                        </Center>
                        <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                            color: "coolGray.800"
                        }}>
                            27
                        </Center>
                        <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                            color: "coolGray.800"
                        }}>
                            28
                        </Center>
                        <Center mx="0.3" my="0.2" size="6" bg="#FFFFFF" _text={{
                            color: "coolGray.800"
                        }}>
                            29
                        </Center>
                        </Flex>

                    </Flex>
                </VStack> */}
                </View>

                <View >
                    <Draggable x={player1A.x} y={player1A.y} renderSize={30} renderColor='black' renderText='A' isCircle shouldReverse onShortPressRelease={() => alert('touched!!')} />
                    <Draggable x={player1C.x} y={player1C.y} renderSize={30} renderColor='black' renderText='C' isCircle shouldReverse onShortPressRelease={() => alert('touched!!')} />
                    <Draggable x={player1D.x} y={player1D.y} renderSize={30} renderColor='black' renderText='D' isCircle shouldReverse onShortPressRelease={() => alert('touched!!')} />
                    <Draggable x={player1B.x} y={player1B.y} renderSize={30} renderColor='black' renderText='B' isCircle shouldReverse onShortPressRelease={() => alert('touched!!')} />
                </View>

                <TouchableOpacity>
                    <Text onPress={() => { const num = randomIntFromInterval(1, 6); setDiceval(num) }} style={styles.diceBtn}> Click here <Text style={{ marginLeft: "25px" }}> {diceval} </Text></Text>
                </TouchableOpacity>
            </ImageBackground>
        </ImageBackground>
    </>)
}
const styles = StyleSheet.create({
    BGimg: {
        width: '100%',
        height: '110%',
    },
    img: {
        marginLeft: 5,
        marginTop: 100,
        paddingTop: 25,
        width: '98%',
        height: '75%',
    },
    map: {
        marginTop: 110
    },
    diceBtn: {
        display: "flex",
        fontSize: 15,
        backgroundColor: 'yellow',
        width: 80,
        marginTop: 400,
        marginLeft: 150
    }
})

export default GameScreen;