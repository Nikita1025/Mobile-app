import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {CompositeScreenProps, NavigatorScreenParams} from "@react-navigation/native";
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import type { StackScreenProps } from '@react-navigation/stack';


export type RootStackParamList = {
    Auth: NavigatorScreenParams<RootAuthParamList>;
    Profile: {MyName:string}|undefined;
    User:  undefined;
};

export type RootAuthParamList={
    Login: undefined
    Register: {id:number, name:string}
}

export type ProfileProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;
export type HomeProps = NativeStackScreenProps<RootStackParamList, 'Auth'>;
export type UserProps = NativeStackScreenProps<RootStackParamList, 'User'>;

export type RootAuthScreenProps= CompositeScreenProps<
    BottomTabScreenProps<RootStackParamList, 'Auth'>,
    StackScreenProps<RootAuthParamList>>