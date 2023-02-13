import React from 'react'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useSelector} from 'react-redux'
import {AppRootStateType} from './store'
import {RequestStatusType} from './app-reducer'
import {View} from "react-native";
import {Header} from "react-native-elements";

type PropsType = {
    demo?: boolean
}

export function Main({demo = false}: PropsType) {
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    return (
        <View style={{flex:1}}>
            <Header
                placement="left"
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <View style={{flex:1}} >
                <TodolistsList demo={demo}/>
            </View>
        </View>
    )
}