import React, {ReactNode} from 'react';
import {SafeAreaView} from "react-native-safe-area-context";
type VithSafeAreaViewType={
    children: ReactNode
}
export const VithSafeAreaView = (props:VithSafeAreaViewType) => {
    return (
        <SafeAreaView style={{flex:1}}>
            {props.children}
        </SafeAreaView>
    );
};

