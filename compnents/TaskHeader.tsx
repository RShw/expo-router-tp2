import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Link, router } from 'expo-router'

const TaskHeader = () => {

    const goBack = () => {
        router.navigate("/")
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={goBack}>
                <Text>Go Back</Text>
            </TouchableOpacity>
            <Text>Task</Text>
            <View />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 40,
        flexDirection: 'row',
        justifyContent: 'space-between',
    }
})

export default TaskHeader