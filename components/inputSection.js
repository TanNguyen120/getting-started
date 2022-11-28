import React, { useState } from 'react'
import { TextInput, View, Text } from 'react-native'

const InputSection = () => {
    const [inputText, setInputText] = useState("")
    return (
        <View style={{ backgroundColor: 'slate' }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Type Some Things Below</Text>
            <TextInput
                style={{
                    height: 40,
                    borderColor: 'red',
                    borderWidth: 1,
                    margin: 10,
                    width: 700,
                }}
                placeholder="You can type whatever you like here"
                onChangeText={textChange => setInputText(textChange)}
                defaultValue={inputText}
            />
            <Text style={{ padding: 10, fontSize: 42 }}>
                {inputText.split(' ').map((word) => word + ' 🍕 	<(￣︶￣)> ').join(' ')}
            </Text>
        </View>
    )
}

export default InputSection