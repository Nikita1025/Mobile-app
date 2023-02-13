import React, { useState} from 'react';
import { TextInput, TouchableOpacity, View,StyleSheet} from "react-native";
import {Ionicons} from '@expo/vector-icons';


type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
}

export const AddItemForm = React.memo(function ({addItem, disabled = false}: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItemHandler = () => {
        if (title.trim() !== "") {
            addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: string) => {
        setTitle(e)
    }

    return <View style={{flexDirection: 'row'}}>

        <TextInput
            style={styles.input}
            onChangeText={onChangeHandler}
            value={title}
        />
        <View>
            <TouchableOpacity onPress={addItemHandler}>
                <Ionicons name="add" size={24} color="#fffffe"/>
            </TouchableOpacity>
        </View>
    </View>
})
const styles = StyleSheet.create({
    input: {
        width:150,
        backgroundColor:'#001e1d',
        color:'#fffffe'
    },
});