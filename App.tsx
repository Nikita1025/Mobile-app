import {StyleSheet, Text, View} from 'react-native';
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Button} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {VithSafeAreaView} from "./Helper/VithSafeAreaView";
import {HomeProps, ProfileProps, RootStackParamList, UserProps} from "./Types/TypesNavigation";


function HomeScreen({navigation}: HomeProps) {
    return (
        <VithSafeAreaView>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                <Text>Home Screen</Text>
                <Button
                    onPress={() => navigation.navigate('Profile')}
                    title="Jump to profile "

                />
            </View>
        </VithSafeAreaView>

    );
}

function ProfileScreen({navigation}: ProfileProps) {
    return (
        <VithSafeAreaView>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                <Text>Profile Screen</Text>
                <Button
                    onPress={() => navigation.navigate('User')}
                    title="Jump to user "

                />
            </View>
        </VithSafeAreaView>

    );
}

function UserScreen({navigation}: UserProps) {
    return (
        <VithSafeAreaView>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                <Text>Profile Screen</Text>
                <Button
                    onPress={() => navigation.navigate('Home')}
                    title="Jump to home "

                />
            </View>
        </VithSafeAreaView>
    );
}

const Stack = createNativeStackNavigator<RootStackParamList>();


export default function App() {

    return (

        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                    <Stack.Screen name="Profile" component={ProfileScreen}/>
                    <Stack.Screen name="User" component={UserScreen}/>
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    input: {
        width: '80%',
        backgroundColor: '#fff',
        fontSize: 18,
        padding: 8,
    },
    boxTak: {
        flexDirection: 'row',
        backgroundColor: '#fffffe',
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingHorizontal: 20,
        marginVertical: 2,
    }
});

