import {StyleSheet, View} from 'react-native';
import React from "react";
import {Main} from "./src/app/Main";
import {store} from "./src/app/store";
import {Provider} from "react-redux";


export default function App() {

    return (
        <Provider store={store}>
            <View style={styles.container}>
                <Main/>
            </View>
        </Provider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    input: {
        width: '80%',
        backgroundColor: '#fff',
        fontSize: 18,
        padding: 8,
    },
    boxTak: {
        flexDirection: 'row',
        backgroundColor: '#fffffe',
        justifyContent: 'space-between',
        paddingVertical: 4,
        paddingHorizontal: 20,
        marginVertical: 2,
    }
});

