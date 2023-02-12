import  {useState} from 'react';
import {TextInput, View, StyleSheet, Button} from "react-native";
import {globalStyle} from "../global-styles/Global-styles";
type InputType={
    title: string
    changeTitle:(taskId:number, title:string)=>void
    id:number
    setShow:(id:number)=>void
}
export const Input = (props:InputType) => {
    const [value, setValue]= useState(props.title)
    const changeTitle=(title:string)=>{
        setValue(title)
    }
    const onPress=()=>{
        props.changeTitle(props.id, value)
        props.setShow(0)
    }
    return (
        <View style={{flexDirection:'row'}}>
            <TextInput style={[styles.input, globalStyle.border]}
                       value={value}
                       onChangeText={(title)=>changeTitle(title)}
            />
            <Button title={'+'} onPress={onPress}/>
        </View>
    );
};

const styles=StyleSheet.create({
    input: {
        width: '80%',
        backgroundColor: '#fff',
        fontSize: 18,
        padding: 8,
    },
})