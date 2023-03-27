import cheerio from 'cheerio-without-node-native/lib/cheerio';
import React, { useEffect, useState } from 'react'
import { ScrollView, Text, View } from 'react-native';

const ApiThings = () => {
    const [apiContent, setApiContent] = useState([]);

    useEffect(() => {
        const getApiData = async () => {
            const searchUrl = `https://cungcau.net/index.php/20-bai-viet-cua-admin/3-thong-bao-k-hoch-ct-din-an-giang`;
            const response = await fetch(searchUrl);      // fetch page 
            const responseData = await response.text();
            const $ = cheerio.load(responseData);           // parse HTML string
            const theList = $('.entry-content > p').text();
            let theArray = [];
            await $('.entry-content > p').each((_, e) => {
                theArray.push($(e).text());
            })

            // const htmlString = await response.text();     // get response text
            // const $ = cheerio.load(htmlString);           // parse HTML string

            // const liList = $("#s-results-list-atf > li"); // select result <li>s
            setApiContent(theArray);
        }
        getApiData()
    }, [])
    return (
        <View>
            <ScrollView pagingEnabled={true}>

                {apiContent.map((e) => <Text>{e}</Text>)}

            </ScrollView>
        </View>
    )
}

export default ApiThings