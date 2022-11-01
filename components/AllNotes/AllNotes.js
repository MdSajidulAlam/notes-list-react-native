import { View, Text } from 'react-native'
import React from 'react'
import { useFocusEffect } from '@react-navigation/native'

export default function AllNotes() {
    const [notes, setNotes] = useState([])
    const navigation = useNavigation()

    useFocusEffect({
        // React.useCallback(()=>{
        //     getNotes()
        // })
    })

    return (
        <View>
            <Text>AllNotes</Text>
        </View>
    )
}