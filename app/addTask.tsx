import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useTasksContext } from '@/provider/taskProvider'
import { v4 as uuidv4 } from 'uuid';
import { router } from 'expo-router';

const AddTask = () => {

    const {
        taskList,
        addTask,
    } = useTasksContext()

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const onValidTask = useCallback(() => {

        if (!title || !description) return

        const newTask = {
            id: "'id" + taskList.length + 1,
            title,
            description,
            is_toggle: false
        }

        addTask(newTask)

        router.back()
    }, [title, description])

    return (
        <View>
            <Text>Add Task</Text>
            <Text>Title</Text>
            <TextInput
                placeholder="Title"
                value={title}
                onChangeText={setTitle}
            />
            <Text>Description</Text>
            <TextInput
                placeholder="Description"
                value={description}
                onChangeText={setDescription}
            />
            <TouchableOpacity onPress={onValidTask}>
                <Text>Add task</Text>
            </TouchableOpacity>
        </View>
    )
}

export default AddTask