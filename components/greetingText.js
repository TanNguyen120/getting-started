import React from 'react'
import { Text, Image, View } from 'react-native'

const GreetingText = () => {
    return (
        <View>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hello To My Very First React Native App</Text>
            <Image source={{ uri: 'https://static.bandainamcoent.eu/high/dark-souls/brand-setup/ds3_thumb_brand_624x468.jpg' }} style={{ width: 300, height: 300 }} />
        </View>
    )
}

export default GreetingText