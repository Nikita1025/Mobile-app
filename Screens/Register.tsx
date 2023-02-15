import React from 'react';
import {Button, Text, View} from "react-native";
import {globalStyle} from "../global-styles/Global-styles";
import {RootAuthScreenProps} from "../Types/TypesNavigation";

export const Register = ({route,navigation}:RootAuthScreenProps) => {
    return (
        <View style={[globalStyle.center]}>
            <Text>Register</Text>
            <Text>{JSON.stringify(route.params, null, 2)}</Text>
            <Button
                onPress={() => navigation.navigate('User')}
                title="Jump to User "

            />
        </View>
    );
};

