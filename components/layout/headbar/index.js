import * as React from 'react';
import { Appbar } from 'react-native-paper';

const HeadBar = () => {
    const _goBack = () => console.log('Went back');

    const _handleSearch = () => console.log('Searching');

    const _handleMore = () => console.log('Shown more');

    return (
        <Appbar.Header mode='medium'>
            <Appbar.BackAction onPress={_goBack} />
            <Appbar.Content title="Proof Of Concept" />
            <Appbar.Action icon="magnify" onPress={_handleSearch} />
            <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
        </Appbar.Header>
    );
};

export default HeadBar;