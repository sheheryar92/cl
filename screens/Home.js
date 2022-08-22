import {
  
  Dimensions,
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect ,useRef} from "react";
import Logo from "../assets/logo.svg";
import Form from "../Components/Form";
import { Button } from "react-native-paper";
import BottomSheet from "react-native-gesture-bottom-sheet";
import BottomSheetScreen from "../screens/BottomSheetScreen";

const width = Dimensions.get("window").width;

const Home = () => {

    // Needed in order to use .show()
    const bottomSheet = useRef();
  const navgation = useNavigation();

  useLayoutEffect(() => {
    navgation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <View style={styles.container} className="bg-white items-center" >
<StatusBar />
    <View style={styles.logo}>
    <Logo
          className="content-cente"
          fill={"black"}
          width={width /1}
          height={width /10} 
        />
    </View>
     


      <Image
  
        style={styles.background_image}
        source={require("../assets/background.png")}
      />

      <View style={styles.form_container}>
   <Form />
      </View>


         {/* BUTTONS */}
         <View style={styles.button_container}>
          <Button
            style={{ borderRadius: 10, width: '49%' }}
            textColor="#fff"
            buttonColor="#0047bb"
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            <Text style={styles.btn_text}>Search</Text>
          </Button>
 
  

 
          <Button
            style={{ borderRadius: 10,width: '49%' }}
            textColor="#fff"
            buttonColor="#0047bb"
            mode="contained"
            onPress={() => bottomSheet.current.show()}
          >
  
            <Text style={styles.btn_text}>Share Link</Text>
         
          </Button>
        </View>
        {/* BUTTONS */}

    {/* FOOTER */}
<View className='bg-black flex flex-row' style={styles.footer}>
<Text className="text-white"  >Copyright 2020 bundledealer.com</Text>
<Text className="text-2xl text-white" >IBEX</Text>
</View>
       {/* FOOTER */}

       <BottomSheet    ref={bottomSheet} height={600} >
   
   <BottomSheetScreen  />
       </BottomSheet>

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
logo: {bottom: '2%'},
  container: {
    justifyContent: 'center',
 flex: 1,
   backgroundColor: '#fff'

  },
  background_image: {

height: width /2,
width: width
  },
  form_container: {
    width: width -40,

 marginVertical: '5%'
  },
  footer: {width: width, paddingHorizontal: 20 , paddingVertical: 9 ,  alignItems: 'center', justifyContent: 'space-between',
position: 'absolute', bottom: 0},
button_container: {
width: width -40 ,
  marginVertical: "2%",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
},
btn_text: { fontSize: 18, fontWeight: "400" },
});
