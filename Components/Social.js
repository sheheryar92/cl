import {
    Dimensions,
    KeyboardAvoidingView,
    ScrollView,
  
    StyleSheet,
    Text,
    View,
  } from "react-native";
  import React from "react";
  import * as yup from "yup";
  import { Formik } from "formik";
  import { TextInput } from "react-native-paper";
  import { SocialIcon, SocialIconProps } from '@rneui/themed';
  
  const Social = () => {

    return (
      <KeyboardAvoidingView
  
      //behavior={Platform.OS === "ios" ? "padding" : null}
      >
        <ScrollView>
          {/* FORM SECTION */}
          <Formik
            initialValues={{
              address: "",
              appartment: "",
              zipCode: "",
              employeeId: "",
              
            }}
            onSubmit={(values) => Alert.alert(JSON.stringify(values))}
            validationSchema={yup.object().shape({
              address: yup
                .string()
                .min(4)
                .max(20, "Address Password should not excced 20 chars.")
                .required("Please, provide Addrres!"),
                appartment: yup.string().required('please, provide your appartment!') ,
                zipCode: yup
  
                .number()
    
                .required("Plase, Provide Zipcode"),
                employeeId: yup.string().required("Please, provide your employee Id!"),
           
            })}
          >
            {({
              values,
              handleChange,
              errors,
              setFieldTouched,
              touched,
              isValid,
              handleSubmit,
            }) => (
              <View >
                
                    <TextInput
                  value={values.employeeId}
                  style={styles.inputStyles}
                  onChangeText={handleChange("employeeId")}
                  onBlur={() => setFieldTouched("employeeId")}
                  placeholder="Shorten URL"
                  placeholderTextColor={"#fff"}
                  activeUnderlineColor="transparent"
                  underlineColor="transparent"
                  selectionColor="#fff"
                />
                {touched.employeeId && errors.employeeId && (
                  <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                    {errors.employeeId}
                  </Text>
                )}
                {/* SOCIAL ICONS */}
<View style={styles.social_icons}>
    <Text>je;;p</Text>
    </View>
        {/* SOCIAL ICONS */}
              </View>
              
            )}
   </Formik>
          {/* FORM SECTION */}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };
  
  export default Social;
  
  const styles = StyleSheet.create({
    inputStyles: {
      marginVertical: 5,
      borderRadius: 10,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      height: 50,
      paddingHorizontal: 15,
      backgroundColor: "#49d598",
      width: Dimensions.get('window').width -40,
  
    },
    moving_checkBox: {
      flexDirection: "row",
      alignItems: "center",
    },
    check_box: {
      flexDirection: "row",
    },
    button_container: {
      marginVertical: "2%",
      flexDirection: "row",
      justifyContent: "space-between",
      flexWrap: "wrap",
    },
    btn_text: { fontSize: 18, fontWeight: "400" },
  });
  