import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function Home() {
    const navigation = useNavigation()
    const handleCreate = () => {

    }
    return (
        <View>
            <Button
                onPress={handleCreate}
                title="Learn More"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
        </View>
    )
}