import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import {Text, View} from "react-native";
import {Login} from "./Login";
import {Register} from "./Register";


const Stack = createStackNavigator()
export const RootAuth = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name={'Login'} component={Login}/>
            <Stack.Screen name={'Register'} component={Register}/>
        </Stack.Navigator>
    );
};

