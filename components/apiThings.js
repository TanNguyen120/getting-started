import cheerio from 'cheerio-without-node-native/lib/cheerio';
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native';

const ApiThings = () => {
    const [apiContent, setApiContent] = useState("");

    useEffect(() => {
        const getApiData = async () => {
            const searchUrl = `https://cungcau.net/index.php/20-bai-viet-cua-admin/3-thong-bao-k-hoch-ct-din-an-giang`;
            const response = await fetch(searchUrl);      // fetch page 
            const responseData = await response.text();

            // const htmlString = await response.text();     // get response text
            // const $ = cheerio.load(htmlString);           // parse HTML string

            // const liList = $("#s-results-list-atf > li"); // select result <li>s
            setApiContent(responseData);
        }
        getApiData()
    }, [])
    return (
        <View>
            <ScrollView pagingEnabled={true}>

                <Text>
                    {JSON.stringify(apiContent)}
                </Text>
            </ScrollView>
        </View>
    )
}

export default ApiThings