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

  state = {
    TextInput_4: "",
    TextInput_5: "",
    TextInput_6: "",
    Switch_7: true,
    CheckBox_8: true,
    CheckBox_9: true
  }

  render = () => (
    <View>
      <Button
        title="Press me!"
        style={styles.Button_2}
        onPress={() => alert("Pressed!")}
      />
      <Text style={styles.Text_3}>Sample text content</Text>
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_4}
        value={this.state.TextInput_4}
        onChangeText={nextValue => this.setState({ TextInput_4: nextValue })}
      />
      <TextInput
        placeholder="Number Input Placeholder"
        style={styles.TextInput_5}
        value={this.state.TextInput_5}
        onChangeText={nextValue => this.setState({ TextInput_5: nextValue })}
      />
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_6}
        value={this.state.TextInput_6}
        onChangeText={nextValue => this.setState({ TextInput_6: nextValue })}
      />
      <Switch
        style={styles.Switch_7}
        value={this.state.Switch_7}
        onValueChange={nextChecked => this.setState({ Switch_7: nextChecked })}
      />
      <CheckBox
        title="Radio button"
        containerStyle={styles.CheckBox_8}
        checked={this.state.CheckBox_8}
        onPress={nextChecked => this.setState({ CheckBox_8: nextChecked })}
      />
      <CheckBox
        title="Checkbox"
        checked={this.state.CheckBox_9}
        onPress={nextChecked => this.setState({ CheckBox_9: nextChecked })}
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
  CheckBox_9: {}
})
