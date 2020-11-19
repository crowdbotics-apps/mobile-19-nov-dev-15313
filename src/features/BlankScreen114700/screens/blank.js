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
    TextInput_2:
      "hfgk jbvjhvgv hgfjghgfh hghgfgfhg hgfjhgfjhg  hgffgf ghfhfhgf hgjgfjghfjgh jhgfjhgfjhg gfjhgfhf gfgfhfgjhg gfdjfgfjytfjt gfjtftf ytfdytftyfty ytftyftyf ytftyftftftyf tyftyfttfvytfytfty gyfytftfy gyftyfftf uyfttyff huyfytfytf gyfytftyf"
  }

  render = () => (
    <View>
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_2}
        value={this.state.TextInput_2}
        onChangeText={nextValue => this.setState({ TextInput_2: nextValue })}
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
  TextInput_2: {
    overflow: "scroll",
    textAlign: "center",
    textDecorationLine: "underline",
    textTransform: "uppercase"
  },
  View_1: {},
  TextInput_2: {
    overflow: "visible",
    textAlign: "center",
    textDecorationLine: "underline",
    textTransform: "uppercase"
  }
})
