import React from 'react'
import { ScrollView, Image, Text, View } from 'react-native'
const ScrollViewSection = () => {
    const logo = {
        uri: 'https://image.api.playstation.com/cdn/HP0082/CUSA06592_00/O9k8kwZ1hbPiFTXYN2DJ2G5XxLik6gJEBd19vNPN1jSAJIVyD9fgxrkdkUIiErJw.png',
        width: 400,
        height: 400
    };
    return (
        <ScrollView pagingEnabled={true}>
            <Text style={{ fontSize: 96 }}>Scroll me plz</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 96 }}>Scroll Some More</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 96 }}>If you don`t mind</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 96 }}>This very Long</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 96 }}>And Boring</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 80 }}>Scroll View component</Text>
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Image source={logo} />
            <Text style={{ fontSize: 80 }}>At least we have some beauty android here </Text>
        </ScrollView>
    )
}

export default ScrollViewSection