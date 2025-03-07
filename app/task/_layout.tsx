import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'
import TaskHeader from '@/compnents/TaskHeader'

const TaskLayout = () => {
    return (
        <Stack
            screenOptions={{
                header: () => <TaskHeader />
            }}
        />
    )
}

export default TaskLayout