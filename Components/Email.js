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
import { Checkbox } from "react-native-paper";
import { Button } from "react-native-paper";

const Email = () => {
  const [checked, setChecked] = React.useState(false);
  const [existing, setExisting] = React.useState(false);
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
              <Text>Referral</Text>
              <TextInput
                placeholder="Name"
                placeholderTextColor={"#fff"}
                activeUnderlineColor="transparent"
                underlineColor="transparent"
                selectionColor="#fff"
                style={styles.inputStyles}
                value={values.address}
                onChangeText={handleChange("address")}
                onBlur={() => setFieldTouched("address")}
              />
              {touched.address && errors.address && (
                <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                  {errors.address}
                </Text>
              )}
              <TextInput
                placeholder="Address"
                placeholderTextColor={"#fff"}
                activeUnderlineColor="transparent"
                underlineColor="transparent"
                selectionColor="#fff"
                style={styles.inputStyles}
                value={values.address}
                onChangeText={handleChange("address")}
                onBlur={() => setFieldTouched("address")}
              />
              {touched.address && errors.address && (
                <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                  {errors.address}
                </Text>
              )}

              <TextInput
                underlineColorAndroid="transparent"
                value={values.appartment}
                style={styles.inputStyles}
                onChangeText={handleChange("appartment")}
                onBlur={() => setFieldTouched("appartment")}
                placeholder="Appartment"
                placeholderTextColor={"#fff"}
                activeUnderlineColor="transparent"
                underlineColor="transparent"
                selectionColor="#fff"
              />
              {touched.appartment && errors.appartment && (
                <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                  {errors.appartment}
                </Text>
              )}
              <TextInput
                value={values.zipCode}
                style={styles.inputStyles}
                onChangeText={handleChange("zipCode")}
                onBlur={() => setFieldTouched("zipCode")}
                placeholder="Zip Code"
                placeholderTextColor={"#fff"}
                activeUnderlineColor="transparent"
                underlineColor="transparent"
                selectionColor="#fff"
                keyboardType={"decimal-pad"}
              />
              {touched.zipCode && errors.zipCode && (
                <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                  {errors.zipCode}
                </Text>
              )}
              <TextInput
                value={values.employeeId}
                style={styles.inputStyles}
                onChangeText={handleChange("employeeId")}
                onBlur={() => setFieldTouched("employeeId")}
                placeholder="Emplyee ID"
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

<Text>Referred By</Text>
<TextInput
                placeholder="Name"
                placeholderTextColor={"#fff"}
                activeUnderlineColor="transparent"
                underlineColor="transparent"
                selectionColor="#fff"
                style={styles.inputStyles}
                value={values.address}
                onChangeText={handleChange("address")}
                onBlur={() => setFieldTouched("address")}
              />
              {touched.address && errors.address && (
                <Text style={{ fontSize: 12, color: "#FF0D10" }}>
                  {errors.address}
                </Text>
              )}
              <Text>Employee</Text>
              <TextInput
                value={values.employeeId}
                style={styles.inputStyles}
                onChangeText={handleChange("employeeId")}
                onBlur={() => setFieldTouched("employeeId")}
                placeholder="Emplyee ID"
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
  <Button
            style={{ borderRadius: 10,width: '49%' }}
            textColor="#fff"
            buttonColor="#0047bb"
            mode="contained"
            onPress={() => console.log('semd link')}
          >
  
            <Text style={styles.btn_text}>Send Link</Text>
         
          </Button>


            </View>
          )}
        </Formik>
        {/* FORM SECTION */}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Email;

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
