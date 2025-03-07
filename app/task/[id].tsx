import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { TTask, useTasksContext } from '@/provider/taskProvider'

const Task = () => {

    const {
        taskList,
        toggleTaskCompletion,
        deleteTask,
    } = useTasksContext()

    const params = useLocalSearchParams()

    const [task, setTask] = useState<TTask | undefined>(undefined)

    useEffect(() => {

        if (!params.id || !taskList) return

        const task = taskList.find((task) => task.id === params.id)
        setTask(task)
    }, [taskList, params])

    const toggleTask = () => {
        if (!task) return

        toggleTaskCompletion(task.id)
    }

    const onDeleteTask = () => {
        if (!task) return

        deleteTask(task.id)

        router.navigate('/')
    }


    return (
        <View>
            <Text style={task?.is_toggle && { textDecorationLine: 'line-through' }} >{task?.title}</Text>
            <Text style={task?.is_toggle && { textDecorationLine: 'line-through' }}>{task?.description}</Text>
            {/* <Text>{item.description}</Text> */}
            <TouchableOpacity onPress={toggleTask}>
                <Text>Toggle/Untoggle</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={onDeleteTask}>
                <Text>Delete task</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Task