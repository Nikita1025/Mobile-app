import React from 'react'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {View} from "react-native";

type PropsType = {
    demo?: boolean
}

export function Main({demo = false}: PropsType) {
    return (
        <View style={{flex:1,backgroundColor: '#004643',paddingTop: 50}}>
            <View style={{flex:1}} >
                <TodolistsList demo={demo}/>
            </View>
        </View>
    )
}