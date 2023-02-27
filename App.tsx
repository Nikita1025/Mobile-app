import {StyleSheet, Text, View, Image, ListRenderItem, FlatList, Dimensions} from 'react-native';
import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Button} from 'react-native';
import {SafeAreaProvider} from "react-native-safe-area-context";
import {VithSafeAreaView} from "./Helper/VithSafeAreaView";
import {HomeProps, ProfileProps, RootStackParamList, UserProps} from "./Types/TypesNavigation";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createDrawerNavigator} from "@react-navigation/drawer";
import {RootAuth} from "./Screens/RootAuth";
import {fakeDataUser} from "./FakeDataUser";

const {width,height}= Dimensions.get('screen')

const WIDTH= width
const HEIGHT= height
type ItemType={
    id:number
    title:string
    price:number
}
const titles=['Iphone', 'MacBook', 'Lenovo', 'Asus', 'Android']
const prices=[2000, 3000, 4000, 1133, 2222]

const data:ItemType[]=[...Array(30)].map((_,index)=>({
    id: index+1,
    title: titles[index % titles.length],
    price: prices[index % prices.length]
}))
export default function App(){
    const render:ListRenderItem<ItemType>=({item})=>{
        return<View style={style.item}>
            <Text>{item.title}</Text>
            <Text>{item.price}</Text>
        </View>
    }
    return (
        <View style={style.container}>
            <FlatList
                data={data}
                renderItem={render}
                numColumns={2}
                columnWrapperStyle={{justifyContent:'space-between'}}
            />
        </View>
    )
}



const style= StyleSheet.create({
    container:{
        marginTop: 60,
        flex:1,
        paddingHorizontal:20
    },
    item:{
        marginVertical: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        backgroundColor:'#9e72ea',
        borderWidth:1,
        borderRadius:10,
        width:(WIDTH -20 * 2)/2 -5,
    }
})
// function HomeScreen({navigation}: HomeProps) {
//     return (
//         <VithSafeAreaView>
//             <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
//                 <Text>Home Screen</Text>
//                 <Button
//                     onPress={() => navigation.navigate('Profile', {MyName: 'Nikita'})}
//                     title="Jump to profile "
//
//                 />
//             </View>
//         </VithSafeAreaView>
//
//     );
// }
//
// function ProfileScreen({route, navigation}: ProfileProps) {
//     const param = route.params
//     return (
//         <VithSafeAreaView>
//             <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
//                 <View>
//                     {fakeDataUser.map((el) => {
//                         return (<View style={styles.cont} key={el.id}>
//                             <Image style={styles.image} source={{uri: el.avatar}}/>
//                             <Text style={styles.text} onPress={() => navigation.navigate('User')}>
//                                 {el.lastName}
//                                 {el.firstName}
//                             </Text>
//
//                         </View>)
//                     })}
//                 </View>
//             </View>
//         </VithSafeAreaView>
//
//     );
// }
//
// function UserScreen({navigation}: UserProps) {
//     return (
//         <VithSafeAreaView>
//             <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center'}}>
//                 {fakeDataUser.map((el) => {
//                     return <View key={el.id} style={styles.contUser}>
//                         <Image style={styles.imageUser} source={{uri: el.avatar}}/>
//                         <View style={styles.textCont}>
//                             <Text>
//                                 {el.firstName}
//                                 {el.lastName}
//                             </Text>
//                             <Text>{el.role}</Text>
//                             <Text>{el.location.city}</Text>
//                         </View>
//                         <View>
//                             {el.skills.map((s, index) => {
//                                 return <View key={index} style={styles.skills}>
//                                     <Text>{s}</Text>
//                                 </View>
//                             })}
//                         </View>
//                     </View>
//                 })}
//                 <Button
//                     onPress={() => navigation.navigate('Auth', {screen: 'Login'})}
//                     title="Jump to home "
//
//                 />
//             </View>
//         </VithSafeAreaView>
//     );
// }
//
// //const Stack = createNativeStackNavigator<RootStackParamList>();
// const Stack = createBottomTabNavigator<RootStackParamList>();
// //const Stack = createDrawerNavigator<RootStackParamList>();
//
//
// export default function App() {
//
//     return (
//
//         <SafeAreaProvider>
//             <NavigationContainer>
//                 <Stack.Navigator>
//                     <Stack.Screen name="Auth" component={RootAuth}/>
//                     <Stack.Screen name="Profile" component={ProfileScreen}/>
//                     <Stack.Screen name="User" component={UserScreen}/>
//                 </Stack.Navigator>
//             </NavigationContainer>
//         </SafeAreaProvider>
//     );
// }
//
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'white',
//     },
//     input: {
//         width: '80%',
//         backgroundColor: '#fff',
//         fontSize: 18,
//         padding: 8,
//     },
//     boxTak: {
//         flexDirection: 'row',
//         backgroundColor: '#a9a9a3',
//         justifyContent: 'space-between',
//         paddingVertical: 4,
//         paddingHorizontal: 20,
//         marginVertical: 2,
//     },
//     image: {
//         height: 50,
//         width: 50,
//         borderRadius: 50,
//     },
//     cont: {
//         display: 'flex',
//         flexDirection: 'row',
//         alignItems: 'center',
//         justifyContent: 'center',
//         width: 400,
//         height: 100,
//         backgroundColor: '#ecece6',
//     },
//     text: {
//         paddingHorizontal: 5,
//         fontSize: 18
//     },
//     imageUser: {
//         width: 150,
//         height: 150,
//         borderRadius: 500,
//     },
//     skills: {
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     textCont: {
//         display: 'flex',
//         flexDirection: 'column',
//     },
//     contUser: {
//         flex: 1,
//         display: 'flex',
//         flexDirection: 'column',
//         alignItems: 'center',
//         justifyContent: 'center',
//     }
// });

