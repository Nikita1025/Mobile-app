import {StyleSheet, Text, View} from 'react-native';
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Button} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {VithSafeAreaView} from "./Helper/VithSafeAreaView";
import {HomeProps, ProfileProps, RootStackParamList, UserProps} from "./Types/TypesNavigation";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {RootAuth} from "./Screens/RootAuth";


function HomeScreen({navigation}: HomeProps) {
    return (
        <VithSafeAreaView>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                <Text>Home Screen</Text>
                <Button
                    onPress={() => navigation.navigate('Profile',{MyName:'Nikita'})}
                    title="Jump to profile "

                />
            </View>
        </VithSafeAreaView>

    );
}

function ProfileScreen({ route,navigation}: ProfileProps) {
    const param = route.params
    return (
        <VithSafeAreaView>
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
                <Text>Profile Screen</Text>
                <Text>{JSON.stringify(param)}</Text>
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
                    onPress={() => navigation.navigate('Auth',{screen:'Login'})}
                    title="Jump to home "

                />
            </View>
        </VithSafeAreaView>
    );
}

//const Stack = createNativeStackNavigator<RootStackParamList>();
const Stack = createBottomTabNavigator<RootStackParamList>();
//const Stack = createDrawerNavigator<RootStackParamList>();



export default function App() {

    return (

        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Auth" component={RootAuth}/>
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

