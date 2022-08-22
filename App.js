import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import BtmSheet from "./Components/BtmSheet";
import Form from "./Components/Form";
import BottomSheetScreen from "./screens/BottomSheetScreen";


import Home from "./screens/Home";


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
    <TailwindProvider>
      <Stack.Navigator>
     
      {/* <Stack.Screen name="BottomSheetScreen" component={BottomSheetScreen} /> */}
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Form" component={Form} />
      </Stack.Navigator>
    </TailwindProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});




// import { StyleSheet, Text, View } from 'react-native'
// import React from 'react'
// import BtmSheet from './Components/BtmSheet'

// const App = () => {
//   return (
//     <>
// <BtmSheet />
//     </>
//   )
// }

// export default App

// const styles = StyleSheet.create({})