import {Alert, Button, Keyboard, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View} from 'react-native';
import {ReactElement, ReactNode, useState} from "react";
import Checkbox from 'expo-checkbox';
import {Input} from "./Input/Input";
import {globalStyle} from "./global-styles/Global-styles";

export default function App() {
    const [value, setValue] = useState('')
    const [show, setShow] = useState(0)
    const [task, setTask] = useState([
        {id: 1, title: 'React', isDone: true},
        {id: 2, title: 'CSS', isDone: true},
        {id: 3, title: 'JS', isDone: false},
        {id: 4, title: 'React', isDone: true},
        {id: 5, title: 'React native', isDone: false}
    ])
    const addTask = () => {
        const newTask = {id: task.length + 1, title: value, isDone: false}
        setTask([...task, newTask])
        setValue('')
    }
    const removeTask = (id: number) => {
        const newTask = task.filter(el => el.id !== id)
        setTask(newTask)
    }
    const changeTitle = (taskId: number, title: string) => {
        setTask(task.map(el => el.id === taskId ? {...el, title} : el))
    }
    const changeIsDone = (NewIsDone: boolean, id: number) => {
        const newValue = task.map(el => el.id === id ? {...el, isDone: NewIsDone} : el)
        setTask(newValue)
    }
    return (
        <View style={styles.container}>
            <HideKeyboard>
                <View style={[globalStyle.border, {width: '80%', alignItems: 'center', paddingVertical: 30}]}>
                    <TextInput style={[styles.input]} value={value} onChangeText={setValue}/>
                </View>
            </HideKeyboard>
            <View style={[globalStyle.border, {backgroundColor: '#ff8906'}]}>
                <Button color={'#fffffe'} title={'Add task'} onPress={addTask}/>
            </View>
            <View style={{width: '60%'}}>
                {task.map(el => {
                    return <View key={el.id} style={[styles.boxTak]}>
                        <Checkbox value={el.isDone} onValueChange={(isDone) => changeIsDone(isDone, el.id)}/>
                        {show === el.id
                            ? <Input id={el.id} setShow={setShow} title={el.title} changeTitle={changeTitle}/>
                            : <Text onPress={() => setShow(el.id)}>{el.title}</Text>}
                        {/*<View style={[globalStyle.border,{backgroundColor:'#ff8906'}]}>*/}
                        {/*    <Button color={'#fffffe'} title={'Remove'} onPress={()=>removeTask(el.id)}/>*/}
                        {/*</View>*/}
                    </View>
                })}
            </View>
        </View>
    );
}
const HideKeyboard = ({children}: { children: ReactNode }): ReactElement => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        {children}
    </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f0e17',
        alignItems: 'center',
        justifyContent: 'center',
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

