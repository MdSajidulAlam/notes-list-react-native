import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AsyncStorage } from 'react-native'
import { TextInput } from 'react-native'

export default function CreateNote() {
    const [note, setNote] = useState('')
    const navigation = useNavigation()

    const saveNotes = async () => {
        const value = await AsyncStorage.getItem('NOTES')
        const n = value ? JSON.parse(value) : []
        n.push(note)
        await AsyncStorage.setItem('NOTES', JSON.stringify(n))
            .then(() => navigation.navigate('AllNotes'))
        setNote('')
    }

    return (
        <View>
            <TextInput
                value={note}
                onChangeText={setNote}
                style={{ color: '#fff', fontSize: 22 }}
                multiline={true}
                autoFocus
                selectionColor='#fff'
            ></TextInput>
            <Button
                onPress={saveNotes}
                title="Create Note"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}