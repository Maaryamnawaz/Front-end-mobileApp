import React, { Component } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ActivityIndicator,
  Alert
} from "react-native";
// import { SCREEN_WIDTH, Colors, SCREEN_HEIGHT } from "../Helper/Layout";import Axios from "axios";
// import { NavigationActions, StackActions } from "react-navigation";
// import { AsyncStorage } from "react-native";

// import jwt_decode from "jwt-decode";
// import moment from "moment";
// import { URL } from "../Helper/Api";
// import Header from "../Components/Header";
// import registerForPushNotificationsAsync from "../Helper/PushNotifications";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isLoading: false,
      isAppLoading: true
    };
  }
render() {
    return (
        <text>Welcome </text>
 );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  card: {
    width: SCREEN_WIDTH - 80,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    elevation: 10,
    padding: 40,
    backgroundColor: "white",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.9
  },
  buttonContainer: {
    width: SCREEN_WIDTH - 120,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    elevation: 10,
    backgroundColor: Colors.primaryColor,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    height: 50,
    flexDirection: "row",
    alignContent: "center"
  },
  textField: {
    width: SCREEN_WIDTH - 120,
    borderRadius: 5,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    elevation: 10,
    height: 50,
    padding: 10
  },
  buttonText: {
    color: "white",
    fontSize: 16
  },
  title: {
    fontSize: 20,
    marginBottom: 30,
    fontWeight: "500"
  }
});

Login.navigationOptions = {
  header: null
};
