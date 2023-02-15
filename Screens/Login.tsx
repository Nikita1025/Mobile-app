import React from 'react';
import {Button, Text, View} from "react-native";
import {globalStyle} from "../global-styles/Global-styles";
import {RootAuthScreenProps} from "../Types/TypesNavigation";

export const Login = ({navigation}:RootAuthScreenProps) => {
    return (
        <View style={[globalStyle.center]}>
            <Text>Login</Text>
            <Button
                onPress={() => navigation.navigate('Auth',{screen:'Register', params:{id:100, name:'Nikita'}})}
                title="Jump to Register "

            />
        </View>
    );
};

