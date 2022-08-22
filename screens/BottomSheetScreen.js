import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Tab, TabView } from "@rneui/themed";
import Email from "../Components/Email";
import { Divider } from "react-native-paper";
import Social from "../Components/Social";

const BottomSheetScreen = () => {
  const [index, setIndex] = React.useState(0);
  return (
    <View style={styles.contianer}>
      <Text className="text-2xl">Share Link</Text>
      <Divider />

{/* TAB */}
<View style={{   width:Dimensions.get('window').width -40,  alignSelf: 'center'}}>
<Tab
        value={index}
        onChange={(e) => setIndex(e)}
        indicatorStyle={{
          backgroundColor: "#0247c0",
          height: 3,
        }}
        variant="primary"
        containerStyle={{

      backgroundColor: '#fff',
       alignSelf: 'center'
        }}
      >
        <Tab.Item
  containerStyle={
    (active) => ({
      backgroundColor: active ? "none" : "none",
    })
  }
        iconContainerStyle={(active) => ({
          backgroundColor: active ? "#0046b5" : "#bbceeb",
          padding: 5,
          borderRadius: 30,
        })}
          title="EMAIL"
           titleStyle={(active) => ({
            color: active ? "#0046b5" : "#bbceeb",
          })}
          icon={{
            name: "email",
            type: "fontisto",
            color: "white",
         
            padding: 5,
            borderRadius: 30,
          }}
        />
        <Tab.Item
        containerStyle={
    (active) => ({
      backgroundColor: active ? "none" : "none",
    })
  }
          title="SOCIAL"
          titleStyle={(active) => ({
            color: active ? "#0046b5" : "#bbceeb",
          })}
          icon={{
            name: "share",
            type: "fontAwesome",
            color: "white",
            padding: 5,
            borderRadius: 30,
          }}
          iconContainerStyle={(active) => ({
            backgroundColor: active ? "#0046b5" : "#bbceeb",
            padding: 5,
            borderRadius: 30,
          })}
        />
        <Tab.Item
        containerStyle={
    (active) => ({
      backgroundColor: active ? "none" : "none",
    })
  }
          title="SMS"
           titleStyle={(active) => ({
            color: active ? "#0046b5" : "#bbceeb",
          })}
          icon={{
            name: "sms",
            type: "fontAwesome",
            color: "white",
          
            padding: 5,
            borderRadius: 30,
          }}
          iconContainerStyle={(active) => ({
            backgroundColor: active ? "#0046b5" : "#bbceeb",
            padding: 5,
            borderRadius: 30,
          })}
        />
      </Tab>
</View>
{/* TAB */}
      
{/* CONTENT */}
 <TabView value={index} onChange={setIndex} animationType="spring"
 containerStyle={{

 }}
 tabItemContainerStyle={{

  paddingHorizontal: 20
 }}
 >
        <TabView.Item 
     
        >
          <Email />
        </TabView.Item>
        <TabView.Item
        >
          <Social />
        </TabView.Item>
        <TabView.Item>
          <Email />
        </TabView.Item>
      </TabView>

{/* CONTENT */}


    </View>
  );
};

export default BottomSheetScreen;

const styles = StyleSheet.create({
  contianer: {
  
   flex: 1,
   backgroundColor: '#fff',
  },
});
