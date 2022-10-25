import React from 'react'
import { TextInput } from 'react-native'

const InputSection = () => {
    return (
        <TextInput
            style={{
                height: 40,
                borderColor: 'red',
                borderWidth: 1,
                margin: 10
            }}
            defaultValue="You can type whatever you like here"
        />
    )
}

export default InputSection