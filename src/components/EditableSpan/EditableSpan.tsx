import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";
import {Feather} from '@expo/vector-icons';

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {

    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.value);
    }
    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    }
    const changeTitle = (e: string) => {
        setTitle(e)
    }

    return editMode
        ? <View style={{flexDirection:'row'}}>
            <TextInput
                style={styles.input}
                onChangeText={changeTitle}
                value={title}
            />
            <View>
                <Feather name="check" size={24} color="black" onPress={activateViewMode}/>
            </View>
        </View>
        : <Text
            style={{fontSize:18, fontWeight:'500'}}
            onLongPress={activateEditMode}>{props.value}</Text>
});
// <TextField value={title} onChange={changeTitle} autoFocus onBlur={activateViewMode} />


const styles = StyleSheet.create({
    input: {
        width: 150,
        backgroundColor: '#b14c4c'
    },
});