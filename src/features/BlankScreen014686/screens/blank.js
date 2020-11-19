import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Text style={styles.Text_3}>Sample text content</Text>
      <Button
        title="Press me!"
        style={styles.Button_2}
        onPress={() => alert("Pressed!")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },

  View_1: {},
  Button_2: { textAlign: "right", textAlignVertical: "top" },
  Text_3: { width: "100%" },
  TextInput_4: { textAlign: "right" },
  TextInput_5: { textAlign: "center" },
  TextInput_6: { height: 100, textAlign: "right" },
  Switch_7: { alignSelf: "flex-start" },
  CheckBox_8: {
    textDecorationLine: "underline overline",
    lineHeight: 20,
    letterSpacing: 6
  },

  CheckBox_9: {},
  View_1: {},
  Button_2: { textAlign: "right", textAlignVertical: "top" },
  Text_3: { width: "100%" },
  TextInput_4: { textAlign: "right" },
  TextInput_5: { textAlign: "center" },
  TextInput_6: { height: 100, textAlign: "right" },
  Switch_7: { alignSelf: "flex-start" },
  CheckBox_8: {
    textDecorationLine: "underline overline",
    lineHeight: 20,
    letterSpacing: 6
  },

  CheckBox_9: {},
  View_1: {},
  Button_2: { textAlign: "right", textAlignVertical: "top" },
  Text_3: { width: "100%" },
  TextInput_4: { textAlign: "right" },
  TextInput_5: { textAlign: "center" },
  TextInput_6: { height: 100, textAlign: "right" },
  Switch_7: { alignSelf: "flex-start", textAlign: "right" },
  CheckBox_8: {
    textDecorationLine: "underline overline",
    lineHeight: 20,
    letterSpacing: 6
  },

  CheckBox_9: {},
  View_1: {},
  Button_2: { textAlign: "right", textAlignVertical: "top" },
  Text_3: { width: "100%" },
  TextInput_4: { textAlign: "right" },
  TextInput_5: { textAlign: "center" },
  TextInput_6: { height: 100, textAlign: "right" },
  Switch_7: { textAlign: "right" },
  CheckBox_8: {
    textDecorationLine: "underline overline",
    lineHeight: 20,
    letterSpacing: 6
  },

  CheckBox_9: {},
  View_1: {},
  Text_3: { width: "100%" },
  Button_2: { textAlign: "right", textAlignVertical: "top" },
  View_1: {},
  Text_3: {
    width: 85,
    height: 100,
    overflow: "scroll",
    textDecorationLine: "underline",
    lineHeight: 42,
    letterSpacing: 39
  },
  Button_2: { textAlign: "right", textAlignVertical: "top" }
})
