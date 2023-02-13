import React, {useCallback} from 'react'
import {EditableSpan} from '../../../../components/EditableSpan/EditableSpan'
import {TaskStatuses, TaskType} from '../../../../api/todolists-api'
import {StyleSheet, TouchableOpacity, View} from "react-native";
import Checkbox from 'expo-checkbox';
import {MaterialIcons} from "@expo/vector-icons";

type TaskPropsType = {
    task: TaskType
    todolistId: string
    changeTaskStatus: (id: string, status: TaskStatuses, todolistId: string) => void
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
    removeTask: (taskId: string, todolistId: string) => void
}
export const Task = React.memo((props: TaskPropsType) => {
    const onClickHandler = useCallback(() => props.removeTask(props.task.id, props.todolistId), [props.task.id, props.todolistId]);

    const onChangeHandler = useCallback((checked: boolean) => {
        props.changeTaskStatus(props.task.id, checked ? TaskStatuses.Completed : TaskStatuses.New, props.todolistId)
    }, [props.task.id, props.todolistId]);

    const onTitleChangeHandler = useCallback((newValue: string) => {
        props.changeTaskTitle(props.task.id, newValue, props.todolistId)
    }, [props.task.id, props.todolistId]);

    return <View key={props.task.id}
            style={props.task.status === TaskStatuses.Completed?{...styles.task, opacity:0.5}:{...styles.task}}
    >
        <View style={{ flexDirection:'row'}} >
            <Checkbox
                value={props.task.status === TaskStatuses.Completed}
                //checked={}
                //color="primary"
                style={{marginRight:12}}
                onValueChange={onChangeHandler}
            />
            <EditableSpan value={props.task.title} onChange={onTitleChangeHandler}/>
        </View>



        {/*<IconButton onClick={onClickHandler}>*/}
        {/*    <Delete/>*/}
        {/*</IconButton>*/}
        <TouchableOpacity style={{marginLeft:25}} onPress={onClickHandler}>
            <MaterialIcons name="delete" size={24} color="black"/>
        </TouchableOpacity>
    </View>
})
const styles = StyleSheet.create({
    task:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:4
    }
})