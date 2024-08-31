import { GoogleInputProps } from "@/types/type";
import React from "react";
import { Text, View } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";

const GoogleTextInput = ({
  icon,
  initialLocation,
  containerStyle,
  textInputBackgroundColor,
  handlePress,
}: GoogleInputProps) => (
  <View
    className={`flex flex-row items-center justify-center relative z-50 rounded-xl ${containerStyle} mb-5`}
  >
    <GooglePlacesAutocomplete
      fetchDetails={true}
      placeholder="Where To Go ?"
      debounce={200}
      styles={{
        textInputContainer: {
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 20,
          marginHorizontal: 20,
          position: "relative",
          shadowColor: "#D4D4D4",
        },
        textInput: {
          backgroundColor: textInputBackgroundColor || "white",
          fontSize: 16,
          fontWeight: "600",
          marginTop: 5,
          width: "100%",
          borderRadius: 200,
        },
        listView: {
          backgroundColor: textInputBackgroundColor || "white",
          position: "relative",
          top: 0,
          width: "100%",
          borderRadius: 10,
          shadowColor: "#D4D4D4",
          zIndex: 99,
        },
      }}
    />
  </View>
);

export default GoogleTextInput;
